using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        [HttpGet]
        public IEnumerable<Project> Getprojects()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = _context.projects.Where(s => s.ProjectAccesses.Any(c => c.UserId == userId)).OrderByDescending(x=>x.ProjectId);
            return result;
        }

        [HttpGet("All")]
        public IEnumerable<Project> GetAllprojects()
        {
            var result = _context.projects;
            return result;
        }

        // GET: api/Projects/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProject([FromRoute] int id)
        {
            var project = await _context.projects.FindAsync(id);
            return Ok(project);
        }

        [HttpGet("ProjectStatus/{status}")]
        public async Task<IActionResult> GetProject(string status)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = await _context.projects.Where(s => s.ProjectAccesses.Any(c => c.UserId == userId)).Where(x=>x.Status == status).OrderByDescending(x => x.ProjectId).ToListAsync();
            //var project = await _context.projects.Where(x => x.Status == status).ToListAsync();
            return Ok(result);
        }

        [HttpGet("ProjectDaily/{projectId}/{standardFeed}/{standardAnimal}")]
        public async Task<IActionResult> GetProjectDaily(int projectId,int standardFeed,int standardAnimal)
        {
            //string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var project = _context.projects.Where(x => x.ProjectId == projectId).FirstOrDefault();
            List<ProjectDaily> projectDailies = new List<ProjectDaily>();
            if (project != null)
            {
                DateTime start = project.StartDate;
                DateTime end = project.EndDate;
                int i = 0;
                while (start <= end)
                {
                    projectDailies.Add(new ProjectDaily
                    {
                        DailyDate = start,
                        NumberOfDay = i
                    });
                    start = start.Date.AddDays(1);
                    i++;
                }
                var standardFeeds = _context.standards.Where(x => x.StandardNameId == standardFeed);
                var standardAnimals = _context.standards.Where(x => x.StandardNameId == standardAnimal);
                var dailyAnimalGrow = _context.dailyAnimalGrow.Where(x => x.ProjectId == projectId);
                var dailyIssue = _context.receipts.Join(_context.receiptLines, x => x.ReceiptId,
                                            y => y.ReceiptId, (x, y) => new
                                            {
                                                x.ReceiptDate,
                                                x.TranType,
                                                y.ProjectId,
                                                y.Qty,
                                                y.Reason
                                            }).Where(z => (z.TranType == "Issue" || z.TranType == "Adjust") && z.ProjectId == projectId && (z.Reason == "FEED" || z.Reason == "ANIMAL"));
                var dailyIssue_Feed = dailyIssue.Where(x=>x.Reason == "FEED").GroupBy(zt => zt.ReceiptDate).Select(zr => new
                                                                            {
                                                                                zr.FirstOrDefault().ReceiptDate,
                                                                                Qty = zr.Sum(k => k.Qty)
                                                                            });
                var dailyIssue_Animal = dailyIssue.Where(x => x.Reason == "ANIMAL").GroupBy(zt => zt.ReceiptDate).Select(zr => new
                                                                            {
                                                                                zr.FirstOrDefault().ReceiptDate,
                                                                                Qty = zr.Sum(k => k.Qty)
                                                                            });
                var dailySale = _context.saleInvoices.Join(_context.saleInvoiceLines, x => x.SaleInvoiceId, y => y.SaleInvoiceId, (x, y) => new
                {
                    x.DocDate,
                    x.ProjectId,
                    y.Qty,
                    y.Weight,
                    y.ExtAmount
                }).Where(z => z.ProjectId == projectId).GroupBy(k=>k.DocDate).Select( kz => new
                {
                    kz.FirstOrDefault().DocDate,
                    Qty = kz.Sum(x=>x.Qty),
                    ExtAmount = kz.Sum(x=>x.ExtAmount),
                    Weight = kz.Sum(x=>x.Weight)
                });

                var projectstandard = (from x in projectDailies
                                             join y in standardAnimals on x.NumberOfDay equals y.NumberOfDay into yt
                                             join z in standardFeeds on x.NumberOfDay equals z.NumberOfDay into zt
                                             join l in dailyAnimalGrow on x.DailyDate.Date equals l.DateGrow.Date into lt
                                             join f in dailyIssue_Feed on x.DailyDate.Date equals f.ReceiptDate.Date into ft
                                             join a in dailyIssue_Animal on x.DailyDate.Date equals a.ReceiptDate.Date into at
                                             join s in dailySale on x.DailyDate.Date equals s.DocDate.Date into st
                                             from yz in yt.DefaultIfEmpty()
                                             from zk in zt.DefaultIfEmpty()
                                             from tl in lt.DefaultIfEmpty()
                                             from tf in ft.DefaultIfEmpty()
                                             from ta in at.DefaultIfEmpty()
                                             from ts in st.DefaultIfEmpty()
                                             select new
                                             {
                                                 //NumberOfDay = yz != null ? yz.NumberOfDay : null,
                                                 x.NumberOfDay,
                                                 ResultOfDayAnimal = yz != null ? yz.ResultOfDay : null,
                                                 ResultOfDayFeed = zk != null ? zk.ResultOfDay : null,
                                                 AcualAnimalWeight = tl != null ? tl.Weight : null,
                                                 AcualFeed = tf != null ? tf.Qty : null,
                                                 AnimalDead = ta != null ? ta.Qty : null,
                                                 QtySale = ts != null ? ts.Qty : null,
                                                 WeightSale = ts != null ? ts.Weight : null,
                                                 ExtAmount = ts != null ? ts.ExtAmount : null,
                                                 x.DailyDate
                                             }).ToList();
                return Ok(projectstandard);
            }

            return Ok();
        }

        // PUT: api/Projects/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject([FromRoute] int id, [FromBody] Project project)
        {
            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Projects
        [HttpPost]
        public async Task<IActionResult> PostProject([FromBody] Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { id = project.ProjectId }, project);
        }

        // DELETE: api/Projects/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var project = await _context.projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.projects.Remove(project);
            await _context.SaveChangesAsync();

            return Ok(project);
        }

        private bool ProjectExists(int id)
        {
            return _context.projects.Any(e => e.ProjectId == id);
        }
    }
}