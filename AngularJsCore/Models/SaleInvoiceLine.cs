using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class SaleInvoiceLine
    {
        [Key]
        public int SaleInvoiceLineId { get; set; }
        public int SaleInvoiceId { get; set; }
        public int WarehouseId { get; set; }
        public int InventoryId { get; set; }
        public string WarehouseName { get; set; }
        public string InventoryDesc { get; set; }
        public decimal Qty { get; set; }
        public decimal Weight { get; set; }
        public decimal Unitprice { get; set; }
        public decimal ExtAmount { get; set; }
        public Inventorys Inventorys { get; set; }
        public SaleInvoice SaleInvoice { get; set; }
    }
}
