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
    public class InventorysController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public InventorysController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Inventorys
        [HttpGet]
        public IEnumerable<Inventorys> GetInventorys()
        {
            return _context.Inventorys.Take(300);
        }

        // GET: api/Inventorys/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInventorys([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inventorys = await _context.Inventorys.FindAsync(id);

            if (inventorys == null)
            {
                return NotFound();
            }

            return Ok(inventorys);
        }

        // GET: api/Inventorys/5
        [HttpGet("Last/{last}")]
        public async Task<IActionResult> GetInventorysByLast(int last)
        {
            var inventorys = await _context.Inventorys.Where(x => x.InventoryId > last && x.InventoryId <= last + 100).ToListAsync();
            return Ok(inventorys);
        }

        // GET: api/Inventorys/5
        [HttpGet("Name/{name}")]
        public async Task<IActionResult> GetInventorysByName(string name)
        {
            var inventorys = await _context.Inventorys.Where(x => x.InventoryDesr.ToLower().Contains(name.ToLower())).ToListAsync();
            return Ok(inventorys);
        }

        [HttpGet("Category/{category}")]
        public async Task<IActionResult> GetInventoryByCategory(string category)
        {
            int categoryId = _context.categories.Where(x => x.CategoryName == category).Select(x => x.CategoryId).FirstOrDefault();
            var result = await _context.Inventorys.Where(x=>x.CategoryId == categoryId).ToListAsync();
            return Ok(result);
        }

        // PUT: api/Inventorys/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventorys([FromRoute] int id, [FromBody] Inventorys inventorys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inventorys.InventoryId)
            {
                return BadRequest();
            }

            _context.Entry(inventorys).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventorysExists(id))
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

        // POST: api/Inventorys
        [HttpPost]
        public async Task<IActionResult> PostInventorys([FromBody] Inventorys inventorys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Inventorys.Add(inventorys);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInventorys", new { id = inventorys.InventoryId }, inventorys);
        }

        // DELETE: api/Inventorys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventorys([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inventorys = await _context.Inventorys.FindAsync(id);
            if (inventorys == null)
            {
                return NotFound();
            }

            _context.Inventorys.Remove(inventorys);
            await _context.SaveChangesAsync();

            return Ok(inventorys);
        }

        private bool InventorysExists(int id)
        {
            return _context.Inventorys.Any(e => e.InventoryId == id);
        }
    }
}