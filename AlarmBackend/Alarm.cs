using System.ComponentModel.DataAnnotations;

namespace AlarmBackend;

public class Alarm
{
    [Key]
    public string Id { get; init; } = "Alarm_" + Guid.NewGuid().ToString().Replace("-", "");
    public required string Description { get; set; }
    public required string Time { get; set; }
}
