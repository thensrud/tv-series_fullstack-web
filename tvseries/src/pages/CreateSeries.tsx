import { FC } from 'react';
import CreateSeriesForm from '../components/series/CreateSeriesForm';

const CreateSeries: FC = () => {
	return (
		<section>
			<h3>Save new series</h3>
			<CreateSeriesForm />
		</section>
	);
};

export default CreateSeries;
