﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularJsCore.Data;
using AngularJsCore.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace AngularJsCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReceiptsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReceiptsController(ApplicationDbContext context)
        {
            _context = context;           
        }

        // GET: api/Receipts
        [HttpGet]
        public IEnumerable<Receipt> Getreceipts()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var entryPoint = (from ep in _context.receipts
                              join e in _context.receiptLines on ep.ReceiptId equals e.ReceiptId
                              join t in _context.projectAccesses on e.ProjectId equals t.ProjectId
                              where t.UserId == userId           
                              select new Receipt()
                              {
                                  TranType = ep.TranType,
                                  ReceiptId = ep.ReceiptId,
                                  ReceiptNbr = ep.ReceiptNbr,
                                  ReceiptDate = ep.ReceiptDate,
                                  Description = ep.Description,
                                  TotalQty = ep.TotalQty,
                                  TotalCost = ep.TotalCost,
                                  Release = ep.Release
                              }).Take(300).Distinct().ToList();
            var result = entryPoint.OrderByDescending(x => x.ReceiptId);
            return result;
        }

        [HttpGet("ReceiptByDate/{from}/{to}")]
        public IEnumerable<Receipt> GetReceiptByDate(DateTime from,DateTime to)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var entryPoint = (from ep in _context.receipts
                          join e in _context.receiptLines on ep.ReceiptId equals e.ReceiptId
                          join t in _context.projectAccesses on e.ProjectId equals t.ProjectId
                          where t.UserId == userId
                          select new Receipt()
                          {
                              TranType = ep.TranType,
                              ReceiptId = ep.ReceiptId,
                              ReceiptNbr = ep.ReceiptNbr,
                              ReceiptDate = ep.ReceiptDate,
                              Description = ep.Description,
                              TotalQty = ep.TotalQty,
                              TotalCost = ep.TotalCost,
                              Release = ep.Release
                          }).Distinct().ToList();
            var result = entryPoint.Where(x => x.ReceiptDate.Date >= from.Date && x.ReceiptDate.Date <= to.Date).OrderByDescending(x => x.ReceiptId);
            //var result = _context.receipts.Where(x => x.ReceiptDate.Date >= from.Date && x.ReceiptDate.Date <= to.Date).ToList();
            return result;
        }

        [HttpGet("ReceiptByProjectdetail/{projectId}/{tran}/{warehouseId}/{inventoryId}/{categoryId}")]
        public System.Object GetReceiptByProjectdetail(int projectId, string tran,int warehouseId,int inventoryId,int categoryId)
        {
            var result = (from x in _context.receipts
                          join y in _context.receiptLines on x.ReceiptId equals y.ReceiptId 
                          join z in _context.Inventorys on y.InventoryId equals z.InventoryId
                          join t in _context.categories on z.CategoryId equals t.CategoryId
                          select new
                          {
                              x.ReceiptId,
                              x.TranType,
                              t.CategoryId,
                              x.ReceiptNbr,
                              x.ReceiptDate,
                              y.WarehouseId,
                              y.WarehouseName,
                              y.ProjectId,
                              y.ProjectName,
                              y.InventoryId,
                              y.InventoryDesr,
                              y.Reason,
                              y.Qty,
                              y.UnitCost,
                              y.ExtCost
                          }).Where(x => x.ProjectId == projectId).ToList();

            if (tran != "0")
            {
                result = result.Where(x => x.TranType == tran).ToList();
            }
            if(warehouseId != 0)
            {
                result = result.Where(x => x.WarehouseId == warehouseId).ToList();
            }
            if(categoryId != 0)
            {
                result = result.Where(x => x.CategoryId == categoryId).ToList();
            }
            if(inventoryId != 0)
            {
                result = result.Where(x => x.InventoryId == inventoryId).ToList();
            }

            return result;
        }

        // GET: api/Receipts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReceipt([FromRoute] int id)
        {
            var receipt = await _context.receipts.Where(x => x.ReceiptId == id).Select(x => new
            {
                x.TranType,
                x.ReceiptId,
                x.ReceiptNbr,
                x.ReceiptDate,
                x.Description,
                x.TotalQty,
                x.TotalCost,
                x.Release
            }).FirstOrDefaultAsync();
            var receiptLine = await _context.receiptLines.Where(x => x.ReceiptId == receipt.ReceiptId).Select(x => new
            {
                x.ReceiptId,
                x.ReceiptLineId,
                x.QtyInWeight,
                x.Qty,
                x.UnitCost,
                x.ExtCost,
                x.ProjectId,
                x.ProjectName,
                x.Reason,
                x.WarehouseId,
                x.WarehouseName,
                x.InventoryId,
                x.InventoryDesr
            }).ToListAsync();
            return Ok(new { receipt, receiptLine });
        }

        // PUT: api/Receipts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReceipt([FromRoute] int id, [FromBody] Receipt receipt)
        {
            _context.Entry(receipt).State = EntityState.Modified;
            //Handle InsiteStatus
            HandleInSiteStatus(receipt, receipt.ReceiptLines.ToList());
            foreach (var item in receipt.ReceiptLines)
            {
                if (item.ReceiptLineId == 0)
                {
                    _context.receiptLines.Add(item);
                }
                else
                {
                    _context.Entry(item).State = EntityState.Modified;
                }     
            }
            foreach (var item in receipt.DeletedReceiptLineIDs.Split(',').Where(x => x != ""))
            {
                ReceiptLine receiptLine = _context.receiptLines.Find(Convert.ToInt32(item));
                _context.receiptLines.Remove(receiptLine);

            }
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReceiptExists(id))
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

        // POST: api/Receipts
        [HttpPost]
        public async Task<IActionResult> PostReceipt([FromBody] Receipt receipt)
        {
            _context.receipts.Add(receipt);
            var receiptNbr = _context.receipts.Max(x => x.ReceiptNbr);
            receipt.ReceiptNbr = (Convert.ToInt32(receiptNbr) + 1).ToString("00000");
            receipt.CreateDate = DateTime.Now;
            //Handle InsiteStatus
            HandleInSiteStatus(receipt, receipt.ReceiptLines.ToList());
            foreach (var item in receipt.ReceiptLines)
            {
                item.ReceiptLineDate = receipt.ReceiptDate;
                item.CreateDate = DateTime.Now;
                _context.receiptLines.Add(item);
            }

           await _context.SaveChangesAsync();
            //Intial obj for return
            Receipt result = new Receipt();
            result.ReceiptId = receipt.ReceiptId;
            result.ReceiptNbr = receipt.ReceiptNbr;
            result.ReceiptDate = receipt.ReceiptDate;
            result.Description = receipt.Description;
            result.TranType = receipt.TranType;
            result.TotalQty = receipt.TotalQty;
            result.TotalCost = receipt.TotalCost;
            result.Release = receipt.Release;
            return Ok(result);
        }

        // DELETE: api/Receipts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReceipt([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var receipt = await _context.receipts.FindAsync(id);
            if (receipt == null)
            {
                return NotFound();
            }

            _context.receipts.Remove(receipt);
            await _context.SaveChangesAsync();

            return Ok(receipt);
        }

        private void HandleInSiteStatus(Receipt receipt, List<ReceiptLine> listitems)
        {
            var list = listitems.GroupBy(x => new
            {
                x.InventoryId,
                x.WarehouseId,
                x.ProjectId
            }).Select(x => new ReceiptLine()
            {
                ProjectId = x.Key.ProjectId,
                WarehouseId = x.Key.WarehouseId,
                InventoryId = x.Key.InventoryId,
                ReceiptLineId = x.FirstOrDefault().ReceiptLineId,
                ReceiptId = x.FirstOrDefault().ReceiptId,
                ProjectName = x.FirstOrDefault().ProjectName,
                WarehouseName = x.FirstOrDefault().WarehouseName,
                InventoryDesr = x.FirstOrDefault().InventoryDesr,
                ReceiptLineDate = x.FirstOrDefault().ReceiptLineDate,
                CreateDate = x.FirstOrDefault().CreateDate,
                Reason = x.FirstOrDefault().Reason,
                Qty = x.Sum(y => y.Qty),
                UnitCost = (x.Sum(y => y.UnitCost))/x.Count(),
                ExtCost = x.Sum(y => y.ExtCost)
            }).ToList();
            foreach (var item in list)
            {
                if (receipt.Release == 1)
                {
                    var inSite = _context.iNSiteStatuses.Where(x => x.InventoryId == item.InventoryId && x.ProjectId == item.ProjectId && x.WarehouseId == item.WarehouseId).FirstOrDefault();
                    if (inSite != null)
                    {
                        //update site
                        if (receipt.TranType == "Receipt")
                        {
                            inSite.LastCost = (inSite.LastCost == null) ? item.UnitCost : ((inSite.LastCost + item.UnitCost) / 2);
                            inSite.QtyOnHand = (inSite.QtyOnHand == null) ? item.Qty : (inSite.QtyOnHand + item.Qty);
                            inSite.QtyReceipt = (inSite.QtyReceipt == null) ? item.Qty : (inSite.QtyReceipt + item.Qty);
                            inSite.ReceiptCost = (inSite.ReceiptCost == null) ? item.ExtCost : (inSite.ReceiptCost + item.ExtCost);
                        }
                        else if (receipt.TranType == "Issue")
                        {
                            inSite.QtyOnHand = inSite.QtyOnHand - item.Qty;
                            inSite.QtyIssue = (inSite.QtyIssue == null) ? item.Qty : (inSite.QtyIssue + item.Qty);
                            inSite.IssueCost = (inSite.IssueCost == null) ? item.ExtCost : (inSite.IssueCost + item.ExtCost);
                        }
                        else if (receipt.TranType == "Adjust")
                        {
                            inSite.QtyOnHand = (inSite.QtyOnHand == null) ? item.Qty : (inSite.QtyOnHand + item.Qty);
                            inSite.QtyAdjust = (inSite.QtyAdjust == null) ? item.Qty : (inSite.QtyAdjust + item.Qty);
                            inSite.AdjustCost = (inSite.AdjustCost == null) ? item.ExtCost : (inSite.AdjustCost + item.ExtCost);
                        }
                        _context.Entry(inSite).State = EntityState.Modified;
                    }
                    else
                    {
                        //insert site
                        var inSiteStatus = new INSiteStatus();
                        inSiteStatus.ProjectId = item.ProjectId;
                        inSiteStatus.ProjectName = item.ProjectName;
                        inSiteStatus.WarehouseId = item.WarehouseId;
                        inSiteStatus.WarehouseName = item.WarehouseName;
                        inSiteStatus.InventoryId = item.InventoryId;
                        inSiteStatus.InventoryDesc = item.InventoryDesr;
                        inSiteStatus.QtyOnHand = item.Qty;
                        inSiteStatus.LastCost = item.UnitCost;
                        inSiteStatus.QtyBegin = item.Qty;
                        inSiteStatus.Reason = item.Reason;
                        if (receipt.TranType == "Receipt")
                        {
                            inSiteStatus.QtyReceipt = item.Qty;
                            inSiteStatus.ReceiptCost = item.ExtCost;
                        }
                        else if (receipt.TranType == "Issue")
                        {
                            inSiteStatus.QtyIssue = item.Qty;
                            inSiteStatus.IssueCost = item.ExtCost;
                        }
                        else if (receipt.TranType == "Adjust")
                        {
                            inSiteStatus.QtyAdjust = item.Qty;
                            inSiteStatus.AdjustCost = item.ExtCost;
                        }
                        _context.iNSiteStatuses.Add(inSiteStatus);
                    }
                }
            }
            
        }

        private bool ReceiptExists(int id)
        {
            return _context.receipts.Any(e => e.ReceiptId == id);
        }
    }
}