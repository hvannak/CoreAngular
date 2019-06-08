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
    public class INSiteStatusController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public INSiteStatusController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/INSiteStatus
        [HttpGet]
        public IEnumerable<INSiteStatus> GetiNSiteStatuses()
        {
            return _context.iNSiteStatuses;
        }

        // GET: api/INSiteStatus/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetINSiteStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var iNSiteStatus = await _context.iNSiteStatuses.FindAsync(id);

            if (iNSiteStatus == null)
            {
                return NotFound();
            }

            return Ok(iNSiteStatus);
        }

        [HttpGet("Cost/{projectId}/{warehouseId}/{inventoryId}")]
        public async Task<IActionResult> GetReceiptByDate(int projectId, int warehouseId, int inventoryId)
        {
            var result = await _context.iNSiteStatuses.Where(x => x.ProjectId == projectId && x.WarehouseId == warehouseId && x.InventoryId == inventoryId).FirstOrDefaultAsync();
            return Ok(result);
        }

        [HttpGet("Projectstatus/{projectId}/{inventoryId}")]
        public async Task<IActionResult> GetProjectStatusByInventory(int projectId,int inventoryId)
        {
            var result = await _context.iNSiteStatuses.Where(x => x.ProjectId == projectId).ToListAsync();
            if(inventoryId != 0)
            {
                result = result.Where(x => x.InventoryId == inventoryId).ToList();
            }
            return Ok(result);
        }

        // PUT: api/INSiteStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutINSiteStatus([FromRoute] int id, [FromBody] INSiteStatus iNSiteStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != iNSiteStatus.InSiteId)
            {
                return BadRequest();
            }

            _context.Entry(iNSiteStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!INSiteStatusExists(id))
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

        // POST: api/INSiteStatus
        [HttpPost]
        public async Task<IActionResult> PostINSiteStatus([FromBody] INSiteStatus iNSiteStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.iNSiteStatuses.Add(iNSiteStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetINSiteStatus", new { id = iNSiteStatus.InSiteId }, iNSiteStatus);
        }

        // DELETE: api/INSiteStatus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteINSiteStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var iNSiteStatus = await _context.iNSiteStatuses.FindAsync(id);
            if (iNSiteStatus == null)
            {
                return NotFound();
            }

            _context.iNSiteStatuses.Remove(iNSiteStatus);
            await _context.SaveChangesAsync();

            return Ok(iNSiteStatus);
        }

        private bool INSiteStatusExists(int id)
        {
            return _context.iNSiteStatuses.Any(e => e.InSiteId == id);
        }
    }
}