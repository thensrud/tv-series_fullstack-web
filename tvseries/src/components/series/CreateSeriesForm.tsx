import { FC, ChangeEvent, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';

const CreateSeriesForm: FC = () => {
	const [newSeries, setNewSeries] = useState<ISeries>({
		name: '',
		image: '',
	});
	const [newImage, setNewImage] = useState<File>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let { name } = event.target;
		switch (name) {
			case 'name':
				let { value } = event.target;
				setNewSeries({ ...newSeries, name: value });
				break;
			case 'image':
				let { files } = event.target;
				if (files) {
					setNewSeries({ ...newSeries, image: files[0].name });
					setNewImage(files[0]);
				}
				break;
		}
	};

	const postNewSeries = () => {
		// console.log(newSeries);
		// console.log(newImage);
		seriesService.postSeries(newSeries, newImage as File);
	};

	return (
		<section>
			<div>
				<label>Navn</label>
				<input onChange={handleChange} name="name" type="text" />
			</div>
			<div>
				<label>Velg bilde</label>
				<input onChange={handleChange} name="image" type="file" />
			</div>
			<input onClick={postNewSeries} type="button" value="Lagre ny serie" />
		</section>
	);
};

export default CreateSeriesForm;
