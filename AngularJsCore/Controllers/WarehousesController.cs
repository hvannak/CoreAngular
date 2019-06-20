using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Identity;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class WarehousesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WarehousesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Warehouses
        [HttpGet]
        public IEnumerable<Warehouse> Getwarehouses()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = _context.warehouses.Where(s => s.WarehouseAccesses.Any(c => c.UserId == userId));
            return result;
        }

        [HttpGet("All")]
        public IEnumerable<Warehouse> GetAllwarehouses()
        {
            var result = _context.warehouses;
            return result;
        }

        // GET: api/Warehouses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWarehouse([FromRoute] int id)
        {
            var warehouse = await _context.warehouses.FindAsync(id);
            return Ok(warehouse);
        }

        // GET: api/Warehouses/5
        [HttpGet("ProjectId/{id}")]
        public async Task<IActionResult> GetWarehouseByProjectId(int id)
        {
            var project = await _context.projects.Include(x => x.Warehouse).Where(x => x.ProjectId == id).Select(x=>new
            {
                x.Warehouse.WarehouseId,
                x.Warehouse.WarehouseName
            }).ToListAsync();
            return Ok(project);
        }


        // PUT: api/Warehouses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWarehouse([FromRoute] int id, [FromBody] Warehouse warehouse)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != warehouse.WarehouseId)
            {
                return BadRequest();
            }

            _context.Entry(warehouse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WarehouseExists(id))
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

        // POST: api/Warehouses
        [HttpPost]
        public async Task<IActionResult> PostWarehouse([FromBody] Warehouse warehouse)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.warehouses.Add(warehouse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWarehouse", new { id = warehouse.WarehouseId }, warehouse);
        }

        // DELETE: api/Warehouses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWarehouse([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var warehouse = await _context.warehouses.FindAsync(id);
            if (warehouse == null)
            {
                return NotFound();
            }

            _context.warehouses.Remove(warehouse);
            await _context.SaveChangesAsync();

            return Ok(warehouse);
        }

        private bool WarehouseExists(int id)
        {
            return _context.warehouses.Any(e => e.WarehouseId == id);
        }
    }
}