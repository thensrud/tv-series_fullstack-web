import { FC, useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MoviesContext } from '../../contexts/MoviesContext';
import { IMovies } from '../../interfaces/IMovies';
import { MoviesContextType } from '../../types/MoviesContextType';
import MovieItem from './MovieItem';

const MovieList: FC = () => {
	const { movies, getMoviesFromService } = useContext(
		MoviesContext
	) as MoviesContextType;

	useEffect(() => {
		getMoviesFromService();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [movies]);

	const createMoviesList = () => {
		return movies.map((movie: IMovies, key: number) => {
			return (
				<Col className="pt-4" sm={6} md={4} lg={3} xl={2} key={key}>
					<MovieItem
						key={key}
						id={movie.id}
						name={movie.name}
						image={movie.image}
						genres={movie.genres}
						plot={movie.plot}
					/>
				</Col>
			);
		});
	};

	return <Row>{createMoviesList()}</Row>;
};

export default MovieList;
