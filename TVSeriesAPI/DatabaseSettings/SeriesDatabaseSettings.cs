namespace TVSeriesAPI.DatabaseSettings
{
    public class SeriesDatabaseSettings : ISeriesDatabaseSettings
    {
        public string SeriesCollectionName { get; set; }
        public string ActorsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    public interface ISeriesDatabaseSettings
    {
        string SeriesCollectionName { get; set; }
        string ActorsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}