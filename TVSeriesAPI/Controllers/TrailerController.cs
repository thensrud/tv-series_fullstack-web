using Microsoft.AspNetCore.Mvc;
using TVSeriesAPI.Models;
using TVSeriesAPI.Services;
using System.Collections.Generic;

namespace TVSeriesAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TrailerController : ControllerBase
    {
        private readonly TrailerService _trailerService;
        public TrailerController(TrailerService trailerService)
        {
            _trailerService = trailerService;
        }
        [HttpGet]
        public IEnumerable<Trailer> Get()
        {
            return _trailerService.Get();
        }
    }
}