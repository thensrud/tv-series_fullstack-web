using System.Collections.Generic;
using TVSeriesAPI.Models;

namespace TVSeriesAPI.Interfaces
{
    public interface IMovies
    {
        string Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        List<Genre> Genre { get; set; }
        string Plot { get; set; }
    }
}