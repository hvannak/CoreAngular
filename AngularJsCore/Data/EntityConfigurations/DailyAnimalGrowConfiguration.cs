using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class DailyAnimalGrowConfiguration : IEntityTypeConfiguration<DailyAnimalGrow>
    {
        public void Configure(EntityTypeBuilder<DailyAnimalGrow> builder)
        {
            builder.HasOne(x => x.Inventorys)
                .WithMany(x => x.DailyAnimalGrows)
                .HasForeignKey(x => x.InventoryId);
            builder.HasOne(x => x.Project)
                .WithMany(x => x.DailyAnimalGrows)
                .HasForeignKey(x => x.ProjectId);
        }
    }
}
