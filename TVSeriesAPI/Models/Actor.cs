using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models
{
    public class Actor : IActor
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Age { get; set; }
        public string Country { get; set; }
        public List<InSeries> InSeries { get; set; }
        public List<InMovies> InMovies { get; set; }
    }
}