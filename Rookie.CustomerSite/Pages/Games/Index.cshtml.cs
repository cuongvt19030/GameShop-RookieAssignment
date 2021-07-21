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

namespace Rookie.CustomerSite.Pages.Games
{
    public class IndexModel : PageModel
    {
        private readonly IGameService _gameService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public IndexModel(
            IGameService gameService,
            IConfiguration config,
            IMapper mapper)
        {
            _gameService = gameService;
            _config = config;
            _mapper = mapper;
        }
        public PagedResponseVM<GameVm> Games { get; set; }

        public async Task OnGetAsync(/*string sortOrder,
            string currentFilter,*/ string searchString, int? pageIndex)
        {
            //string searchString = "";
            //if (Games != null)
            //{
            //    if (!String.IsNullOrEmpty(Games.Search))
            //    {
            //        searchString = Games.Search;
            //    }
            //}
            var gameCriteriaDto = new GameCriteriaDto()
            {
                Search = searchString,
                SortOrder = SortOrderEnum.Accsending,
                //SortColumn = sortOrder,
                Page = pageIndex ?? 1,
                Limit = int.Parse(_config[ConfigurationConstants.PAGING_LIMIT])
            };
            var pagedGames = await _gameService.GetGameAsync(gameCriteriaDto);
            Games = _mapper.Map<PagedResponseVM<GameVm>>(pagedGames);
        }
    }
}
