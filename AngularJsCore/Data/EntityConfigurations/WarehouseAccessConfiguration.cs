using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class WarehouseAccessConfiguration : IEntityTypeConfiguration<WarehouseAccess>
    {
        public void Configure(EntityTypeBuilder<WarehouseAccess> builder)
        {
            builder.HasOne(x => x.Warehouse)
                .WithMany(x => x.WarehouseAccesses)
                .HasForeignKey(x => x.WarehouseId);
            builder.HasOne(x => x.ApplicationUser)
                .WithMany(x => x.WarehouseAccesses)
                .HasForeignKey(x => x.UserId);
        }
    }
}
