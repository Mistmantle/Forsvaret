using System.ComponentModel.DataAnnotations;

namespace monstringApi.Models;

public class Soldier
{
    [Key]

    public int Id { get; set ;}
    
    public string? Image { get; set; }

    public string? Position { get; set; }

    public string? Name { get; set; }

    public int Age { get; set; }

    public Boolean InService { get; set; }
}
