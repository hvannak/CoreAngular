using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class INSiteStatus
    {
        [Key]
        public int InSiteId { get; set; }
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public int WarehouseId { get; set; }
        public string WarehouseName { get; set; }
        public int InventoryId { get; set; }
        public string InventoryDesc { get; set; }
        public decimal? QtyOnHand { get; set; }
        public decimal? QtyBegin { get; set; }
        public decimal? QtyIssue { get; set; }
        public decimal? QtyReceipt { get; set; }
        public decimal? QtyAdjust { get; set; }
        public decimal? QtySaleByUnit { get; set; }
        public decimal? QtySaleByKg { get; set; }
        public decimal? LastCost { get; set; }
        public decimal? IssueCost { get; set; }
        public decimal? ReceiptCost { get; set; }
        public decimal? AdjustCost { get; set; }
        public decimal? SaleAmount{ get; set; }
        public decimal? SaleAmountKhr { get; set; }
    }
}
