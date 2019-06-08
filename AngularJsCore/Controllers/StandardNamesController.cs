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
    public class StandardNamesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StandardNamesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/StandardNames
        [HttpGet]
        public IEnumerable<StandardName> GetStandardName()
        {
            return _context.standardNames;
        }

        // GET: api/StandardNames/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStandardName([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var standardName = await _context.standardNames.FindAsync(id);

            if (standardName == null)
            {
                return NotFound();
            }

            return Ok(standardName);
        }

        // PUT: api/StandardNames/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStandardName([FromRoute] int id, [FromBody] StandardName standardName)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != standardName.StandardNameId)
            {
                return BadRequest();
            }

            _context.Entry(standardName).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StandardNameExists(id))
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

        // POST: api/StandardNames
        [HttpPost]
        public async Task<IActionResult> PostStandardName([FromBody] StandardName standardName)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.standardNames.Add(standardName);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStandardName", new { id = standardName.StandardNameId }, standardName);
        }

        // DELETE: api/StandardNames/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStandardName([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var standardName = await _context.standardNames.FindAsync(id);
            if (standardName == null)
            {
                return NotFound();
            }

            _context.standardNames.Remove(standardName);
            await _context.SaveChangesAsync();

            return Ok(standardName);
        }

        private bool StandardNameExists(int id)
        {
            return _context.standardNames.Any(e => e.StandardNameId == id);
        }
    }
}