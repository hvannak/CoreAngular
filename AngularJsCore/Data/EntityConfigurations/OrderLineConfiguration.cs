using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class OrderLineConfiguration : IEntityTypeConfiguration<OrderLines>
    {
        public void Configure(EntityTypeBuilder<OrderLines> builder)
        {
            builder.HasOne(x => x.Inventorys)
                .WithMany(x => x.OrderLines)
                .HasForeignKey(x => x.InventoryId);
            builder.HasOne(x => x.Orders)
                .WithMany(x => x.OrderLines)
                .HasForeignKey(x => x.OrderId)
                .OnDelete(DeleteBehavior.Cascade);
                
                
                
        }
    }
}
