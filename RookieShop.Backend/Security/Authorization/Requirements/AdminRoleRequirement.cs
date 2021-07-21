using Microsoft.AspNetCore.Authorization;

namespace RookieShop.Backend.Security.Authorization.Requirements
{
    public class AdminRoleRequirement : IAuthorizationRequirement
    {
        public AdminRoleRequirement() {}
    }
}
