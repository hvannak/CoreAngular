using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Orders
    {
        [Key]
        public int OrderId { get; set; }
        [Required]
        [Column(TypeName = "nchar(10)")]
        public string OrderNo { get; set; }
        public int CustomerId { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        [Display(Name = "Payment Method")]
        public string PMethod { get; set; }
        [Display(Name ="GrandTotal")]
        [DataType("decimal(18,4)")]
        public decimal GTotal { get; set; }
        [NotMapped]
        public string DeletedOrderItemIDs { get; set; }
        public virtual Customers Customers { get; set; }
        public virtual ICollection<OrderLines> OrderLines { get; set; }
    }
}
