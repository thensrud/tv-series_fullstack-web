using Microsoft.AspNetCore.Mvc;
using TVSeriesAPI.Models;
using TVSeriesAPI.Services;
using System.Collections.Generic;

namespace TVSeriesAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ActorsController : ControllerBase
    {
        private readonly ActorsService _actorsService;

        public ActorsController(ActorsService actorsService)
        {
            _actorsService = actorsService;
        }

        [HttpGet]
        public IEnumerable<Actors> Get()
        {
            return _actorsService.Get();
        }

        [HttpPost]
        public Actors Post(Actors newActor)
        {
            return _actorsService.Create( newActor );
        }
    }
}