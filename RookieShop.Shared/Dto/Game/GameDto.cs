using System;
using System.Collections.Generic;
using System.Text;

namespace RookieShop.Shared.Dto.Game
{
    public class GameDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public string CoverImage { get; set; }
        public string BackGroundImage { get; set; }
        public int GenreID { get; set; }
        public string GenreName { get; set; }
        public bool IsFeatured { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
