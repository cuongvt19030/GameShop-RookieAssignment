using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieShop.Backend.Data.SeedData
{
    public static class GenreDataIntializer
    {
        public static void SeedGenreData(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Genre>().HasData(
                new Genre
                {
                    Id = 1,
                    Name = "Multiplayer"
                },
                new Genre
                {
                    Id = 2,
                    Name = "Adventure"
                },
                new Genre
                {
                    Id = 3,
                    Name = "Shooting"
                },
                new Genre
                {
                    Id = 4,
                    Name = "Hack and Slash"
                },
                new Genre
                {
                    Id = 5,
                    Name = "Battle Royale"
                }
            );
        }
    }
}
