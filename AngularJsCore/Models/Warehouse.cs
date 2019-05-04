using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Warehouse
    {
        [Key]
        public int WarehouseId { get; set; }
        public string WarehouseName { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
        public virtual ICollection<WarehouseAccess> WarehouseAccesses { get; set; }
    }
}
