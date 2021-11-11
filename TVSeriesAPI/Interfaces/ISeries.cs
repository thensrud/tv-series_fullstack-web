using System.Collections.Generic;

namespace TVSeriesAPI.Interfaces
{
  public interface ISeries<TSeasons>
  {
    string Id { get; set; }
    string Name { get; set; }
    string Image { get; set; }
    string Genre { get; set; }
    string Plot { get; set; }
    List<TSeasons> Seasons { get; set; }
  }

  public interface TSeasons
  {
    string SeasonNumber { get; set; }
    List<string> Episodes { get; set; }
  }
}