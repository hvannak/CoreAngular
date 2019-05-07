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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var warehouseAccess = await _context.WarehouseAccess.FindAsync(id);

            if (warehouseAccess == null)
            {
                return NotFound();
            }

            return Ok(warehouseAccess);
        }

        // PUT: api/WarehouseAccesses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWarehouseAccess([FromRoute] int id, [FromBody] WarehouseAccess warehouseAccess)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != warehouseAccess.WarehouseAccessId)
            {
                return BadRequest();
            }

            _context.Entry(warehouseAccess).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WarehouseAccessExists(id))
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

        // POST: api/WarehouseAccesses
        [HttpPost]
        public async Task<IActionResult> PostWarehouseAccess([FromBody] WarehouseAccess warehouseAccess)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WarehouseAccess.Add(warehouseAccess);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWarehouseAccess", new { id = warehouseAccess.WarehouseAccessId }, warehouseAccess);
        }

        // DELETE: api/WarehouseAccesses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWarehouseAccess([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var warehouseAccess = await _context.WarehouseAccess.FindAsync(id);
            if (warehouseAccess == null)
            {
                return NotFound();
            }

            _context.WarehouseAccess.Remove(warehouseAccess);
            await _context.SaveChangesAsync();

            return Ok(warehouseAccess);
        }

        private bool WarehouseAccessExists(int id)
        {
            return _context.WarehouseAccess.Any(e => e.WarehouseAccessId == id);
        }
    }
}