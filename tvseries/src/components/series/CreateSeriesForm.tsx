import { FC, ChangeEvent, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { IGenre } from '../../interfaces/IGenre';
import { IEpisode } from '../../interfaces/IEpisode';

const CreateSeriesForm: FC = () => {
	const [newGenre, setNewGenre] = useState<IGenre>({ name: '' });
	const [newEpisodes, setNewEpisodes] = useState<IEpisode>({
		name: '',
		seasonNumber: '',
		episodeNumber: '',
	});

	const [newSeries, setNewSeries] = useState<ISeries>({
		name: '',
		image: '',
		genres: [newGenre],
		plot: '',
		episodes: [newEpisodes],
	});

	const [newImage, setNewImage] = useState<File>();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let { name } = event.target;
		let { value } = event.target;

		switch (name) {
			case 'seriesName':
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
				setNewGenre({ ...newGenre, name: value });
				// alert(JSON.stringify(newSeries.genres));
				break;
			case 'plot':
				setNewSeries({ ...newSeries, plot: value });
				break;
			case 'episodeName':
				// setNewSeason([ ...newSeason, {seasonNumber: value} ]);
				break;
		}
	};

	const addNewGenre = () => {
		setNewSeries({ ...newSeries, genres: [newGenre] });
	};

	const listGenres = () => {
		return newSeries.genres?.map((genre: IGenre, key: number) => {
			return <span key={key}>{genre.name}</span>;
		});
	};

	const postNewSeries = () => {
		// seriesService.postSeries(newSeries, newImage as File);
		alert(JSON.stringify(newSeries));
	};

	return (
		<>
			{/* Serienavn */}
			<FloatingLabel
				className="input-label"
				controlId="seriesName"
				label="Series name"
			>
				<Form.Control
					onChange={handleChange}
					name="seriesName"
					type="text"
					placeholder="What is the series called?"
				/>
			</FloatingLabel>
			{/* Bilde */}
			<Form.Group controlId="seriesImage" className="mb-3 mt-3">
				<Form.Label>Series image</Form.Label>
				<Form.Control onChange={handleChange} name="image" type="file" />
			</Form.Group>
			{/* Sjanger */}
			<FloatingLabel className="input-label" controlId="genre" label="Genre">
				<Form.Control
					onChange={handleChange}
					name="genre"
					type="text"
					placeholder="Horror? Fantasy?"
				/>
			</FloatingLabel>
			{/* Legge til sjanger */}
			{newGenre ? (
				<Button
					onClick={addNewGenre}
					className="mt-3"
					variant="secondary"
					type="submit"
				>
					Add this genre
				</Button>
			) : (
				<Button className="mt-3" variant="secondary" type="submit" disabled>
					Add this genre
				</Button>
			)}
			{/* Liste alle sjangre lagt til */}
			<p className="mt-1">Genres added: {listGenres()}</p>
			{/* Poste ny serie */}
			<Button onClick={postNewSeries} variant="primary" type="submit">
				Submit new series
			</Button>
			<br />
			<br />
			<br />
			{/* <Form>
				<Form.Group className="mb-3" controlId="seriesName">
					<Form.Label>Series name</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="text"
						name="seriesName"
						placeholder="What is the name of the series?"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="genre">
					<Form.Label>Genre</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="text"
						name="genre"
						placeholder="Horror? Fantasy?"
					/>
				</Form.Group>

				<Button onClick={postNewSeries} variant="primary" type="submit">
					Submit new series
				</Button>
			</Form>

			<section>
				<div>
					<label>Name</label>
					<input
						onChange={handleChange}
						name="seriesName"
						type="text"
						placeholder="E.g. Game of Thrones"
					/>
				</div>
				<div>
					<label>Choose Picture</label>
					<input onChange={handleChange} name="image" type="file" />
				</div>
				<div>
					<label>Genre</label>
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
						name="episodeName"
						type="text"
						placeholder="E.g. 1"
					/>
				</div>

				<input onClick={postNewSeries} type="button" value="Lagre ny serie" />
			</section> */}
		</>
	);
};

export default CreateSeriesForm;
