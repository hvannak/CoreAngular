using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Receipt
    {
        public string TranType { get; set; }
        public int ReceiptId { get; set; }
        public string ReceiptNbr { get; set; }
        public string Description { get; set; }
        public DateTime ReceiptDate { get; set; }
        public decimal TotalQty { get; set; }
        public decimal TotalCost { get; set; }
        //[Column(TypeName = "date")]
        public DateTime CreateDate { get; set; }
        public int Release { get; set; }
        [NotMapped]
        public string DeletedReceiptLineIDs { get; set; }
        public virtual ICollection<ReceiptLine> ReceiptLines { get; set; }
    }
}
