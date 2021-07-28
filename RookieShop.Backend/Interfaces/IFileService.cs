using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieShop.Backend.Interfaces
{
    public interface IFileService
    {
        Task<string> UploadCoverImage(IFormFile file);
        Task<string> UploadBackgroundImage(IFormFile file);
        Task DeleteFile(string fileName, string folder);
    }
}
