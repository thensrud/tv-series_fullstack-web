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
        private readonly ActorService _actorsService;

        public ActorsController(ActorService actorsService)
        {
            _actorsService = actorsService;
        }

        [HttpGet]
        public IEnumerable<Actor> Get()
        {
            return _actorsService.Get();
        }

        [HttpPost]
        public Actor Post(Actor newActor)
        {
            return _actorsService.Create(newActor);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var actor = _actorsService.Get(id);

            if (actor == null)
            {
                return NotFound();
            }
            _actorsService.Remove(actor.Id);
            return NoContent();
        }
    }
}