using Microsoft.AspNetCore.Mvc;
using TVSeriesAPI.Models;
using TVSeriesAPI.Services;
using System.Collections.Generic;

namespace TVSeriesAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SeriesController : ControllerBase
    {
        private readonly SeriesService _seriesService;

        public SeriesController(SeriesService seriesService)
        {
            _seriesService = seriesService;
        }

        [HttpGet]
        public IEnumerable<Series> Get()
        {
            return _seriesService.Get();
        }

        [HttpPost]
        public Series Post(Series newSeries)
        {
            return _seriesService.Create(newSeries);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var series = _seriesService.Get(id);

            if (series == null)
            {
                return NotFound();
            }

            _seriesService.Remove(series.Id);
            return NoContent();
        }
    }
}