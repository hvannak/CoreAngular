using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class ImagesFile
    {
        [Key]
        public int FileId { get; set; }
        public string Caption { get; set; }
        public string ModuleId { get; set; }
        public int OperationId { get; set; }
        public byte[] StoreFile { get; set; }
        [NotMapped]
        public IFormFile formFile { get; set; }
    }
}
