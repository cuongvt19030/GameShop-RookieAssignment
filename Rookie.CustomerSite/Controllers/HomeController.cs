using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Rookie.CustomerSite.Models;
using Rookie.CustomerSite.ViewModel;
using Rookie.CustomerSite.ViewModel.Game;
using RookieShop.Shared.Constants;
using RookieShop.Shared.Dto.Game;
using RookieShop.Shared.Enum;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Rookie.CustomerSite.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IGameService _gameService;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public HomeController(
            ILogger<HomeController> logger,
            IGameService gameService,
            IConfiguration configuration,
            IMapper mapper)
        {
            _logger = logger;
            _gameService = gameService;
            _config = configuration;
            _mapper = mapper;
        }


        public async Task<IActionResult> Index()
        {
            var games = await _gameService.GetFeaturedGameAsync();
            HomeVM home = new HomeVM
            {
                Games = games
            };
            return View(home);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
