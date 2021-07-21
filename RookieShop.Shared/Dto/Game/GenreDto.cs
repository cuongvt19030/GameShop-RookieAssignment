using System;
using System.Collections.Generic;
using System.Text;

namespace RookieShop.Shared.Dto.Game
{
    public class GenreDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<GameDto> Games { get; set; }
    }
}
