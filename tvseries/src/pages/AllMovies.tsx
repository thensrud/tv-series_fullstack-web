import { FC } from 'react';
import MovieList from '../components/movies/MovieList';

const AllMovies: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">All Movies</h3>
			<MovieList />
		</section>
	);
};

export default AllMovies;
