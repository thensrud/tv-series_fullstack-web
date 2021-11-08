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
        private readonly TVSeriesService _seriesService;

        public SeriesController(TVSeriesService seriesService)
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
            return _seriesService.Create( newSeries );
        }
    }
}