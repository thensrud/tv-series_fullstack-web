import { To, useNavigate, useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IActors } from '../../interfaces/IActors';
import { IInSeries } from '../../interfaces/IInSeries';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MoviesContext } from '../../contexts/MoviesContext';
import { MoviesContextType } from '../../types/MoviesContextType';
import { IInMovies } from '../../interfaces/IInMovie';

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

  const navigate = useNavigate();
  const handleClick = (path: To) => {
    navigate(path);
  };

  const matchSeries = (_name: string) => {
    return series?.find(
      (serie: { name: string }) =>
        serie.name.toLowerCase() === _name.toLowerCase()
    );
  };

  const createInSeriesList = () => {
    return actor?.inSeries?.map((featuredIn: IInSeries, key: number) => {
      let match = matchSeries(featuredIn.name);
      if (match) {
        return (
          <Col className='mt-1' sm={6} md={4} lg={3} xl={2} key={key}>
            <Card className='mini-card'>
              <Card.Img
                variant='top'
                src={`https://localhost:5001/images/${match?.image}`}
                alt={match?.name}
              />
              <Card.Body>
                <Card.Title>{match?.name}</Card.Title>
              </Card.Body>

              <Button
                variant='primary'
                onClick={() => handleClick(`/series-details/${match?.id}`)}
              >
                Read more
              </Button>
            </Card>
          </Col>
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
          <Col className='mt-1' sm={6} md={4} lg={3} xl={2} key={key}>
            <Card className='mini-card'>
              <Card.Img
                variant='top'
                src={`https://localhost:5001/images/${match?.image}`}
                alt={match?.name}
              />
              <Card.Body>
                <Card.Title>{match?.name}</Card.Title>
              </Card.Body>

              <Button
                variant='primary'
                onClick={() => handleClick(`/movies-details/${match?.id}`)}
              >
                Read more
              </Button>
            </Card>
          </Col>
        );
      }
      return null;
    });
  };

  return (
    <>
      <h2 className='mb-3'>{actor?.name}</h2>
      <img
        src={`https://localhost:5001/images/${actor?.image}`}
        style={{ height: '350px' }}
        alt={actor?.name}
      />
      <h4 className='mt-4'>Age: {actor?.age}</h4>
      <h4>Nationality: {actor?.country}</h4>
      <Button className='mt-4' onClick={() => handleClick(`/edit-actor/${id}`)}>
        Edit Actor Info
      </Button>
      <h4 className='mt-4'>Featured in series: </h4>
      <Row>{createInSeriesList()}</Row>
      <h4 className='mt-4'>Featured in movies:</h4>
      <Row>{createInMoviesList()}</Row>
    </>
  );
};

export default ActorsDetails;
