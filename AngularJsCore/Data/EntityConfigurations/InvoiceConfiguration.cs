using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class InvoiceConfiguration : IEntityTypeConfiguration<SaleInvoice>
    {
        public void Configure(EntityTypeBuilder<SaleInvoice> builder)
        {
            builder.HasOne(x => x.Customers)
                .WithMany(x => x.SaleInvoices)
                .HasForeignKey(x => x.CustomerId);
            builder.HasOne(x => x.Project)
               .WithMany(x => x.SaleInvoices)
               .HasForeignKey(x => x.ProjectId);
        }
    }
}
