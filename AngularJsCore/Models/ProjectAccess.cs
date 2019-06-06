using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class ProjectAccess
    {
        [Key]
        public int ProjectAccessId { get; set; }
        public string UserId { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
