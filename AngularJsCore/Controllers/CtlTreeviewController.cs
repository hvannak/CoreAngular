using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CtlTreeviewController : ControllerBase
    {
        private readonly IControllerDiscovery _controllerDiscovery;
        public CtlTreeviewController(IControllerDiscovery controllerDiscovery)
        {
            _controllerDiscovery = controllerDiscovery;
        }

        [HttpGet]
        //POST: api/CtlTreeview
        public System.Object GetCtlTreeview()
        {
            var result = _controllerDiscovery.GetControllerTree();

            return Ok(result);
            
        }
    }
}