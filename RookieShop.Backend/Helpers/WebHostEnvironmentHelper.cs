using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieShop.Backend.Helpers
{
    public static class WebHostEnvironmentHelper
    {
        public static string GetWebRootPath()
        {
            var accessor = new HttpContextAccessor();
            return accessor.HttpContext.RequestServices.GetRequiredService<IWebHostEnvironment>().WebRootPath;
        }
    }
}
