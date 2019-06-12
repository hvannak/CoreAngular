using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;
using System.IO;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesFilesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ImagesFilesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ImagesFiles
        [HttpGet]
        public IEnumerable<ImagesFile> GetimagesFiles()
        {
            return _context.imagesFiles;
        }

        // GET: api/ImagesFiles/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetImagesFile([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var imagesFile = await _context.imagesFiles.FindAsync(id);

            if (imagesFile == null)
            {
                return NotFound();
            }

            return Ok(imagesFile);
        }

        // PUT: api/ImagesFiles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImagesFile([FromRoute] int id, [FromBody] ImagesFile imagesFile)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != imagesFile.FileId)
            {
                return BadRequest();
            }

            _context.Entry(imagesFile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImagesFileExists(id))
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

        // POST: api/ImagesFiles
        [HttpPost]
        public async Task<IActionResult> PostImagesFile([FromBody] ImagesFile imagesFile)
        {
            using (var memoryStream = new MemoryStream())
            {
                await imagesFile.formFile.CopyToAsync(memoryStream);
                imagesFile.StoreFile = memoryStream.ToArray();
            }
            _context.imagesFiles.Add(imagesFile);
            await _context.SaveChangesAsync();
            return Ok();
            //return CreatedAtAction("GetImagesFile", new { id = imagesFile.FileId }, imagesFile);
        }

        // DELETE: api/ImagesFiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImagesFile([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var imagesFile = await _context.imagesFiles.FindAsync(id);
            if (imagesFile == null)
            {
                return NotFound();
            }

            _context.imagesFiles.Remove(imagesFile);
            await _context.SaveChangesAsync();

            return Ok(imagesFile);
        }

        private bool ImagesFileExists(int id)
        {
            return _context.imagesFiles.Any(e => e.FileId == id);
        }
    }
}