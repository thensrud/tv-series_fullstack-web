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
        public ActionResult SaveImage(IFormFile file) // kan være bra å sjekke om det faktisk er et bilde
        {
            string webRootPath = _hosting.WebRootPath;
            // ikke anbefalt å bruke originale bildenavn, bør gjøre noe endring
            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");
            //string untrustedFileName = Path.GetFileName(Path.Combine($"{webRootPath}/images/{file.FileName}"));

            try
            {
                using (var fileStream = new FileStream(absolutePath, FileMode.Create))
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

        // public async Task<IActionResult> OnPostUploadAsync(List<IFormFile> files)
        // {
        //     long size = files.Sum(f => f.Length);

        //     foreach (var formFile in files)
        //     {
        //         if (formFile.Length > 0)
        //         {
        //             var filePath = Path.GetTempFileName();

        //             using (var stream = System.IO.File.Create(filePath))
        //             {
        //                 await formFile.CopyToAsync(stream);
        //             }
        //         }
        //     }

        //     return Ok(new { count = files.Count, size });
        // }

    }
}