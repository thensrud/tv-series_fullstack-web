using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
// using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models 
{
  // [BsonIgnoreExtraElements]
  public class Actors //: IActors
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public string Age { get; set; }
    public string Country { get; set; }
    public List<string> InSeries { get; set; }
  }
}