using System.Collections.Generic;

namespace TVSeriesAPI.Interfaces
{
  public interface IActors
  {
    string Id { get; set; }
    string Name { get; set; }
    string Image { get; set; }
    string Age { get; set; }
    string Country { get; set; }
    List<string> InSeries { get; set; }
  }

}