using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularJsCore.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Authorization;
using MEDIVETGROUP.Services;
using System.Text;
using Microsoft.Extensions.Options;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SaleInvoiceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ApplicationSettings _appSettings;
        private AcumaticaRestService _acumaticaRestService;
        public SaleInvoiceController(ApplicationDbContext context, IOptions<ApplicationSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        // GET: api/SaleInvoice
        [HttpGet]
        public System.Object GetSaleInvoice()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = (from x in _context.saleInvoices
                              join t in _context.projectAccesses on x.ProjectId equals t.ProjectId
                              where t.UserId == userId
                              select new
                              {
                                  x.SaleInvoiceId,
                                  x.CustomerId,
                                  x.CustomerName,
                                  x.TranType,
                                  x.Description,
                                  x.DocDate,
                                  x.Currency,
                                  x.InvoiceNbr,
                                  x.ProjectId,
                                  x.ProjectName,
                                  x.Release,
                                  x.IsSyn,
                                  x.TotalQty,
                                  x.TotalWeight,
                                  x.TotalAmount
                              }).OrderByDescending(x => x.SaleInvoiceId).Take(300);
            return result;
        }

        // GET: api/SaleInvoice/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSaleInvoice([FromRoute] int id)
        {
            var invoice = await _context.saleInvoices.Where(x => x.SaleInvoiceId == id).Select(x => new
            {
                x.SaleInvoiceId,
                x.CustomerId,
                x.CustomerName,
                x.Description,
                x.TranType,
                x.DocDate,
                x.Currency,
                x.Types,
                x.InvoiceNbr,
                x.ProjectId,
                x.ProjectName,
                x.Release,
                x.IsSyn,
                x.TotalQty,
                x.TotalWeight,
                x.TotalAmount
            }).FirstOrDefaultAsync();
            var invoiceline = await _context.saleInvoiceLines.Where(x => x.SaleInvoiceId == invoice.SaleInvoiceId).Select(x => new
            {
                x.SaleInvoiceLineId,
                x.SaleInvoiceId,
                x.InventoryId,
                x.InventoryDesc,
                x.WarehouseId,
                x.WarehouseName,
                x.Weight,
                x.Unitprice,
                x.Qty,
                x.ExtAmount
            }).ToListAsync();
            return Ok(new { invoice, invoiceline });
        }

        [HttpGet("InvoiceByDate/{from}/{to}")]
        public IEnumerable<SaleInvoice> GetSaleInvoiceByDate(DateTime from, DateTime to)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var result = (from x in _context.saleInvoices
                           join t in _context.projectAccesses on x.ProjectId equals t.ProjectId
                           where t.UserId == userId
                           select new SaleInvoice
                           {
                              SaleInvoiceId = x.SaleInvoiceId,
                              CustomerId = x.CustomerId,
                               CustomerName = x.CustomerName,
                               Description = x.Description,
                               TranType = x.TranType,
                               DocDate = x.DocDate,
                               Currency = x.Currency,
                               InvoiceNbr = x.InvoiceNbr,
                               ProjectId = x.ProjectId,
                               ProjectName = x.ProjectName,
                               Release = x.Release,
                               IsSyn = x.IsSyn,
                               TotalQty = x.TotalQty,
                               TotalWeight = x.TotalWeight,
                               TotalAmount = x.TotalAmount
                           }).Where(x => x.DocDate.Date >= from.Date && x.DocDate.Date <= to.Date).OrderByDescending(x => x.SaleInvoiceId).ToList();

            //var result = _context.saleInvoices.Where(x => x.DocDate.Date >= from.Date && x.DocDate.Date <= to.Date).ToList();
            return result;
        }

        // PUT: api/SaleInvoice/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSaleInvoice([FromRoute] int id, [FromBody] SaleInvoice saleInvoice)
        {
            _context.Entry(saleInvoice).State = EntityState.Modified;
            foreach (var item in saleInvoice.SaleInvoiceLines)
            {
                if (item.SaleInvoiceLineId == 0)
                {
                    _context.saleInvoiceLines.Add(item);
                }
                else
                {
                    _context.Entry(item).State = EntityState.Modified;
                }
                //Handle InsiteStatus
                HandleInSiteStatus(saleInvoice, item);
            }
            foreach (var item in saleInvoice.DeletedInvoiceLineIDs.Split(',').Where(x => x != ""))
            {
                SaleInvoiceLine saleInvoiceLine = _context.saleInvoiceLines.Find(Convert.ToInt32(item));
                _context.saleInvoiceLines.Remove(saleInvoiceLine);
            }
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceExists(id))
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

        // POST: api/SaleInvoice
        [HttpPost]
        public async Task<IActionResult> PostSaleInvoice([FromBody] SaleInvoice saleInvoice)
        {
            _context.saleInvoices.Add(saleInvoice);
            var invoiceNbr = _context.saleInvoices.Max(x => x.InvoiceNbr);
            saleInvoice.InvoiceNbr = (Convert.ToInt32(invoiceNbr) + 1).ToString("00000");
            foreach (var item in saleInvoice.SaleInvoiceLines)
            {
                _context.saleInvoiceLines.Add(item);
                //Handle InsiteStatus
                HandleInSiteStatus(saleInvoice, item);
            }

            await _context.SaveChangesAsync();

            SaleInvoice sale = new SaleInvoice();
            sale.SaleInvoiceId = saleInvoice.SaleInvoiceId;
            sale.InvoiceNbr = saleInvoice.InvoiceNbr;
            sale.ProjectId = saleInvoice.ProjectId;
            sale.ProjectName = saleInvoice.ProjectName;
            sale.TotalQty = saleInvoice.TotalQty;
            sale.TotalAmount = saleInvoice.TotalAmount;
            sale.TotalWeight = saleInvoice.TotalWeight;
            sale.TranType = saleInvoice.TranType;
            sale.Types = saleInvoice.Types;
            sale.Release = saleInvoice.Release;
            return Ok(sale);
        }

        // DELETE: api/SaleInvoice/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSaleInvoice([FromRoute] int id)
        {
            var invoice = await _context.saleInvoices.FindAsync(id);
            _context.saleInvoices.Remove(invoice);
            await _context.SaveChangesAsync();

            return Ok(invoice);
        }

        [HttpPut]
        [Route("Sync/{branch}")]
        //POST: api/SaleInvoice/Sync
        public async Task<Object> SyncInvoices(string branch , SaleInvoice saleInvoice)
        {
            try
            {
                var customer = _context.customers.Find(saleInvoice.CustomerId);
                _acumaticaRestService = new AcumaticaRestService(_appSettings.AcumaticaBaseUrl, _appSettings.UserName, _appSettings.Password, _appSettings.Company, branch);
                StringBuilder stringBuilder = new StringBuilder();
                stringBuilder.Append("{");
                stringBuilder.Append("\"Customer\"").Append(":").Append("{value :").Append("\"").Append(customer.CustomerCD).Append("\"").Append("},");
                stringBuilder.Append("\"Description\"").Append(":").Append("{value :").Append("\"").Append(saleInvoice.InvoiceNbr).Append("-Qty")
                    .Append(saleInvoice.TotalQty).Append("-Weight").Append(saleInvoice.TotalWeight).Append("\"").Append("},");
                stringBuilder.Append("\"Amount\"").Append(":").Append("{value :").Append(saleInvoice.TotalAmount).Append("},");
                stringBuilder.Append("\"Hold\"").Append(":").Append("{value :").Append("\"false\"").Append("},");
                //stringBuilder.Append("\"Currency\"").Append(":").Append("{value :").Append("\"").Append(saleInvoice.Currency).Append("\"").Append("},");
                stringBuilder.Append("\"Details\":[{");
                stringBuilder.Append("\"TransactionDescription\"").Append(":").Append("{value :").Append("\"").Append(saleInvoice.InvoiceNbr).Append("-Qty")
                    .Append(saleInvoice.TotalQty).Append("-Weight").Append(saleInvoice.TotalWeight).Append("\"").Append("},");
                stringBuilder.Append("\"ExtendedPrice\"").Append(":").Append("{value :").Append(saleInvoice.TotalAmount).Append("}");
                stringBuilder.Append("}]");
                stringBuilder.Append("}");
                string entitySource = stringBuilder.ToString();
                string invoice = _acumaticaRestService.Put("Invoice", null, entitySource);
                saleInvoice.IsSyn = 1;
                _context.Entry(saleInvoice).Property("IsSyn").IsModified = true;
                await _context.SaveChangesAsync();
                return Ok(invoice);
            }
            catch(Exception ex)
            {
                //financial period is inactive or customerId not exist
                return Ok("500");
            }
            finally
            {
                _acumaticaRestService.Dispose();
            }

        }

        private void HandleInSiteStatus(SaleInvoice saleInvoice, SaleInvoiceLine item)
        {
            if (saleInvoice.Release == 1)
            {
                var inSite = _context.iNSiteStatuses.Where(x => x.InventoryId == item.InventoryId && x.ProjectId == saleInvoice.ProjectId && x.WarehouseId == item.WarehouseId).FirstOrDefault();
                if(inSite != null)
                {
                    if(saleInvoice.TranType == "IV")
                    {
                        inSite.QtyOnHand = inSite.QtyOnHand - item.Qty;
                        inSite.QtySaleByUnit = (inSite.QtySaleByUnit == null) ? item.Qty : (inSite.QtySaleByUnit + item.Qty);
                        inSite.QtySaleByKg = (inSite.QtySaleByKg == null) ? item.Weight : (inSite.QtySaleByKg + item.Weight);
                        if (saleInvoice.Currency == "USD")
                        {
                            inSite.SaleAmount = (inSite.SaleAmount == null) ? item.ExtAmount : (inSite.SaleAmount + item.ExtAmount);
                        }
                        else if (saleInvoice.Currency == "KHR")
                        {
                            inSite.SaleAmountKhr = (inSite.SaleAmountKhr == null) ? item.ExtAmount : (inSite.SaleAmountKhr + item.ExtAmount);
                        }
                    }
                    else if(saleInvoice.TranType == "CM")
                    {
                        inSite.QtyOnHand = inSite.QtyOnHand + item.Qty;
                        inSite.QtySaleByUnit = (inSite.QtySaleByUnit == null) ? item.Qty : (inSite.QtySaleByUnit - item.Qty);
                        inSite.QtySaleByKg = (inSite.QtySaleByKg == null) ? item.Weight : (inSite.QtySaleByKg - item.Weight);
                        if (saleInvoice.Currency == "USD")
                        {
                            inSite.SaleAmount = (inSite.SaleAmount == null) ? item.ExtAmount : (inSite.SaleAmount - item.ExtAmount);
                        }
                        else if (saleInvoice.Currency == "KHR")
                        {
                            inSite.SaleAmountKhr = (inSite.SaleAmountKhr == null) ? item.ExtAmount : (inSite.SaleAmountKhr - item.ExtAmount);
                        }
                    }

                }
            }
        }

        private bool InvoiceExists(int id)
        {
            return _context.saleInvoices.Any(e => e.SaleInvoiceId == id);
        }

    }
}