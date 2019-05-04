using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class WarehouseAccess
    {
        [Key]
        public int WarehouseAccessId { get; set; }
        public string UserId { get; set; }
        public int WarehouseId { get; set; }
        public Warehouse Warehouse { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
