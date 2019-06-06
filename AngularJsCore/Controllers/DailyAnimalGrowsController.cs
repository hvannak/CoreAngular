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
    public class DailyAnimalGrowsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DailyAnimalGrowsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/DailyAnimalGrows
        [HttpGet]
        public IEnumerable<DailyAnimalGrow> GetDailyAnimalGrow()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = (from x in _context.dailyAnimalGrow
                          join y in _context.projectAccesses on x.ProjectId equals y.ProjectId
                          where y.UserId == userId
                          select new DailyAnimalGrow()
                          {
                              DailyGrowId = x.DailyGrowId,
                              InventoryDesc = x.InventoryDesc,
                              DateGrow = x.DateGrow,
                              InventoryId = x.InventoryId,
                              Inventorys = x.Inventorys,
                              NumberOfDay = x.NumberOfDay,
                              ProjectId = x.ProjectId,
                              ProjectName = x.ProjectName,
                              WarehouseId = x.WarehouseId,
                              WarehouseName = x.WarehouseName,
                              Weight = x.Weight
                          }).OrderByDescending(x => x.DailyGrowId).Take(300);
            //return _context.dailyAnimalGrow.Take(300);
            return result;
        }

        // GET: api/DailyAnimalGrows/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDailyAnimalGrow([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dailyAnimalGrow = await _context.dailyAnimalGrow.FindAsync(id);

            if (dailyAnimalGrow == null)
            {
                return NotFound();
            }

            return Ok(dailyAnimalGrow);
        }

        [HttpGet("viewwithstandard/{projectId}/{standardId}")]
        public async Task<IActionResult> GetDailyGrowWithStandard(int projectId,int standardId)
        {
            var result = await _context.dailyAnimalGrow.Join(_context.standards, x => x.NumberOfDay,
                                                        y => y.NumberOfDay, (x, y) =>
                                                           new AnimalGrowStandard
                                                           {
                                                               ProjectId = x.ProjectId,
                                                               ProjectName = x.ProjectName,
                                                               WarehouseName = x.WarehouseName,
                                                               InventoryDesc = x.InventoryDesc,
                                                               Weight = x.Weight,
                                                               NumberOfDay = x.NumberOfDay,
                                                               DateGrow = x.DateGrow,
                                                               StandardName = y.StandardName,
                                                               StandardNameId = y.StandardNameId,
                                                               ResultOfDay = y.ResultOfDay,
                                                               UOM = y.UOM
                                                           }).Where(z => z.StandardNameId == standardId && z.ProjectId == projectId).ToListAsync();
            return Ok(result);
        }

        // PUT: api/DailyAnimalGrows/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDailyAnimalGrow([FromRoute] int id, [FromBody] DailyAnimalGrow dailyAnimalGrow)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dailyAnimalGrow.DailyGrowId)
            {
                return BadRequest();
            }
            //Numberofday
            var project = _context.projects.Find(dailyAnimalGrow.ProjectId);
            int numberofday = Convert.ToInt32(dailyAnimalGrow.DateGrow.Subtract(project.StartDate).TotalDays);
            dailyAnimalGrow.NumberOfDay = numberofday;

            _context.Entry(dailyAnimalGrow).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DailyAnimalGrowExists(id))
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

        // POST: api/DailyAnimalGrows
        [HttpPost]
        public async Task<IActionResult> PostDailyAnimalGrow([FromBody] DailyAnimalGrow dailyAnimalGrow)
        {
            //Numberofday
            DateTime projectstart = _context.projects.Find(dailyAnimalGrow.ProjectId).StartDate;
            int numberofday = Convert.ToInt32(dailyAnimalGrow.DateGrow.Subtract(projectstart).TotalDays);
            dailyAnimalGrow.NumberOfDay = numberofday;

            _context.dailyAnimalGrow.Add(dailyAnimalGrow);
            await _context.SaveChangesAsync();
            DailyAnimalGrow dailyAnimalGrowReturn = new DailyAnimalGrow()
            {
                DailyGrowId = dailyAnimalGrow.DailyGrowId,
                WarehouseId = dailyAnimalGrow.WarehouseId,
                ProjectId = dailyAnimalGrow.ProjectId,
                WarehouseName = dailyAnimalGrow.WarehouseName,
                ProjectName = dailyAnimalGrow.ProjectName,
                Weight = dailyAnimalGrow.Weight,
                DateGrow = dailyAnimalGrow.DateGrow,
                NumberOfDay = dailyAnimalGrow.NumberOfDay,
                InventoryId = dailyAnimalGrow.InventoryId,
                InventoryDesc = dailyAnimalGrow.InventoryDesc
                
            };
            return Ok(dailyAnimalGrowReturn);
        }

        // DELETE: api/DailyAnimalGrows/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDailyAnimalGrow([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var dailyAnimalGrow = await _context.dailyAnimalGrow.FindAsync(id);
            if (dailyAnimalGrow == null)
            {
                return NotFound();
            }

            _context.dailyAnimalGrow.Remove(dailyAnimalGrow);
            await _context.SaveChangesAsync();

            return Ok(dailyAnimalGrow);
        }

        private bool DailyAnimalGrowExists(int id)
        {
            return _context.dailyAnimalGrow.Any(e => e.DailyGrowId == id);
        }
    }
}