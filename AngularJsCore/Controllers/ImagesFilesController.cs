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
        public IEnumerable<ImagesFile> GetImagesFile([FromRoute] int id)
        {
            var imagesFile = _context.imagesFiles.Where(x=>x.FileId == id).ToList();
            //string[] arraystring = imagesFile.StoreFile.Split(',');
            //string convertStr = arraystring[1];
            //imagesFile.StoreFile = convertStr;
            //byte[] imageBytes = Convert.FromBase64String(convertStr);
            //string path = AppDomain.CurrentDomain.BaseDirectory + "Configs\\2.png";
            //System.IO.File.WriteAllBytes(path, imageBytes);
            return imagesFile;
        }

        // GET: api/ImagesFiles/5
        [HttpGet("FileByModule/{id}/{module}")]
        public IEnumerable<ImagesFile> GetImagesFileByModule([FromRoute] int id,string module)
        {
            var imagesFile = _context.imagesFiles.Where(x => x.OperationId == id && x.ModuleId == module).ToList();
            //string[] arraystring = imagesFile.StoreFile.Split(',');
            //string convertStr = arraystring[1];
            //imagesFile.StoreFile = convertStr;
            //byte[] imageBytes = Convert.FromBase64String(convertStr);
            //string path = AppDomain.CurrentDomain.BaseDirectory + "Configs\\2.png";
            //System.IO.File.WriteAllBytes(path, imageBytes);
            return imagesFile;
        }

        // POST: api/ImagesFiles
        [HttpPost]
        public async Task<IActionResult> PostImagesFile([FromBody] ImagesFile imagesFile)
        {

            _context.imagesFiles.Add(imagesFile);
            await _context.SaveChangesAsync();
            ImagesFile images = new ImagesFile();
            images.FileId = imagesFile.FileId;
            images.Caption = imagesFile.Caption;
            images.ModuleId = imagesFile.ModuleId;
            images.OperationId = imagesFile.OperationId;
            images.StoreFile = imagesFile.StoreFile;
            return Ok(images);
            //return CreatedAtAction("GetImagesFile", new { id = imagesFile.FileId }, imagesFile);
        }

        // DELETE: api/ImagesFiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteImagesFile([FromRoute] int id)
        {
            var imagesFile = await _context.imagesFiles.FindAsync(id);
            _context.imagesFiles.Remove(imagesFile);
            await _context.SaveChangesAsync();
            return Ok(imagesFile);
        }

    }
}