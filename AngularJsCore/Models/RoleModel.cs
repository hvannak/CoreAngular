using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class RoleModel
    {
        public string Id { get; set; }

        public string RoleName { get; set; }


        public IEnumerable<ControllerInfo> SelectedControllers { get; set; }
    }
}
