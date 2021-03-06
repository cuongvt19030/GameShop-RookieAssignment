using AutoMapper;
using Rookie.CustomerSite.ViewModel;
using Rookie.CustomerSite.ViewModel.Game;
using RookieShop.Shared.Dto;
using RookieShop.Shared.Dto.Game;
using System.Collections.Generic;

namespace Rookie.CustomerSite.Mapping
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()  
        {  
            CreateMap<GameDto, GameVm>().ReverseMap();
            CreateMap<GenreDto, GenreVm>().ReverseMap();
            CreateMap<BaseQueryCriteriaDto, BaseQueryCriteriaVM>().ReverseMap();
            CreateMap<PagedResponseDto<GameDto>, PagedResponseVM<GameVm>>().ReverseMap();
            CreateMap<List<GameDto>, List<GameVm>>().ReverseMap();
        }  
    }
}
