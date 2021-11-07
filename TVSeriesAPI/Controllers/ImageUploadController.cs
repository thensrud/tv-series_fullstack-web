using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace TVSeriesAPI.Controllers
{
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
        
        public ActionResult SaveImage(IFormFile file) // kan være bra å sjekke om det faktisk er et bilde
        {
            string webRootPath = _hosting.WebRootPath;
            // ikke anbefalt å bruke originale bildenavn, bør gjøre noe endring, se slideserie
            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

            try 
            {
                using(var fileStream = new FileStream(absolutePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                return StatusCode(201);
            }
            catch
            {
                return StatusCode(500);
            }
        }

    }
}