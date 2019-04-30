using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class ControllerTree
    {
        public string name { get; set; }
        public IEnumerable<ActionTree> children { get; set; }
    }
}
