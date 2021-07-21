using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Rookie.CustomerSite.ViewModel;
using Rookie.CustomerSite.ViewModel.Game;

namespace Rookie.CustomerSite.Pages.Genres
{
    public class IndexModel : PageModel
    {
        private readonly IGenreService _genreService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public IndexModel(
            IGenreService genreService,
            IConfiguration config,
            IMapper mapper)
        {
            _genreService = genreService;
            _config = config;
            _mapper = mapper;
        }

        public List<GenreVm> Genres { get; set; }
        public PagedResponseVM<GameVm> Games { get; set; }
        public async Task<IActionResult> OnGetAsync()
        {
            var genreDto = await _genreService.GetGenreAsync();
            Genres = _mapper.Map<List<GenreVm>>(genreDto);
            return Page();
        }
    }
}
