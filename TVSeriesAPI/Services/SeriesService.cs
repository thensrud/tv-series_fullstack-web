using TVSeriesAPI.Models;
using TVSeriesAPI.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TVSeriesAPI.Services
{
    public class SeriesService
    {
        private readonly IMongoCollection<Series> _series;

        public SeriesService(ISeriesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _series = database.GetCollection<Series>(settings.SeriesCollectionName);
        }

        public List<Series> Get()
        {
            return _series.Find(series => true).ToList();
        }

        public Series Get(string id)
        {
            return _series.Find<Series>(series => series.Id == id).FirstOrDefault();
        }

        public Series Create(Series newSeries)
        {
            _series.InsertOne(newSeries);
            return newSeries;
        }

        public void Update(string id, Series seriesIn)
        {
            _series.ReplaceOne(series => series.Id == seriesIn.Id, seriesIn);
        }

        public void Remove(string id)
        {
            _series.DeleteOne(Series => Series.Id == id);
        }
    }
}