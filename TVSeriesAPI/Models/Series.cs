using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models 
{
    public class Series : ISeries
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }
}