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

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public System.Object GetOrders()
        {
            var result = _context.Orders.Select(x => new
            {
                x.OrderId,
                x.OrderNo,
                Customer= x.Customers.CustomerName,
                x.PMethod,
                x.GTotal
            }).ToList();
            return result;
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public IActionResult GetOrders([FromRoute] int id)
        {
            var orders = _context.Orders.Where(x => x.OrderId == id).Select(x=>new {
                            x.OrderId,
                            x.OrderNo,
                            x.CustomerId,
                            x.PMethod,
                            x.GTotal,
                            DeletedOrderItemIDs = ""
                        }).FirstOrDefault();
            var orderlines = _context.OrderLines.Where(x => x.OrderId == id).Select(x => new
                                    {
                                        x.OrderItemId,
                                        x.OrderId,
                                        x.InventoryId,
                                        ItemName = x.Inventorys.InventoryDesr,
                                        Price = x.Inventorys.Price,
                                        x.Quantity,
                                        Total = x.Quantity * x.Inventorys.Price
                                    }).ToList();
            return Ok(new { orders, orderlines });
        }

        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrders([FromRoute] int id, [FromBody] Orders orders)
        {

            _context.Entry(orders).State = EntityState.Modified;
            foreach (var item in orders.OrderLines)
            {
                if (item.OrderItemId == 0)
                    _context.OrderLines.Add(item);
                else
                    _context.Entry(item).State = EntityState.Modified;
            }
            foreach (var item in orders.DeletedOrderItemIDs.Split(',').Where(x => x != ""))
            {
                OrderLines orderLines = _context.OrderLines.Find(Convert.ToInt32(item));
                _context.OrderLines.Remove(orderLines);
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> PostOrders([FromBody] Orders orders)
        {
            try
            {
                _context.Orders.Add(orders);
                foreach (var item in orders.OrderLines)
                {
                    _context.OrderLines.Add(item);
                }
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrders([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orders = await _context.Orders.FindAsync(id);
            if (orders == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(orders);
            await _context.SaveChangesAsync();

            return Ok(orders);
        }

        private bool OrdersExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}