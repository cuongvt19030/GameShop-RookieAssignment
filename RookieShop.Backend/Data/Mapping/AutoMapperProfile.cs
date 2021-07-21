using AutoMapper;
using RookieShop.Backend.Models;
using RookieShop.Shared.Dto.Game;

namespace RookieShop.Backend.Data.Mapping
{
    public class AutoMapperProfile : Profile  
    {
        public AutoMapperProfile()  
        {  
            CreateMap<GameDto, Game>().ReverseMap();
            CreateMap<GenreDto, Genre>().ReverseMap();
            CreateMap<Game, GameDto>().ForMember(destination => destination.GenreName,
                options => options.MapFrom(source => source.Genre.Name)).ReverseMap();
            //CreateMap<GameGenreDto, GameGenre>().ReverseMap();
        }  
    }
}