using AngularJsCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Data.EntityConfigurations
{
    public class ProjectAccessConfiguration : IEntityTypeConfiguration<ProjectAccess>
    {
        public void Configure(EntityTypeBuilder<ProjectAccess> builder)
        {
            builder.HasOne(x => x.Project)
            .WithMany(x => x.ProjectAccesses)
            .HasForeignKey(x => x.ProjectId);
            builder.HasOne(x => x.ApplicationUser)
                .WithMany(x => x.ProjectAccesses)
                .HasForeignKey(x => x.UserId);
        }
    }
}
