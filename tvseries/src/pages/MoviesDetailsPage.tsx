import { FC } from 'react';
import MovieDetails from '../components/movies/MovieDetails';

const MoviesDetailsPage: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Movie details</h3>
			<MovieDetails />
		</section>
	);
};

export default MoviesDetailsPage;
