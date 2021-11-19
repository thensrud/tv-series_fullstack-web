import { FC } from 'react';
import EditSeries from '../components/series/EditSeries';

const EditSeriesPage: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Edit Series Info</h3>
			<EditSeries />
		</section>
	);
};

export default EditSeriesPage;
