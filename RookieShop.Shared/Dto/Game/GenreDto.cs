using System;
using System.Collections.Generic;
using System.Text;

namespace RookieShop.Shared.Dto.Game
{
    public class GenreDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
