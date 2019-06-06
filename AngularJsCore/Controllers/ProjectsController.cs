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

        [HttpGet("ProjectDaily/{projectId}")]
        public async Task<IActionResult> GetProjectDaily(int projectId)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var startproject = _context.projects.Where(x => x.ProjectId == projectId).Select(x => x.StartDate).FirstOrDefault();

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