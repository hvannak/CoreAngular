using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class ReceiptLineConfiguration : IEntityTypeConfiguration<ReceiptLine>
    {
        public void Configure(EntityTypeBuilder<ReceiptLine> builder)
        {
            builder.HasOne(x => x.Receipt)
                .WithMany(x => x.ReceiptLines)
                .HasForeignKey(x => x.ReceiptId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Project)
                .WithMany(x => x.ReceiptLines)
                .HasForeignKey(x => x.ProjectId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
