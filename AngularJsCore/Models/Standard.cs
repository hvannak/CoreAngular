using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Standard
    {
        [Key]
        public int StandardKey { get; set; }
        public string StandardName { get; set; }
        public int StandardNameId { get; set; }
        public int? NumberOfDay { get; set; }
        public decimal? ResultOfDay { get; set; }
        public int UomId { get; set; }
        public string UOM { get; set; }
        public UnitOfMeasure UnitOfMeasure { get; set; }
        public StandardName StandardNames { get; set; }
    }
}
