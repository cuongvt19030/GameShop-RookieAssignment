using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Data;
using RookieShop.Backend.Models;
using RookieShop.BackEnd.Extension;
using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RookieShop.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GamesController(
            ApplicationDbContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/<GamesController>
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<PagedResponseDto<GameDto>>> GetGames(
            [FromQuery] GameCriteriaDto gameCriteriaDto,
            CancellationToken cancellationToken)
        {
            var gameQuery = _context.Games.Include(x => x.Genre).AsQueryable();

            //var gameQuery = gameQuery.AsQueryable();

            gameQuery = GameFilter(gameQuery, gameCriteriaDto);

            var pagedGames = await gameQuery
                                .AsNoTracking()
                                .PaginateAsync(gameCriteriaDto, cancellationToken);

            var gameDtos = _mapper.Map<IEnumerable<GameDto>>(pagedGames.Items);

            return new PagedResponseDto<GameDto>
            {
                CurrentPage = pagedGames.CurrentPage,
                TotalPages = pagedGames.TotalPages,
                TotalItems = pagedGames.TotalItems,
                Search = gameCriteriaDto.Search,
                SortColumn = gameCriteriaDto.SortColumn,
                SortOrder = gameCriteriaDto.SortOrder,
                Limit = gameCriteriaDto.Limit,
                Items = gameDtos
            };
        }

        [HttpGet("featured")]
        [AllowAnonymous]
        public async Task<ActionResult<PagedResponseDto<GameDto>>> GetFeaturedGames(
            [FromQuery] GameCriteriaDto gameCriteriaDto,
            CancellationToken cancellationToken)
        {
            var gameQuery = _context.Games.Include(x => x.Genre).Where(x => x.IsFeatured == true).AsQueryable();

            //var gameQuery = gameQuery.AsQueryable();

            gameQuery = GameFilter(gameQuery, gameCriteriaDto);

            var pagedGames = await gameQuery
                                .AsNoTracking()
                                .PaginateAsync(gameCriteriaDto, cancellationToken);

            var gameDtos = _mapper.Map<IEnumerable<GameDto>>(pagedGames.Items);

            return new PagedResponseDto<GameDto>
            {
                CurrentPage = pagedGames.CurrentPage,
                TotalPages = pagedGames.TotalPages,
                TotalItems = pagedGames.TotalItems,
                Search = gameCriteriaDto.Search,
                SortColumn = gameCriteriaDto.SortColumn,
                SortOrder = gameCriteriaDto.SortOrder,
                Limit = gameCriteriaDto.Limit,
                Items = gameDtos
            };
        }

        // GET api/<GamesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameDto>> Get(int id)
        {
            var game = await _context.Games.Include(g => g.Genre).Where(g => g.Id == id).FirstOrDefaultAsync();

            if (game == null)
            {
                return NotFound();
            }
            var gameDto = _mapper.Map<GameDto>(game);
            return gameDto;
        }

        // POST api/<GamesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GamesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GamesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private IQueryable<Game> GameFilter(
            IQueryable<Game> gameQuery,
            GameCriteriaDto gameCriteriaDto)
        {

            if (!String.IsNullOrEmpty(gameCriteriaDto.Search))
            {
                gameQuery = gameQuery.Where(b =>
                    b.Name.Contains(gameCriteriaDto.Search));
            }

            return gameQuery;
        }

        //private IQueryable<Game> GetGameGenre(
        //    IQueryable<Game> gameQuery)
        //{
        //    var games = _context.Games.Include(x => x.GameGenres).ThenInclude(x => x.Genre);
            
        //    return null;
        //}
    }
}
