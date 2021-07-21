using RookieShop.Shared.Constants;
using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


public class GameService : IGameService
{
    private readonly IHttpClientFactory _clientFactory;

    public GameService(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }

    public async Task<PagedResponseDto<GameDto>> GetGameAsync(GameCriteriaDto gameCriteriaDto)
    {
        var client = _clientFactory.CreateClient(ServiceConstants.BACK_END_NAMED_CLIENT);
        var response = await client.GetAsync(EndpointConstants.GET_GAMES);
        response.EnsureSuccessStatusCode();
        var pagedGame = await response.Content.ReadAsAsync<PagedResponseDto<GameDto>>();
        return pagedGame;
    }

    public async Task<PagedResponseDto<GameDto>> GetFeaturedGameAsync(GameCriteriaDto gameCriteriaDto)
    {
        var client = _clientFactory.CreateClient(ServiceConstants.BACK_END_NAMED_CLIENT);
        var response = await client.GetAsync(EndpointConstants.GET_FEATURED_GAMES);
        response.EnsureSuccessStatusCode();
        var pagedGame = await response.Content.ReadAsAsync<PagedResponseDto<GameDto>>();
        return pagedGame;
    }

    public async Task<GameDto> GetGameByIdAsync(int id)
    {
        var client = _clientFactory.CreateClient(ServiceConstants.BACK_END_NAMED_CLIENT);
        var response = await client.GetAsync($"{EndpointConstants.GET_GAMES}\\{id}");
        response.EnsureSuccessStatusCode();
        var Game = await response.Content.ReadAsAsync<GameDto>();
        return Game;
    }

    public Task<bool> UpdateGame(GameDto game)
    {
        throw new NotImplementedException();
    }
}

