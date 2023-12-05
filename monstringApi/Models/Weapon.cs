using System.ComponentModel.DataAnnotations;

namespace monstringApi.Models;

public class Weapon
{
    [Key]

    public int Id { get; set ;}

    public string? WeaponType { get; set; }

    public string? Model { get; set; }

    public int RegistrationNumber { get; set; }

    public Boolean InService { get; set; }
}