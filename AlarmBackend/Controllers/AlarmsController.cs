using Microsoft.AspNetCore.Mvc;

namespace AlarmBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class AlarmsController() : ControllerBase
{

    public static List<Alarm> alarmDatabase = new List<Alarm>
    {
        new Alarm {  Description = "Wake up", Time = "07:00" },
        new Alarm { Description = "Go to bed", Time = "22:00" },
        new Alarm { Description = "Eat lunch", Time = "12:00" }
    };

    [HttpGet()]
    public IEnumerable<Alarm> GetAll()
    {
        return alarmDatabase;
    }

    [HttpGet("{id}")]
    public ActionResult<Alarm> GetOne(string id)
    {
        Alarm alarm = alarmDatabase.FirstOrDefault(alarm => alarm.Id == id);
        if (alarm == null)
        {
            return NotFound();
        }
        return alarm;
    }

    [HttpPost]
    public IActionResult AddAlarm(AlarmRequest alarm)
    {
        Alarm alarmInput = new Alarm { Description = alarm.Description, Time = alarm.Time };

        alarmDatabase.Add(alarmInput);
        return CreatedAtAction(nameof(GetOne), new { id = alarmInput.Id }, alarmInput);
    }
}
