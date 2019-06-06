using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class StandardName
    {
        [Key]
        public int StandardNameId { get; set; }
        public string Standard { get; set; }
        public string Type { get; set; }
        public virtual ICollection<Standard> Standards { get; set; }
    }
}
