using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class UnitOfMeasure
    {
        [Key]
        public int UomId { get; set; }
        public string UOM { get; set; }
        public virtual ICollection<Inventorys> Inventorys { get; set; }
    }
}
