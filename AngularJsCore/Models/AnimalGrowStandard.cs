using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class AnimalGrowStandard
    {
        public int ProjectId { get; set; }
        public string StandardName { get; set; }
        public int StandardNameId { get; set; }
        public string ProjectName { get; set; }
        public string WarehouseName { get; set; }
        public string InventoryDesc { get; set; }
        public DateTime DateGrow { get; set; }
        public decimal? Weight { get; set; }
        public int? NumberOfDay { get; set; }
        public decimal? ResultOfDay { get; set; }
        public string UOM { get; set; }
    }
}
