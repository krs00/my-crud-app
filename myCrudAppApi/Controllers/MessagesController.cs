using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using myCrudAppApi.Models;

namespace myCrudAppApi.Controllers
{
  [Route("[controller]")] 
  [ApiController]
  public class MessagesController : ControllerBase
  {
    private readonly myCrudAppApiContext _db;

    public MessagesController(myCrudAppApiContext db)
    {
      _db = db;
    }

    // GET /messages
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Message>>> Get()
    {
      return await _db.Messages.ToListAsync();
    }

    // GET: /messages/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Message>> GetMessage(int id)
    {
      Message message = await _db.Messages.FindAsync(id);

      if (message == null)
      {
        return NotFound();
      }

      return message;
    }
  }
}