using RookieShop.Shared.Enum;

namespace Rookie.CustomerSite.ViewModel
{
    public class BaseQueryCriteriaVM
    {
        public string Search { get; set; }
        public SortOrderEnum SortOrder { get; set; }
        public string SortColumn { get; set; }
        public int Limit { get; set; }
        public int Page { get; set; }
    }
}