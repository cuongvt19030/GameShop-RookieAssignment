using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
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
    [EnableCors("AllowOrigin")]
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
        public async Task<ActionResult<IEnumerable<GenreDto>>> GetGenresList()
        {
            var genres = await _context.Genres.Where(genre => genre.Games.Count > 0 && genre.isDeleted == false).ToListAsync();
            var genreDto = _mapper.Map<IEnumerable<GenreDto>>(genres).ToList();
            return genreDto;
        }

        [HttpGet("all")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<GenreDto>>> GetAllGenresList()
        {
            var genres = await _context.Genres.Where(genre => genre.isDeleted == false).ToListAsync();
            var genreDto = _mapper.Map<IEnumerable<GenreDto>>(genres).ToList();
            return genreDto;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GenreDto>> GetGenre(int id)
        {
            var genre = await _context.Genres.FindAsync(id);
            if (genre == null || genre.isDeleted == false)
            {
                return NotFound();
            }
            var genreDto = _mapper.Map<GenreDto>(genre);
            return genreDto;
        }

        // GET api/<ValuesController>/5


        [HttpGet("games/{id}")]
        public async Task<ActionResult<PagedResponseDto<GameDto>>> GetGamesByGenre(
            int id,
            [FromQuery] GameCriteriaDto gameCriteriaDto,
            CancellationToken cancellationToken)
        {
            var gameQuery = _context.Games.Include(x => x.Genre).Where(g => g.GenreID == id && g.IsDeleted == false).AsQueryable();

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
        public async Task<ActionResult> NewGenre([FromForm] GenreCreateRequest genreCreateRequest)
        {
            var genre = new Genre
            {
                Name = genreCreateRequest.Name,
                CreateDate = DateTime.Now,
                UpdateDate = DateTime.Now
            };
            _context.Genres.Add(genre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGenre", new { id = genre.Id },
                new GenreDto
                {
                    Id = genre.Id,
                    Name = genre.Name,
                    CreateDate = genre.CreateDate,
                    UpdateDate = genre.UpdateDate
                });
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGenre([FromRoute] int id, [FromForm] GenreCreateRequest genreCreateRequest)
        {
            var genre = await _context.Genres.FindAsync(id);
            if (genre == null || genre.isDeleted == true)
            {
                return NotFound();
            }
            genre.Name = genreCreateRequest.Name;
            genre.UpdateDate = DateTime.Now;
            _context.Entry(genre).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGenre(int id)
        {
            var genre = await _context.Genres.FindAsync(id);
            if (genre == null || genre.isDeleted == true)
            {
                return NotFound();
            }
            genre.isDeleted = true;
            _context.Entry(genre).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
