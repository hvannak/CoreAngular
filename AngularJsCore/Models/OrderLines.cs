using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class OrderLines
    {
        [Key]
        public int OrderItemId { get; set; }
        public int OrderId { get; set; }
        public int InventoryId { get; set; }
        public int Quantity { get; set; }
        public virtual Inventorys Inventorys { get; set; }
        public virtual Orders Orders { get; set; }
    }
}
