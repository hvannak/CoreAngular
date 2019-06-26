using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularJsCore.Models
{
    public class ApplicationSettings
    {
        public string JWT_Secret { get; set; }
        public string Client_URL { get; set; }
        public string AcumaticaBaseUrl { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Company { get; set; }
        public string Branch { get; set; }
    }
}
