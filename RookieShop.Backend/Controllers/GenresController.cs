using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Data;
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
    public class GenresController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GenresController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Categories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GenreDto>>> GetGenres()
        {
            var genres = await _context.Categories.Where(genre => genre.Games.Count > 0).ToListAsync();
            var genreDto = _mapper.Map<IEnumerable<GenreDto>>(genres).ToList();
            return genreDto;
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PagedResponseDto<GameDto>>> GetGamesByGenre(
            int id,
            [FromQuery] GameCriteriaDto gameCriteriaDto,
            CancellationToken cancellationToken)
        {
            var gameQuery = _context.Games.Include(x => x.Genre).Where(g => g.GenreID == id).AsQueryable();

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

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
