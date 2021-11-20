using TVSeriesAPI.Models;
using TVSeriesAPI.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TVSeriesAPI.Services
{
    public class TrailerService
    {
        private readonly IMongoCollection<Trailer> _trailer;
        public TrailerService(ISeriesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _trailer = database.GetCollection<Trailer>(settings.TrailerCollectionName);
        }

        public List<Trailer> Get()
        {
            return _trailer.Find(trailers => true).ToList();
        }

        public Trailer Get(string id)
        {
            return _trailer.Find<Trailer>(trailer => trailer.Id == id).FirstOrDefault();
        }

    }
}