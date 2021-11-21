using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

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
        public ActionResult SaveImage(IFormFile file) 
        {
            string webRootPath = _hosting.WebRootPath;
            // Manipulates the image ID and adds the filetype to the end
            string imageFilename = $"{System.Guid.NewGuid()}.{file.ContentType.Substring(file.ContentType.LastIndexOf("/") + 1)}";
            string absolutePath = Path.Combine($"{webRootPath}/images/{imageFilename}");
            
            try
            {
                 // Returns nothing if uploaded file isn't an image
                if( !FormFileExtensions.IsImage(file) ) {
                    return BadRequest();
            }
                using (var fileStream = new FileStream(absolutePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                return Content(imageFilename); 
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}