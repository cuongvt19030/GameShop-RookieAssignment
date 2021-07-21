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
using RookieShop.Shared.Constants;
using RookieShop.Shared.Dto.Game;
using RookieShop.Shared.Enum;

namespace Rookie.CustomerSite.Pages.Genres
{
    public class GamesModel : PageModel
    {
        private readonly IGenreService _genreService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public GamesModel(
            IGenreService genreService,
            IConfiguration config,
            IMapper mapper)
        {
            _genreService = genreService;
            _config = config;
            _mapper = mapper;
        }

        public PagedResponseVM<GameVm> Games { get; set; }

        public async Task OnGetAsync(
            int? id,
            string sortOrder,
            string currentFilter, string searchString, int? pageIndex)
        {
            var gameCriteriaDto = new GameCriteriaDto()
            {
                Search = searchString,
                SortOrder = SortOrderEnum.Accsending,
                Page = pageIndex ?? 1,
                Limit = int.Parse(_config[ConfigurationConstants.PAGING_LIMIT])
            };
            var pagedGamesList = await _genreService.GetGameByGenreAsync(id.Value , gameCriteriaDto);
            Games = _mapper.Map<PagedResponseVM<GameVm>>(pagedGamesList);
        }
    }
}

