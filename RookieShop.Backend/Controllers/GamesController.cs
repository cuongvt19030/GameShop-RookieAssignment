using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Data;
using RookieShop.Backend.Helpers;
using RookieShop.Backend.Interfaces;
using RookieShop.Backend.Models;
using RookieShop.BackEnd.Extension;
using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.IO;
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
        private readonly IFileService _fileService;

        public GamesController(
            ApplicationDbContext context,
            IMapper mapper,
            IFileService fileService)
        {
            _context = context;
            _mapper = mapper;
            _fileService = fileService;
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
        public async Task<ActionResult<IEnumerable<GameDto>>> GetFeaturedGames(
            CancellationToken cancellationToken)
        {
            var games = await _context.Games.Include(x => x.Genre).Where(x => x.IsFeatured == true).ToArrayAsync();

            var gameDtos = _mapper.Map<IEnumerable<GameDto>>(games).ToList();

            return gameDtos;
        }

        // GET api/<GamesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GameDto>> GetGame(int id)
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
        public async Task<IActionResult> NewGame([FromForm] GameCreateRequest gameCreateRequest)
        {
            var game = _mapper.Map<Game>(gameCreateRequest);
            if (gameCreateRequest.CoverImage != null)
            {
                game.CoverImage = await _fileService.UploadCoverImage(gameCreateRequest.CoverImage);
            }
            if (gameCreateRequest.BackGroundImage != null)
            {
                game.BackGroundImage = await _fileService.UploadBackgroundImage(gameCreateRequest.BackGroundImage);
            }
            game.CreateDate = DateTime.Now;
            game.UpdateDate = DateTime.Now;
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", game.Id, game);

        }

        // PUT api/<GamesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGame( int id, [FromForm] GameCreateRequest gameCreateRequest)
        {
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            game.Name = gameCreateRequest.Name;
            game.Price = gameCreateRequest.Price;
            game.Description = gameCreateRequest.Description;
            game.IsFeatured = gameCreateRequest.IsFeatured;
            if (gameCreateRequest.CoverImage != null)
            {
                game.CoverImage = await _fileService.UploadCoverImage(gameCreateRequest.CoverImage);
            }
            if (gameCreateRequest.BackGroundImage != null)
            {
                game.BackGroundImage = await _fileService.UploadBackgroundImage(gameCreateRequest.BackGroundImage);
            }
            game.UpdateDate = DateTime.Now;
            _context.Entry(game).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();

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
