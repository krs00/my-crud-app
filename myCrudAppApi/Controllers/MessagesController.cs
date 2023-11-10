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



    // POST /messages
    [HttpPost]
    public async Task<ActionResult<Message>> Post(Message message)
    {
      _db.Messages.Add(message);
      await _db.SaveChangesAsync();
      return CreatedAtAction(nameof(GetMessage), new { id = message.MessageId }, message);
    }

    // PUT: /messages/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Message message)
    {
      if (id != message.MessageId)
      {
        return BadRequest();
      }

      _db.Messages.Update(message);

      try
      {
        await _db.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!MessageExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

     private bool MessageExists(int id)
    {
      return _db.Messages.Any(e => e.MessageId == id);
    }


  }
}


// .NET Automatically Converts C# into JSON 
// It's a Best Practice to Use Async Controller Actions
 
// Never include an Id property when making a POST request, 
// as that value should always be set by our database.

// PUT requires a body with the entire updated object (including the ObjectId)
