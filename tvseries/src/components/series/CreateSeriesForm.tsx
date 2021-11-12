import { FC, ChangeEvent, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';

const CreateSeriesForm: FC = () => {
	const [newGenre, setNewGenre] = useState(['']);
	const [newEpisode, setNewEpisode] = useState(['']);
	const [newSeason, setNewSeason] = useState([
		{
			seasonNumber: '',
			episodes: newEpisode,
		},
	]);
	const [newSeries, setNewSeries] = useState<ISeries>({
		name: '',
		image: '',
		plot: '',
		// genre: newGenre,
		// seasons: newSeason,
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
				setNewGenre([...newGenre, value]);
				break;
			case 'plot':
				setNewSeries({ ...newSeries, plot: value });
				break;
			case 'seasonNumber':
				// setNewSeason([ ...newSeason, {seasonNumber: value} ]);
				break;
		}
	};

	const postNewSeries = () => {
		seriesService.postSeries(newSeries, newImage as File);
	};

	return (
		<section>
			<div>
				<label>Name</label>
				<input
					onChange={handleChange}
					name="name"
					type="text"
					placeholder="E.g. Game of Thrones"
				/>
			</div>
			<div>
				<label>Choose Picture</label>
				<input onChange={handleChange} name="image" type="file" />
			</div>
			<div>
				<label>Genre(s)</label>
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
				<label>Seasons</label>
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
