using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class CtlDiscoveryController : ControllerBase
    {
        private readonly IControllerDiscovery _controllerDiscovery;
        public CtlDiscoveryController(IControllerDiscovery controllerDiscovery)
        {
            _controllerDiscovery = controllerDiscovery;
        }

        [HttpGet]
        //POST: api/CtlDiscovery
        public System.Object GetCtlvalue()
        {
            var result = _controllerDiscovery.GetControllers();
            return result;
        }


    }
}