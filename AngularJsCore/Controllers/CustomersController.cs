using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Authorization;
using System.Data.SqlClient;
using MEDIVETGROUP.Services;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class CustomersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ApplicationSettings _appSettings;
        private AcumaticaRestService _acumaticaRestService;

        public CustomersController(ApplicationDbContext context, IOptions<ApplicationSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        // GET: api/Customers
        [HttpGet]
        public IEnumerable<Customers> Getcustomers()
        {
            return _context.customers.OrderBy(x=>x.CustomerId).Take(300);
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomers([FromRoute] int id)
        {
            var customers = await _context.customers.FindAsync(id);
            return Ok(customers);
        }

        [HttpGet("Sync")]
        public async Task<IActionResult> GetCustomersync()
        {
            List<Customers> list = new List<Customers>();
            try
            {
                _acumaticaRestService = new AcumaticaRestService(_appSettings.AcumaticaBaseUrl, _appSettings.UserName, _appSettings.Password, _appSettings.Company, null);
                //Specify the parameter to obtain the details of a sales order
                string parameters = "$filter=Status eq 'Active'";

                //Retrieve a sales order by keys
                string stockItems = _acumaticaRestService.Get("Customer", parameters);
                JArray json = JArray.Parse(stockItems);

                foreach (JObject content in json.Children<JObject>())
                {
                    string valId = "";
                    string valName = "";
                    foreach (JProperty prop in content.Properties())
                    {                      
                        if (prop.Name == "CustomerID")
                        {
                            valId = JObject.Parse(prop.Value.ToString())["value"].Value<string>();
                        }
                        if(prop.Name == "CustomerName")
                        {
                            valName = JObject.Parse(prop.Value.ToString())["value"].Value<string>();
                        }
                        if(!String.IsNullOrEmpty(valId) && !String.IsNullOrEmpty(valName))
                        {
                            Customers customers = new Customers();
                            customers.CustomerCD = valId;
                            customers.CustomerName = valName;
                            list.Add(customers);
                            valId = "";
                            valName = "";
                        }
                        
                    }
                }
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
            finally
            {
                _acumaticaRestService.Dispose();
            }
            foreach (Customers customers in list)
            {
                var custvalue = _context.customers.Where(x => x.CustomerCD == customers.CustomerCD).FirstOrDefault();
                if(custvalue != null)
                {
                    custvalue.CustomerName = customers.CustomerName;
                    _context.Entry(custvalue).State = EntityState.Modified;
                    _context.Entry(custvalue).Property(x => x.CustomerName).IsModified = true;
                    await _context.SaveChangesAsync();
                }
                else
                {
                    _context.customers.Add(customers);
                    await _context.SaveChangesAsync();
                }
            }
            return Ok(list);
        }

        // GET: api/Customers/5
        [HttpGet("Name/{name}")]
        public async Task<IActionResult> GetCustomersByName(string name)
        {
            var customers = await _context.customers.Where(x=>x.CustomerName.ToLower().Contains(name.ToLower())).ToListAsync();
            return Ok(customers);
        }

        // GET: api/Customers/5
        [HttpGet("Last/{last}")]
        public async Task<IActionResult> GetCustomersByLast(int last)
        {
            var customers = await _context.customers.OrderBy(x => x.CustomerId)
                  .Skip(last)
                  .Take(300)
                  .ToListAsync();

            //var customers = await _context.customers.Where(x => x.CustomerId > last && x.CustomerId <= last + 100).ToListAsync();
            return Ok(customers);
        }

        // PUT: api/Customers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomers([FromRoute] int id, [FromBody] Customers customers)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customers.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (DbUpdateException ex)
            {
                var sqlException = ex.GetBaseException() as SqlException;
                if(sqlException != null)
                {
                    switch (sqlException.Number)
                    {
                        case 2601:
                            return Ok(new Customers() { ErrorCode = 2601 });
                        default:
                            throw;
                    }
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customers
        [HttpPost]
        public async Task<IActionResult> PostCustomers([FromBody] Customers customers)
        {
            try
            {
                _context.customers.Add(customers);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetCustomers", new { id = customers.CustomerId }, customers);
            }
            catch(DbUpdateException ex)
            {
                var sqlException = ex.GetBaseException() as SqlException;
                if(sqlException != null)
                {
                    switch (sqlException.Number)
                    {
                        case 2601:
                            return Ok(new Customers() { ErrorCode = 2601 });
                        default:
                            throw;
                    }
                }
                else
                {
                    throw;
                }
            }
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomers([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customers = await _context.customers.FindAsync(id);
            if (customers == null)
            {
                return NotFound();
            }

            _context.customers.Remove(customers);
            await _context.SaveChangesAsync();

            return Ok(customers);
        }

        private bool CustomersExists(int id)
        {
            return _context.customers.Any(e => e.CustomerId == id);
        }
    }
}