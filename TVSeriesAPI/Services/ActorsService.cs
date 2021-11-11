using TVSeriesAPI.Models;
using TVSeriesAPI.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TVSeriesAPI.Services
{
    public class ActorsService
    {
        private readonly IMongoCollection<Actors> _actors;

        public ActorsService(ISeriesDatabaseSettings settings)
        {
            var client = new MongoClient(  settings.ConnectionString );
            var database = client.GetDatabase(  settings.DatabaseName );
            _actors = database.GetCollection<Actors>( settings.ActorsCollectionName );
        }

        public List<Actors> Get()
        {
            return _actors.Find( actors => true).ToList();
        }

        public Actors Create(Actors newActor)
        {
            _actors.InsertOne( newActor );
            return newActor;
        }

    }
}