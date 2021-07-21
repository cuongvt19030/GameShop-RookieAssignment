using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieShop.Backend.Data.SeedData
{
    public static class GameDataInitializer
    {
        public static void SeedGameData(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().HasData(
                new Game
                {
                    Id = 1,
                    Name = "Grand Theft Auto V",
                    Price = 350.00F,
                    Description = "Something's here",
                    IsFeatured = true,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now,
                    CoverImage = "1.jpeg",
                    BackGroundImage = "1.jpeg",
                    GenreID = 2 
                },
                new Game
                {
                    Id = 2,
                    Name = "PlayerUnknown's Battlegrounds",
                    Price = 300.00F,
                    Description = "Something's here",
                    IsFeatured = true,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now,
                    CoverImage = "2.jpeg",
                    BackGroundImage = "2.jpeg",
                    GenreID = 5
                },
                new Game
                {
                    Id = 3,
                    Name = "Fall Guys: Ultimate Knockout",
                    Price = 120.00F,
                    Description = "Something's here",
                    IsFeatured = false,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now,
                    CoverImage = "3.jpeg",
                    BackGroundImage = "3.jpeg",
                    GenreID = 1
                },
                new Game
                {
                    Id = 4,
                    Name = "God of War 4",
                    Price = 460.00F,
                    Description = "Something's here",
                    IsFeatured = true,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now,
                    CoverImage = "4.jpeg",
                    BackGroundImage = "4.jpeg",
                    GenreID = 4
                }
             );
        }
    }
}

