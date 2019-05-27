using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Inventorys
    {
        [Key]
        public int InventoryId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string InventoryDesr { get; set; }
        [DataType("decimal(18,4)")]
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public int UomId { get; set; }
        public Category Category { get; set; }
        public UnitOfMeasure UnitOfMeasure { get; set; }
        public virtual ICollection<OrderLines> OrderLines { get; set; }
        public virtual ICollection<DailyAnimalGrow> DailyAnimalGrows { get; set; }
    }
}
