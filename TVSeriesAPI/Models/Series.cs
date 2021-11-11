using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models 
{
  public class Series : ISeries<Seasons>
  // https://stackoverflow.com/questions/11955605/cannot-implement-interface-member-because-it-does-not-have-the-matching-return-t
  {
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public string Genre { get; set; }
    public string Plot { get; set; }
    public List<Seasons> Seasons { get; set; }
  }

  public class Seasons
  {
    public string SeasonNumber { get; set; }
    public List<string> Episodes { get; set; }
  }
}