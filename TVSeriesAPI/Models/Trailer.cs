using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models
{
    public class Trailer : ITrailer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Link { get; set; }
    }
}