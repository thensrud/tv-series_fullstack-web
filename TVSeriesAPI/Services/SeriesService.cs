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
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _series = database.GetCollection<Series>( settings.SeriesCollectionName );
        }

        public List<Series> Get()
        {
            return _series.Find( series => true).ToList();
        }

        public Series Create(Series newSeries)
        {
            _series.InsertOne( newSeries );
            return newSeries;
        }

    }
}