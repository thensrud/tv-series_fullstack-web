using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models
{
    public class Episode : IEpisode
    {
      public string Name { get; set; }
      public string SeasonNumber { get; set; }
      public string EpisodeNumber { get; set; }
    }
}