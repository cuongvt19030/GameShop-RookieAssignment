using System;
using System.Collections.Generic;
using System.Text;

namespace Rookie.CustomerSite.ViewModel.Game
{
    public class GameVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }
        public string CoverImage { get; set; }
        public string BackGroundImage { get; set; }
        public int GenreID { get; set; }
        public string GenreName { get; set; }
    }
}
