using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class StandardNameConfiguration : IEntityTypeConfiguration<StandardName>
    {
        public void Configure(EntityTypeBuilder<StandardName> builder)
        {
            builder.HasMany(x => x.Standards)
                .WithOne(x => x.StandardNames)
                .HasForeignKey(x => x.StandardNameId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
