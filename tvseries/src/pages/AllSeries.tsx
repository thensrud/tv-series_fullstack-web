import { FC } from 'react';
import SeriesList from '../components/series/SeriesList';

const AllSeries: FC = () => {
	return (
		<section>
			<h3>Alle serier</h3>
			<SeriesList />
		</section>
	);
};

export default AllSeries;
