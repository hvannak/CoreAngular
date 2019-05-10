using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class ReceiptLine
    {
        public int ReceiptLineId { get; set; }
        public int ReceiptId { get; set; }
        public int ProjectId { get; set; }
        public decimal Qty { get; set; }
        public DateTime ReceiptLineDate { get; set; }
        public int UomId { get; set; }
        public decimal UnitCost { get; set; }
        public decimal ExtCost { get; set; }
        public int WarehouseId { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDate { get; set; }
        public Project Project { get; set; }
        public Receipt Receipt { get; set; }

    }
}
