using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class DailyAnimalGrow
    {
        [Key]
        public int DailyGrowId { get; set; }
        public int InventoryId { get; set; }
        public int ProjectId { get; set; }
        public int WarehouseId { get; set; }
        public string ProjectName { get; set; }
        public string WarehouseName { get; set; }
        public string InventoryDesc { get; set; }
        public DateTime DateGrow { get; set; }
        public decimal? Weight { get; set; }
        public int NumberOfDay { get; set; }
        public Inventorys Inventorys { get; set; }
        public Project Project  { get; set; }
    }
}
