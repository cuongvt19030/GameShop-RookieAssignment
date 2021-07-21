using RookieShop.Shared.Constants;
using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;


public class GenreService : IGenreService
{
    private readonly IHttpClientFactory _clientFactory;

    public GenreService(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }

    public async Task<ICollection<GenreDto>> GetGenreAsync()
    {
        var client = _clientFactory.CreateClient(ServiceConstants.BACK_END_NAMED_CLIENT);
        var response = await client.GetAsync(EndpointConstants.GET_GENRES);
        response.EnsureSuccessStatusCode();
        var result = await response.Content.ReadAsAsync<List<GenreDto>>();
        return result;
    }

    public async Task<PagedResponseDto<GameDto>> GetGameByGenreAsync(int id, GameCriteriaDto gameCriteriaDto)
    {
        var client = _clientFactory.CreateClient(ServiceConstants.BACK_END_NAMED_CLIENT);
        var response = await client.GetAsync($"{EndpointConstants.GET_GENRES}\\{id}");
        response.EnsureSuccessStatusCode();
        var pagedGame = await response.Content.ReadAsAsync<PagedResponseDto<GameDto>>();
        return pagedGame;
    }
}

