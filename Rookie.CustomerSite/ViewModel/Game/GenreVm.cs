using System;
using System.Collections.Generic;
using System.Text;

namespace Rookie.CustomerSite.ViewModel.Game
{
    public class GenreVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<GameVm> Games { get; set; }
    }
}
