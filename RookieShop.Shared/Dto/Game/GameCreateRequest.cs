using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace RookieShop.Shared.Dto.Game
{
    public class GameCreateRequest
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public IFormFile CoverImage { get; set; }
        public IFormFile BackGroundImage { get; set; }
        public int GenreID { get; set; }
        public bool IsFeatured { get; set; }
    }
}
