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
    public class WarehouseAccessesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WarehouseAccessesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/WarehouseAccesses
        [HttpGet]
        public IEnumerable<WarehouseAccess> GetWarehouseAccess()
        {
            return _context.WarehouseAccess;
        }

        // GET: api/WarehouseAccesses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWarehouseAccess([FromRoute] int id)
        {
            var userWarehouseAccess = await _context.WarehouseAccess.Include(x => x.ApplicationUser).Where(x=>x.WarehouseId==id).Select(x => new
            {
                x.ApplicationUser.UserName
            }).ToListAsync();
            return Ok(userWarehouseAccess);
        }

        // POST: api/WarehouseAccesses
        [HttpPost]
        public async Task<IActionResult> PostWarehouseAccess([FromBody] WarehouseAccess warehouseAccess)
        {
            _context.WarehouseAccess.Add(warehouseAccess);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWarehouseAccess", new { id = warehouseAccess.WarehouseAccessId }, warehouseAccess);
        }

        // DELETE: api/WarehouseAccesses/5
        [HttpDelete("{id}/{warehouseId}")]
        public async Task<IActionResult> DeleteWarehouseAccess([FromRoute] string id,int warehouseId)
        {
            var warehouseAccess = await _context.WarehouseAccess.Where(x => x.UserId == id && x.WarehouseId == warehouseId).FirstOrDefaultAsync();
            _context.WarehouseAccess.Remove(warehouseAccess);
            await _context.SaveChangesAsync();
            return Ok(warehouseAccess);
        }

    }
}