using TVSeriesAPI.Models;
using TVSeriesAPI.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace TVSeriesAPI.Services
{
    public class ActorService
    {
        private readonly IMongoCollection<Actor> _actors;

        public ActorService(ISeriesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _actors = database.GetCollection<Actor>(settings.ActorsCollectionName);
        }

        public List<Actor> Get()
        {
            return _actors.Find(actors => true).ToList();
        }

        public Actor Get(string id)
        {
            return _actors.Find<Actor>(actor => actor.Id == id).FirstOrDefault();
        }

        public Actor Create(Actor newActor)
        {
            _actors.InsertOne(newActor);
            return newActor;
        }

        public void Update(string id, Actor actorIn)
        {
            _actors.ReplaceOne(actor => actor.Id == actorIn.Id, actorIn);
        }

        public void Remove(string id)
        {
            _actors.DeleteOne(actor => actor.Id == id);
        }
    }
}