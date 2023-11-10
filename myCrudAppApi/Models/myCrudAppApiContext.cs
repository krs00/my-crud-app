using Microsoft.EntityFrameworkCore;

namespace myCrudAppApi.Models
{
  public class myCrudAppApiContext : DbContext
  {
    public DbSet<Message> Messages { get; set; }

    public myCrudAppApiContext(DbContextOptions<myCrudAppApiContext> options) : base(options)
    {
    }
  }
}