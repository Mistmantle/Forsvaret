#nullable disable
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using monstringApi.Models;

namespace monstringApi.Controllers;

[ApiController]
[Route("[controller]")]

public class VehicleController : ControllerBase
{
    private readonly MonstringContext _context;

    public VehicleController(MonstringContext context)
    {
        _context = context;
    }

    [HttpGet]

    public async Task <ActionResult<List<Vehicle>>> Get()
    {
        List<Vehicle> vehicles = await _context.Vehicles.ToListAsync();
        return vehicles;
    }

    [HttpPost]

    public async Task<IActionResult> Post(Vehicle vehicle)
    {
        _context.Vehicles.Add(vehicle);
        await _context.SaveChangesAsync();
        return StatusCode(200);
    }

    [HttpPut]

    public async Task<ActionResult<Vehicle>> Put(Vehicle editedVehicle)
    {
        _context.Entry(editedVehicle).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return editedVehicle;
    }

    [HttpGet("{id}")]
    
    public async Task <ActionResult<Vehicle>> Get(int id)
    {
        Vehicle vehicles = await _context.Vehicles.FindAsync(id);
        try
        {
            return vehicles;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]

    public async Task<IActionResult> Delete(int id)
    {
        Vehicle vehicle = await _context.Vehicles.FindAsync(id);
        _context.Vehicles.Remove(vehicle);
        await _context.SaveChangesAsync();
        return NoContent();
    } 
}