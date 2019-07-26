using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MEDIVETGROUP.Models
{
    public class ProjectPerformanceHeader
    {
        public decimal? BeginProject { get; set; }
        public decimal? NormalSale { get; set; }
        public decimal? NormalSaleWeight { get; set; }
        public decimal? DeadSale { get; set; }
        public decimal? DeadSaleWeight { get; set; }
        public decimal? DisablitySale { get; set; }
        public decimal? DisablitySaleWeight { get; set; }
        public decimal? DeadIssue { get; set; }
        public decimal? DeadIssueWeight { get; set; }
        public decimal? Feeds { get; set; }
        public decimal? Amount { get; set; }
        public decimal? FCR { get; set; }
    }
}
