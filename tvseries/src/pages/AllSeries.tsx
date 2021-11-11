import { FC } from 'react';
import SeriesList from '../components/series/SeriesList';

const AllSeries: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-4">Alle serier</h3>
			<SeriesList />
		</section>
	);
};

export default AllSeries;
