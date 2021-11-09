using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
// using TVSeriesAPI.Interfaces;

namespace TVSeriesAPI.Models 
{
    // bruker ikke interface nå
  public class Series //: ISeasons
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