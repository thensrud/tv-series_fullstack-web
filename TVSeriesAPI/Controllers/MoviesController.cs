using Microsoft.AspNetCore.Mvc;
using TVSeriesAPI.Models;
using TVSeriesAPI.Services;
using System.Collections.Generic;

namespace TVSeriesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly MoviesService _moviesService;

        public MoviesController(MoviesService moviesService)
        {
            _moviesService = moviesService;
        }

        [HttpGet]
        public IEnumerable<Movies> Get()
        {
            return _moviesService.Get();
        }

        [HttpPost]
        public Movies Post(Movies newMovies)
        {
            return _moviesService.Create(newMovies);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var movies = _moviesService.Get(id);

            if (movies == null)
            {
                return NotFound();
            }

            _moviesService.Remove(movies.Id);
            return NoContent();
        }
    }
}