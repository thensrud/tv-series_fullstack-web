import React, { FC, useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ActorsContext } from '../../contexts/ActorsContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import { IGenre } from '../../interfaces/IGenre';
//import { IInMovies } from '../../interfaces/IInSeries';
import { IMovies } from '../../interfaces/IMovies';
import { To, useNavigate } from 'react-router-dom';
import { ActorsContextType } from '../../types/ActorsContextType';
import { MoviesContextType } from '../../types/MoviesContextType';

const MovieDetails: FC = () => {
  const { id } = useParams();

  const { getMoviesById } = useContext(MoviesContext) as MoviesContextType;
  const { actors } = useContext(ActorsContext) as ActorsContextType;

  const [movie, setMovie] = useState<IMovies>();

  useEffect(() => {
    if (id) {
      const _movie = getMoviesById(id);
      setMovie(_movie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGenres = () => {
    return movie?.genres?.map((genre: IGenre, key: number) => {
      return <p key={key}>{genre.name}</p>;
    });
  };

  /*

	const navigate = useNavigate();
    const handleClick = (path: To) => {
      navigate(path);
    };

	const createInActorsList = () => {
		let amountOfFeaturedActors = 0;
		// Mapping through all actors
		return actors?.map((actor) => {
		  let featuringIn = actor.inMovies;
		  // Mapping through all movies an actor has featured in
		  return featuringIn?.map((mName: IInMovies, key: number) => {
			if (mName.name === movie?.name) {
			  amountOfFeaturedActors += 1;
			  return (
				<Col className='mt-1' sm={6} md={4} lg={3} xl={2} key={key}>
				  <Card className='mini-card'>
					<Card.Img
					  variant='top'
					  src={`https://localhost:5001/images/${actor?.image}`}
					  alt={actor?.name}
					/>
					<Card.Body>
					  <Card.Title>{actor.name}</Card.Title>
					</Card.Body>
	
					<Button
					  variant='primary'
					  onClick={() => handleClick(`/actors-details/${actor.id}`)}
					>
					  Read more
					</Button>
				  </Card>
				</Col>
			  );
			}
		  });
		});
	  };  */

  return (
    <section>
      <h3>Name: {movie?.name}</h3>
      <img
        src={`https://localhost:5001/images/${movie?.image}`}
        alt={movie?.name}
        width='400'
      />
      <article>
        <h4>Plot: {movie?.plot}</h4>
        <h4>Genres: {getGenres()}</h4>
      </article>
      {/* 
			<Button
			  className='mt-4'
			  onClick={() => handleClick(`/edit-movies/${id}`)}  
			>

			</Button>
			<h4 className='mt-4'>Actors featured in this movie:</h4>
            <Row>{createInActorsList()}</Row>
			*/}
    </section>
  );
};

export default MovieDetails;
