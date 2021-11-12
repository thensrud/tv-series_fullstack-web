namespace TVSeriesAPI.Interfaces
{
    public interface IEpisode
    {
        string Name { get; set; }
        string SeasonNumber { get; set; }
        string EpisodeNumber { get; set; }
    }
}