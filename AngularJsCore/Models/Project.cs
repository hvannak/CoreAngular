using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        [Column(TypeName = "date")]
        public DateTime StartDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime EndDate { get; set; }
        public int WarehouseId { get; set; }
        public string WarehouseName { get; set; }
        public string Status { get; set; }
        public Warehouse Warehouse { get; set; }
        public virtual ICollection<SaleInvoice> SaleInvoices { get; set; }
        public virtual ICollection<ReceiptLine> ReceiptLines { get; set; }
        public virtual ICollection<DailyAnimalGrow> DailyAnimalGrows { get; set; }
        public virtual ICollection<ProjectAccess> ProjectAccesses { get; set; }
    }
}
