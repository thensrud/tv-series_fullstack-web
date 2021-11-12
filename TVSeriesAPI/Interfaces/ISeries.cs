using System.Collections.Generic;
using TVSeriesAPI.Models;

namespace TVSeriesAPI.Interfaces
{
    public interface ISeries
    {
        string Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        List<Genre> Genres { get; set; }
        string Plot { get; set; }
        List<Episode> Episodes { get; set; }
    }
}