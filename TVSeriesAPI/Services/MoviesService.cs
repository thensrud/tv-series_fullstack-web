using TVSeriesAPI.Models;
using TVSeriesAPI.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TVSeriesAPI.Services
{
    public class MoviesService
    {
        private readonly IMongoCollection<Movies> _movies;
        public MoviesService(ISeriesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _movies = database.GetCollection<Movies>(settings.MoviesCollectionName);
        }

        public List<Movies> Get()
        {
            return _movies.Find(movies => true).ToList();
        }

        public Movies Get(string id)
        {
            return _movies.Find<Movies>(movies => movies.Id == id).FirstOrDefault();
        }

        public Movies Create(Movies newMovies)
        {
            _movies.InsertOne(newMovies);
            return newMovies;
        }

        public void Remove(string id)
        {
            _movies.DeleteOne(Movies => Movies.Id == id);
        }
    }
}