import { FC } from 'react';
import CreateMovieForm from '../components/movies/CreateMovieForm';

const CreateMovie: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Save new movie</h3>
			<CreateMovieForm />
		</section>
	);
};

export default CreateMovie;
