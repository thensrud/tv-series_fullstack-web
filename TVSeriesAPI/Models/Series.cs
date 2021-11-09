using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
// using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models 
{
    public class Series // : ISeries
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Genre { get; set; }
        public string Plot { get; set; }
        public Seasons[] Seasons { get; set; }
    }

    public class Seasons // : ISeasons
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SeasonNumber { get; set; }
        public Episodes[] Episodes { get; set; }
    }

    public class Episodes // : IEpisodes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string[] Episode { get; set; }
    }
}