﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class Customers
    {
        [Key]
        public int CustomerId { get; set; }
        public string CustomerCD { get; set; }
        [NotMapped]
        public int ErrorCode { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CustomerName { get; set; }
        public virtual ICollection<SaleInvoice> SaleInvoices { get; set; }
        public virtual ICollection<Orders> Orders { get; set; }
    }
}
