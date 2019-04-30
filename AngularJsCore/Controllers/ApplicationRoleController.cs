using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Data;
using AngularJsCore.Models;
using AngularJsCore.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ApplicationRoleController : ControllerBase
    {
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly ApplicationDbContext _context;
        private readonly IControllerDiscovery _controllerDiscovery;
        private List<ControllerInfo> _controllerInfos;
        public ApplicationRoleController(RoleManager<ApplicationRole> roleManager, ApplicationDbContext context, IControllerDiscovery controllerDiscovery)
        {
            _roleManager = roleManager;
            _context = context;
            _controllerDiscovery = controllerDiscovery;
            _controllerInfos = new List<ControllerInfo>(_controllerDiscovery.GetControllers());
        }
        // GET: api/ApplicationRole
        [HttpGet]
        public System.Object Get()
        {
            var result = _context.Roles.Select(x => new
            {
                x.Id,
                x.Name,
                x.Access
            }).ToList();
            return result;
        }

        // GET: api/ApplicationRole/5
        [HttpGet("{id}", Name = "GetRole")]
        public async Task<IActionResult> Get(string id)
        {
            var result = await _context.Roles.FindAsync(id);
            return Ok(result);
        }

        // POST: api/ApplicationRole
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RoleModel roleModel)
        {

            var role = new ApplicationRole { Name = roleModel.RoleName };
            if (roleModel.SelectedControllers != null && roleModel.SelectedControllers.Any())
            {
                foreach (var controller in roleModel.SelectedControllers)
                    foreach (var action in controller.Actions)
                        action.ControllerId = controller.Id;

                var accessJson = JsonConvert.SerializeObject(roleModel.SelectedControllers);
                role.Access = accessJson;
            }

            var result = await _roleManager.CreateAsync(role);
            return Ok(result);

        }

        // PUT: api/ApplicationRole/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] RoleModel roleModel)
        {

            var role = await _roleManager.FindByIdAsync(id);
            role.Name = roleModel.RoleName;
            if (roleModel.SelectedControllers != null && roleModel.SelectedControllers.Any())
            {
                foreach (var controller in roleModel.SelectedControllers)
                    foreach (var action in controller.Actions)
                        action.ControllerId = controller.Id;

                var accessJson = JsonConvert.SerializeObject(roleModel.SelectedControllers);
                role.Access = accessJson;
            }

            var result = await _roleManager.UpdateAsync(role);
            return Ok(result);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var role =  await _roleManager.FindByIdAsync(id);
            if (role == null)
            {
                return NotFound();
            }

            await _roleManager.DeleteAsync(role);
            return Ok(role);
        }
    }
}
