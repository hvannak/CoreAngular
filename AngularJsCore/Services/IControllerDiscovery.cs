using AngularJsCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AngularJsCore.Services
{
    public interface IControllerDiscovery
    {
        IEnumerable<ControllerInfo> GetControllers();
        string GetControllerTree();
    }
}
