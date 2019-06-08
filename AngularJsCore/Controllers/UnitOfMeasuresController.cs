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
    public class UnitOfMeasuresController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UnitOfMeasuresController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/UnitOfMeasures
        [HttpGet]
        public IEnumerable<UnitOfMeasure> GetunitOfMeasures()
        {
            return _context.unitOfMeasures;
        }

        // GET: api/UnitOfMeasures/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUnitOfMeasure([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var unitOfMeasure = await _context.unitOfMeasures.FindAsync(id);

            if (unitOfMeasure == null)
            {
                return NotFound();
            }

            return Ok(unitOfMeasure);
        }

        // PUT: api/UnitOfMeasures/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUnitOfMeasure([FromRoute] int id, [FromBody] UnitOfMeasure unitOfMeasure)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != unitOfMeasure.UomId)
            {
                return BadRequest();
            }

            _context.Entry(unitOfMeasure).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnitOfMeasureExists(id))
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

        // POST: api/UnitOfMeasures
        [HttpPost]
        public async Task<IActionResult> PostUnitOfMeasure([FromBody] UnitOfMeasure unitOfMeasure)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.unitOfMeasures.Add(unitOfMeasure);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUnitOfMeasure", new { id = unitOfMeasure.UomId }, unitOfMeasure);
        }

        // DELETE: api/UnitOfMeasures/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUnitOfMeasure([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var unitOfMeasure = await _context.unitOfMeasures.FindAsync(id);
            if (unitOfMeasure == null)
            {
                return NotFound();
            }

            _context.unitOfMeasures.Remove(unitOfMeasure);
            await _context.SaveChangesAsync();

            return Ok(unitOfMeasure);
        }

        private bool UnitOfMeasureExists(int id)
        {
            return _context.unitOfMeasures.Any(e => e.UomId == id);
        }
    }
}