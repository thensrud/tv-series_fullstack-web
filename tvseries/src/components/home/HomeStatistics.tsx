import { FC, useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { ActorsContext } from '../../contexts/ActorsContext';
import { MoviesContext } from '../../contexts/MoviesContext';
import { SeriesContext } from '../../contexts/SeriesContext';
import TrailerContext from '../../contexts/TrailerContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { MoviesContextType } from '../../types/MoviesContextType';
import { SeriesContextType } from '../../types/SeriesContextType';
import { TrailerContextType } from '../../types/TrailerContextType';

const HomeStatistics: FC = () => {
	const { actors } = useContext(ActorsContext) as ActorsContextType;
	const { series } = useContext(SeriesContext) as SeriesContextType;
	const { movies } = useContext(MoviesContext) as MoviesContextType;
	const { trailer } = useContext(TrailerContext) as TrailerContextType;

	const nOfActors = actors.length;
	const nOfSeries = series.length;
	const nOfMovies = movies.length;
	const nOfTrailers = trailer.length;

	return (
		<div className="mt-4">
			<Alert variant="primary">Number of actors: {nOfActors}</Alert>
			<Alert variant="info">Number of series: {nOfSeries}</Alert>
			<Alert variant="secondary">Number of movies: {nOfMovies}</Alert>
			<Alert variant="primary">Number of trailers: {nOfTrailers}</Alert>
		</div>
	);
};

export default HomeStatistics;
