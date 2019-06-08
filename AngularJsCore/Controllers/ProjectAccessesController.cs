using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Authorization;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProjectAccessesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProjectAccessesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ProjectAccesses
        [HttpGet]
        public IEnumerable<ProjectAccess> GetprojectAccesses()
        {
            return _context.projectAccesses;
        }

        // GET: api/ProjectAccesses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjectAccess([FromRoute] int id)
        {
            var projectAccess = await _context.projectAccesses.Include(x => x.ApplicationUser).Where(x => x.ProjectId == id).Select(x => new
            {
                x.ApplicationUser.UserName
            }).ToListAsync();
            return Ok(projectAccess);
        }

        // POST: api/ProjectAccesses
        [HttpPost]
        public async Task<IActionResult> PostProjectAccess([FromBody] ProjectAccess projectAccess)
        {
            _context.projectAccesses.Add(projectAccess);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectAccess", new { id = projectAccess.ProjectAccessId }, projectAccess);
        }

        // DELETE: api/ProjectAccesses/5
        [HttpDelete("{id}/{projectId}")]
        public async Task<IActionResult> DeleteProjectAccess([FromRoute] string id,int projectId)
        {
            var projectAccess = await _context.projectAccesses.Where(x => x.UserId == id && x.ProjectId == projectId).FirstOrDefaultAsync();
            _context.projectAccesses.Remove(projectAccess);
            await _context.SaveChangesAsync();

            return Ok(projectAccess);
        }

    }
}