using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class SaleInvoice
    {
        [Key]
        public int SaleInvoiceId { get; set; }
        public string InvoiceNbr { get; set; }
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public DateTime DocDate { get; set; }
        public string Currency { get; set; }
        public string Description { get; set; }
        public decimal TotalQty { get; set; }
        public decimal TotalWeight { get; set; }
        public decimal TotalAmount { get; set; }
        [NotMapped]
        public string DeletedInvoiceLineIDs { get; set; }
        public int Release { get; set; }
        public Customers Customers { get; set; }
        public Project Project { get; set; }
        public virtual ICollection<SaleInvoiceLine> SaleInvoiceLines { get; set; }
    }
}
