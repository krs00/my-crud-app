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

// What is a DBcontext file for?

// In Entity Framework Core, a DbContext is a crucial part of the framework, 
// and the DbContext file serves as the central connection point between your .NET application and the database. 
// The DbContext represents a session with the database and allows you to query and save data.