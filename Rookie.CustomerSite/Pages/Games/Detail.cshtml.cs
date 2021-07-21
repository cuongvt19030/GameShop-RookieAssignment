using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Rookie.CustomerSite.ViewModel.Game;

namespace Rookie.CustomerSite.Pages.Games
{
    public class DetailModel : PageModel
    {
        private readonly IGameService _gameService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public DetailModel(
            IGameService gameService,
            IConfiguration config,
            IMapper mapper)
        {
            _gameService = gameService;
            _config = config;
            _mapper = mapper;
        }

        [BindProperty]
        public GameVm Game { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var gameDto = await _gameService.GetGameByIdAsync(id.Value);

            if (gameDto == null)
            {
                return NotFound();
            }
            Game = _mapper.Map<GameVm>(gameDto);
            return Page();
        }
    }
}
