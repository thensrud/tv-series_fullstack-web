import { FC } from 'react';
import CreateSeriesForm from '../components/series/CreateSeriesForm';

const CreateSeries: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Save new series</h3>
			<CreateSeriesForm />
		</section>
	);
};

export default CreateSeries;
