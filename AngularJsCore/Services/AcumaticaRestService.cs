using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace MEDIVETGROUP.Services
{
    public class AcumaticaRestService : IDisposable
    {
        private readonly HttpClient _httpClient;

        private readonly string _acumaticaBaseUrl;

        public AcumaticaRestService(
          string acumaticaBaseUrl, string userName, string password,
          string company, string branch)
        {
            _acumaticaBaseUrl = acumaticaBaseUrl;
            _httpClient = new HttpClient(
                new HttpClientHandler
                {
                    UseCookies = true,
                    CookieContainer = new CookieContainer()
                })
            {
                BaseAddress = new Uri(acumaticaBaseUrl +
                  "/entity/DefaultExt/17.200.001/"),
                DefaultRequestHeaders =
            {
                Accept = {MediaTypeWithQualityHeaderValue.Parse("text/json")}
            }
            };

            //Log in to Acumatica ERP
            _httpClient.PostAsJsonAsync(
              acumaticaBaseUrl + "/entity/auth/login", new
              {
                  name = userName,
                  password = password,
                  company = company,
                  branch = branch
              }).Result
                .EnsureSuccessStatusCode();
        }

        //Data submission
        public string Put(string entityName, string parameters, string entity)
        {
            var res = _httpClient
                .PutAsync(_acumaticaBaseUrl + "/entity/DefaultExt/17.200.001/" +
                    entityName + "?" + parameters,
                    new StringContent(entity, Encoding.UTF8, "application/json"))
                .Result
                .EnsureSuccessStatusCode();
            var check = res.IsSuccessStatusCode;
            return res.Content.ReadAsStringAsync().Result;
        }

        public void Dispose()
        {
            _httpClient.PostAsync(_acumaticaBaseUrl + "/entity/auth/logout",
            new ByteArrayContent(new byte[0])).Wait();
            _httpClient.Dispose();
        }
    }
}
