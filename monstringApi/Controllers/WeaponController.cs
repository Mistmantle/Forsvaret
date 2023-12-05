#nullable disable
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using monstringApi.Models;

namespace monstringApi.Controllers;

[ApiController]
[Route("[controller]")]

public class weaponController : ControllerBase
{
    private readonly MonstringContext _context;

    public weaponController(MonstringContext context)
    {
        _context = context;
    }

    [HttpGet]

    public async Task <ActionResult<List<Weapon>>> Get()
    {
        List<Weapon> weapons = await _context.Weapons.ToListAsync();
        return weapons;
    }
    [HttpGet("{id}")]
    
    public async Task <ActionResult<Weapon>> Get(int id)
    {
        Weapon weapons = await _context.Weapons.FindAsync(id);
        try
        {
            return weapons;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]

    public async Task<IActionResult> Post(Weapon weapon)
    {
        _context.Weapons.Add(weapon);
        await _context.SaveChangesAsync();
        return StatusCode(200);
    }
    
    [HttpPut]

    public async Task<ActionResult<Weapon>> Put(Weapon editedWeapon)
    {
        _context.Entry(editedWeapon).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return editedWeapon;
    }

    [HttpDelete("{id}")]

    public async Task<IActionResult> Delete(int id)
    {
        Weapon weapon = await _context.Weapons.FindAsync(id);
        _context.Weapons.Remove(weapon);
        await _context.SaveChangesAsync();
        return NoContent();
    } 
}