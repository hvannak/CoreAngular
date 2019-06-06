using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class InvoiceLineConfiguration : IEntityTypeConfiguration<SaleInvoiceLine>
    {
        public void Configure(EntityTypeBuilder<SaleInvoiceLine> builder)
        {
            builder.HasOne(x => x.Inventorys)
                .WithMany(x => x.SaleInvoiceLines)
                .HasForeignKey(x => x.InventoryId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(x => x.SaleInvoice)
                .WithMany(x => x.SaleInvoiceLines)
                .HasForeignKey(x => x.SaleInvoiceId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
