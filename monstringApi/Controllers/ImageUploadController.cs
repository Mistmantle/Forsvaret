#nullable disable
using Microsoft.AspNetCore.Mvc;
namespace ClockApi.Controllers;

[ApiController]
[Route("[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment _hosting;

    public ImageUploadController(IWebHostEnvironment hosting)
    {
        _hosting = hosting;
    }

    [HttpPost]
    [Route("[action]")]

    public IActionResult PostImage(IFormFile file)
    {
        string webRootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

        try
        {
            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return StatusCode(200);
        }
        catch
        {
            return StatusCode(500);
        }
    }
}