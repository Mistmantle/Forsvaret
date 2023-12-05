#nullable disable
using Microsoft.EntityFrameworkCore;

namespace monstringApi.Models;

public class MonstringContext : DbContext
{
    public MonstringContext(DbContextOptions<MonstringContext> options):base(options){}
    
    public DbSet<monstringApi.Models.Soldier> Soldiers { get; set; }
    
    public DbSet<monstringApi.Models.Vehicle> Vehicles { get; set; }

    public DbSet<monstringApi.Models.Weapon> Weapons { get; set; }
}