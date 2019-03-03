using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) { }

        public DbSet<PersonalInfo> PersonalInfo { get; set; }
    }
}
