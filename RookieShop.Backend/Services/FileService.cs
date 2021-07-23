using Microsoft.AspNetCore.Http;
using RookieShop.Backend.Helpers;
using RookieShop.Backend.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RookieShop.Backend.Services
{
    public class FileService : IFileService
    {
        public async Task<string> UploadBackgroundImage(IFormFile file)
        {
            string uniqueFileName = null;
            string uploadsFolder = Path.Combine(WebHostEnvironmentHelper.GetWebRootPath(), "images/backgrounds");
            uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return uniqueFileName;
        }

        public async Task<string> UploadCoverImage(IFormFile file)
        {
            string uniqueFileName = null;
            string uploadsFolder = Path.Combine(WebHostEnvironmentHelper.GetWebRootPath(), "images/covers");
            uniqueFileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            return uniqueFileName;
        }
    }
}
