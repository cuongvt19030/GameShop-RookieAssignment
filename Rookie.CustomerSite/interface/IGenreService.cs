using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public interface IGenreService
{
    Task<ICollection<GenreDto>> GetGenreAsync();
    Task<PagedResponseDto<GameDto>> GetGameByGenreAsync(int id, GameCriteriaDto gameCriteriaDto);
}

