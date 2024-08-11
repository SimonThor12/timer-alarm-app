using Microsoft.AspNetCore.Mvc;

namespace AlarmBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class AlarmsController : ControllerBase
{

    [HttpGet(Name = "GetAlarms")]
    public IEnumerable<Alarm> Get()
    {
        return new List<Alarm>
        {
            new Alarm { Id = 1, Description = "Wake up", Time = DateTime.Now.AddHours(1) },
            new Alarm { Id = 2, Description = "Go to work", Time = DateTime.Now.AddHours(2) },
            new Alarm { Id = 3, Description = "Go to sleep", Time = DateTime.Now.AddHours(3) }
        };

    }
}
