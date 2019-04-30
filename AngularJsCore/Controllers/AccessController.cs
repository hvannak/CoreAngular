using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Data;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccessController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public AccessController(ApplicationDbContext dbContext,
            RoleManager<ApplicationRole> roleManager,
            UserManager<ApplicationUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _dbContext = dbContext;
        }
        // GET: api/Access
        [HttpGet]
        public System.Object Get()
        {
            var query = (
                from user in _dbContext.Users
                join ur in _dbContext.UserRoles on user.Id equals ur.UserId into UserRoles
                from userRole in UserRoles.DefaultIfEmpty()
                join rle in _dbContext.Roles on userRole.RoleId equals rle.Id into Roles
                from role in Roles.DefaultIfEmpty()
                select new { user, userRole, role }
            ).ToList();

            var userList = new List<UserRoleViewModel>();
            foreach (var grp in query.GroupBy(q => q.user.Id))
            {
                var first = grp.First();
                userList.Add(new UserRoleViewModel
                {
                    UserId = first.user.Id,
                    UserName = first.user.UserName,
                    Roles = first.role != null ? grp.Select(g => g.role).Select(r => r.Name) : new List<string>()
                });
            }

            return userList;
        }

        //GET: api/Access/5
        [HttpGet("{id}", Name = "GetAccess")]
        public System.Object Get(int id)
        {
            return "value";
        }

        // POST: api/Access
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Access/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] UserRoleViewModel value)
        {
            var user = await _dbContext.Users.FindAsync(id);
            if (user == null)
                return NotFound();

            var userRoles = await _userManager.GetRolesAsync(user);
            await _userManager.RemoveFromRolesAsync(user, userRoles);
            await _userManager.AddToRolesAsync(user, value.Roles);

            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            await _userManager.DeleteAsync(user);
            return Ok(user);
        }
    }
}
