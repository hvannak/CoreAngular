using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Receipt
    {
        public int ReceiptId { get; set; }
        public int ReceiptNbr { get; set; }
        public string Description { get; set; }
        public DateTime ReceiptDate { get; set; }       
        public string CreateBy { get; set; }
        //[Column(TypeName = "date")]
        public DateTime CreateDate { get; set; }
        public virtual ICollection<ReceiptLine> ReceiptLines { get; set; }
    }
}
