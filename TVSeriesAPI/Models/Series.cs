using System.Collections.Generic;
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
        public List<Genre> Genre { get; set; }
        public string Plot { get; set; }
        public List<Episode> Episodes { get; set; }
    }
}