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
    //[Authorize]
    public class StandardsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StandardsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Standards
        [HttpGet]
        public IEnumerable<Standard> Getstandards()
        {
            var result = _context.standards.Include(x => x.UnitOfMeasure).Select(x => new Standard()
            {
                StandardKey = x.StandardKey,
                UOM = x.UnitOfMeasure.UOM,
                StandardName = x.StandardName,
                NumberOfDay = x.NumberOfDay,
                ResultOfDay = x.ResultOfDay,
                UomId = x.UomId
            });
            return result;
        }

        // GET: api/Standards/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStandard([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var standard = await _context.standards.FindAsync(id);

            if (standard == null)
            {
                return NotFound();
            }

            return Ok(standard);
        }

        // PUT: api/Standards/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStandard([FromRoute] int id, [FromBody] Standard standard)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != standard.StandardKey)
            {
                return BadRequest();
            }

            _context.Entry(standard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StandardExists(id))
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

        // POST: api/Standards
        [HttpPost]
        public async Task<IActionResult> PostStandard([FromBody] Standard standard)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.standards.Add(standard);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStandard", new { id = standard.StandardKey }, standard);
        }

        // DELETE: api/Standards/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStandard([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var standard = await _context.standards.FindAsync(id);
            if (standard == null)
            {
                return NotFound();
            }

            _context.standards.Remove(standard);
            await _context.SaveChangesAsync();

            return Ok(standard);
        }

        private bool StandardExists(int id)
        {
            return _context.standards.Any(e => e.StandardKey == id);
        }
    }
}