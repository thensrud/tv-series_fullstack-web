import { FC, ChangeEvent, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';

const CreateSeriesForm: FC = () => {
	const [newSeries, setNewSeries] = useState<ISeries>({
		name: '',
		image: '',
		plot: '',
		genre: '',
		seasons: [
			{
				seasonNumber: '',
				episodes: [''],
			},
		],
	});
	const [newImage, setNewImage] = useState<File>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let { name } = event.target;
		let { value } = event.target;

		switch (name) {
			case 'name':
				setNewSeries({ ...newSeries, name: value });
				break;
			case 'image':
				let { files } = event.target;
				if (files) {
					setNewSeries({ ...newSeries, image: files[0].name });
					setNewImage(files[0]);
				}
				break;
			case 'genre':
				setNewSeries({ ...newSeries, genre: value });
				break;
			case 'plot':
				setNewSeries({ ...newSeries, plot: value });
				break;
			// case 'seasonNumber':
			// 	setNewSeries({ ...newSeries });
			// 	break;
		}
	};

	const postNewSeries = () => {
		seriesService.postSeries(newSeries, newImage as File);
	};

	return (
		<section>
			<div>
				<label>Navn</label>
				<input
					onChange={handleChange}
					name="name"
					type="text"
					placeholder="E.g. Game of Thrones"
				/>
			</div>
			<div>
				<label>Velg bilde</label>
				<input onChange={handleChange} name="image" type="file" />
			</div>
			<div>
				<label>Sjanger(e)</label>
				<input
					onChange={handleChange}
					name="genre"
					type="text"
					placeholder="E.g. Fantasy"
				/>
			</div>
			<div>
				<label>Plot</label>
				<input
					onChange={handleChange}
					name="plot"
					type="text"
					placeholder="E.g. Everyone wants to sit on a throne"
				/>
			</div>
			<div>
				<label>Season</label>
				<input
					onChange={handleChange}
					name="seasonNumber"
					type="text"
					placeholder="E.g. 1"
				/>
			</div>

			<input onClick={postNewSeries} type="button" value="Lagre ny serie" />
		</section>
	);
};

export default CreateSeriesForm;
