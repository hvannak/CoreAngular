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
            return _context.dailyAnimalGrow;
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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.dailyAnimalGrow.Add(dailyAnimalGrow);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDailyAnimalGrow", new { id = dailyAnimalGrow.DailyGrowId }, dailyAnimalGrow);
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