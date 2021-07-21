using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public interface IGameService
{
    Task<PagedResponseDto<GameDto>> GetGameAsync(GameCriteriaDto gameCriteriaDto);
    Task<PagedResponseDto<GameDto>> GetFeaturedGameAsync(GameCriteriaDto gameCriteriaDto);
    Task<GameDto> GetGameByIdAsync(int id);
    Task<bool> UpdateGame(GameDto game);
}

