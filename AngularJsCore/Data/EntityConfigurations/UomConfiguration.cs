using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class UomConfiguration : IEntityTypeConfiguration<UnitOfMeasure>
    {
        public void Configure(EntityTypeBuilder<UnitOfMeasure> builder)
        {
            builder.HasMany(x => x.Inventorys)
                .WithOne(x => x.UnitOfMeasure)
                .HasForeignKey(x => x.UomId).OnDelete(DeleteBehavior.Restrict);
            builder.HasMany(x => x.Standards)
                .WithOne(x => x.UnitOfMeasure)
                .HasForeignKey(x => x.UomId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
