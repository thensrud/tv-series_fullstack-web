using System.Collections.Generic;
using TVSeriesAPI.Models;

namespace TVSeriesAPI.Interfaces
{
  public interface IActor
  {
    string Id { get; set; }
    string Name { get; set; }
    string Image { get; set; }
    string Age { get; set; }
    string Country { get; set; }
    List<InSeries> InSeries { get; set; }
  }

}