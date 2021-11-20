import { useParams } from "react-router";
import { FC, useContext, useEffect, useState } from "react";
import { SeriesContext } from "../../contexts/SeriesContext";
import { SeriesContextType } from "../../types/SeriesContextType";
import { ISeries } from "../../interfaces/ISeries";
import { ActorsContext } from "../../contexts/ActorsContext";
import { ActorsContextType } from "../../types/ActorsContextType";
import { To, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { IEpisode } from "../../interfaces/IEpisode";
import { IInSeries } from "../../interfaces/IInSeries";
import { IGenre } from "../../interfaces/IGenre";

const SeriesDetails: FC = () => {
  const { id } = useParams();

  const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;
  const { actors } = useContext(ActorsContext) as ActorsContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [series, setSeries] = useState<ISeries>();

  useEffect(() => {
    if (id) {
      const _series = getSeriesById(id);
      setSeries(_series);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  const createInActorsList = () => {
    let amountOfFeaturedActors = 0;
    // Mapping through all actors
    return actors?.map((actor) => {
      let featuringIn = actor.inSeries;
      // Mapping through all series an actor has featured in
      return featuringIn?.map((sName: IInSeries, key: number) => {
        if (sName.name.toLowerCase() === series?.name.toLowerCase()) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          amountOfFeaturedActors += 1;
          return (
            <Col className="mt-1" sm={6} md={4} lg={3} xl={2} key={key}>
              <Card className="mini-card">
                <Card.Img
                  variant="top"
                  src={`https://localhost:5001/images/${actor?.image}`}
                  alt={actor?.name}
                />
                <Card.Body>
                  <Card.Title>{actor.name}</Card.Title>
                </Card.Body>

                <Button
                  variant="primary"
                  onClick={() => handleClick(`/actors-details/${actor.id}`)}
                >
                  Read more
                </Button>
              </Card>
            </Col>
          );
        }
        return null;
      });
    });
  };

  const renderEpisodes = () => {
    return series?.episodes?.map((episode: IEpisode, key: number) => {
      return (
        <p key={key}>
          "{episode.name}", which is episode number {episode.episodeNumber} in
          season {episode.seasonNumber}.
        </p>
      );
    });
  };

  const getGenres = () => {
    return series?.genre?.map((genre: IGenre, key: number) => {
      return <p key={key}>{genre.name}</p>;
    });
  };

  return (
    <section>
      <h2 className="mb-3">{series?.name}</h2>
      <img
        src={`https://localhost:5001/images/${series?.image}`}
        style={{ height: "350px" }}
        alt={series?.name}
      />
      <h4 className="mb-3 mt-4">Plot:</h4>
      <p>{series?.plot}</p>
      <h4 className="mb-3 mt-4">Episodes:</h4>
      <div>{renderEpisodes()}</div>
      <h4>Genres: {getGenres()}</h4>
      <Button
        className="mt-4"
        onClick={() => handleClick(`/edit-series/${id}`)}
      >
        Edit Series Info
      </Button>
      <h4 className="mt-4">Actors featured in this series:</h4>
      <Row>{createInActorsList()}</Row>
    </section>
  );
};

export default SeriesDetails;
