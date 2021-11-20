import { To, useNavigate, useParams } from "react-router";
import { FC, useContext, useEffect, useState } from "react";
import { ActorsContext } from "../../contexts/ActorsContext";
import { ActorsContextType } from "../../types/ActorsContextType";
import { IActors } from "../../interfaces/IActors";
import { IInSeries } from "../../interfaces/IInSeries";
import { SeriesContext } from "../../contexts/SeriesContext";
import { SeriesContextType } from "../../types/SeriesContextType";
import { Link } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import { MoviesContext } from "../../contexts/MoviesContext";
import { MoviesContextType } from "../../types/MoviesContextType";
import { IInMovies } from "../../interfaces/IInMovie";

const ActorsDetails: FC = () => {
  const { id } = useParams();

  const { getActorsById } = useContext(ActorsContext) as ActorsContextType;
  const { series } = useContext(SeriesContext) as SeriesContextType;
  const { movies } = useContext(MoviesContext) as MoviesContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [actor, setActor] = useState<IActors>();

  useEffect(() => {
    if (id) {
      const _actor = getActorsById(id);
      setActor(_actor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const matchSeries = (_name: string) => {
    return series?.find((serie: { name: string }) => serie.name === _name);
  };

  const createInSeriesList = () => {
    return actor?.inSeries?.map((featuredIn: IInSeries, key: number) => {
      let match = matchSeries(featuredIn.name);
      if (match) {
        return (
          <div key={key}>
            <Link to={`/series-details/${match?.id}`}>
              <h5>{match.name}</h5>
              <img
                src={`https://localhost:5001/images/${match?.image}`}
                width="100"
                height="100"
                alt={match?.name}
              />
            </Link>
          </div>
        );
      }
      return null;
    });
  };

  const matchMovies = (_name: string) => {
    return movies.find((movie: { name: string }) => movie.name === _name);
  };

  const createInMoviesList = () => {
    return actor?.inMovies?.map((featuredIn: IInMovies, key: number) => {
      let match = matchMovies(featuredIn.name);
      if (match) {
        return (
          <div key={key}>
            <Link to={`/movies-details/${match.id}`}>
              <h5>{match.name}</h5>
              <img
                src={`https://localhost:5001/images/${match?.image}`}
                width="100"
                height="100"
                alt={match?.name}
              />
            </Link>
          </div>
        );
      }
      return null;
    });
  };

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  return (
    <section>
      <img
        src={`https://localhost:5001/images/${actor?.image}`}
        width="450"
        alt={actor?.name}
      />
      <h3>Name: {actor?.name}</h3>
      <article>
        <h4>Age: {actor?.age} </h4>
        <h4>Nationality: {actor?.country}</h4>
      </article>
      <Button className="mt-4" onClick={() => handleClick(`/edit-actor/${id}`)}>
        Edit Actor Info
      </Button>
      <h4 className="mt-4">Featured in series: </h4>
      <Row>{createInSeriesList()}</Row>
      <h4 className="mt-4">Featured in movies:</h4>
      <Row>{createInMoviesList()}</Row>
    </section>
  );
};

export default ActorsDetails;
