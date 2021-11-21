import { FC, useContext, useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ActorsContext } from '../../contexts/ActorsContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import { IGenre } from '../../interfaces/IGenre';
import { IMovies } from '../../interfaces/IMovies';
import { To, useNavigate } from 'react-router-dom';
import { ActorsContextType } from '../../types/ActorsContextType';
import { MoviesContextType } from '../../types/MoviesContextType';
import { IInMovies } from '../../interfaces/IInMovie';

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
		return movie?.genre?.map((genre: IGenre, key: number) => {
			return <p key={key}>{genre.name}</p>;
		});
	};

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
				if (mName.name.toLowerCase() === movie?.name.toLowerCase()) {
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

	const createGenreList = () => {
		return movie?.genre?.map((movie: IGenre, key: number) => {
			return (
				<Badge className="me-1" bg="secondary" key={key}>
					{movie.name}
				</Badge>
			);
		});
	};

	return (
		<>
			<h2 className="mb-3">{movie?.name}</h2>
			<img
				src={`https://localhost:5001/images/${movie?.image}`}
				style={{ height: '350px' }}
				alt={movie?.name}
			/>
			<h4 className="mt-4">Genre(s):</h4>
			{createGenreList()}
			<h4 className="mb-3 mt-4">Plot:</h4>
			<p>{movie?.plot}</p>

			{/* <Button
				className="mt-4"
				onClick={() => handleClick(`/edit-movies/${id}`)}
			>
				Edit Movies Info
			</Button> */}

			<h4 className="mt-4">Actors featured in this movie:</h4>
			<Row>{createInActorsList()}</Row>
		</>
	);
};

export default MovieDetails;
