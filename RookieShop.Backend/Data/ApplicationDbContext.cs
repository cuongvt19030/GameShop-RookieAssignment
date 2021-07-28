using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RookieShop.Backend.Data.SeedData;
using RookieShop.Backend.Models;

namespace RookieShop.Backend.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public DbSet<Game> Games { get; set; }
        public DbSet<Genre> Genres { get; set; }
        //public DbSet<GameGenre> GameGenres { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<GameGenre>()
            //    .HasKey(gg => new { gg.GameId, gg.GenreId });
            //modelBuilder.Entity<GameGenre>()
            //    .HasOne(gg => gg.Game)
            //    .WithMany(g => g.GameGenres)
            //    .HasForeignKey(gi => gi.GameId);
            //modelBuilder.Entity<GameGenre>()
            //    .HasOne(gg => gg.Genre)
            //    .WithMany(g => g.GameGenres)
            //    .HasForeignKey(gi => gi.GameId);
            modelBuilder.SeedGenreData();
            modelBuilder.SeedGameData();
            //modelBuilder.SeedGameGenreData();
            base.OnModelCreating(modelBuilder);
        }
    }
}
