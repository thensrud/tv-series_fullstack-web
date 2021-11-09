namespace TVSeriesAPI.Interfaces
{
    public interface ISeries
    {
        string Id { get; set; }
        string Name { get; set; }
        string Image { get; set; }
        string Genre { get; set; }
        string Plot { get; set; }
        ISeasons[] Seasons { get; set; }
    }

    public interface ISeasons
    {
        string SeasonNumber { get; set; }
        IEpisodes[] Episodes { get; set; }
    }

    public interface IEpisodes
    {
        string[] Episode { get; set; }
    }
}