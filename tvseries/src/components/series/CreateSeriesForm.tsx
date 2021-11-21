import { FC, ChangeEvent, useState, useEffect, useContext } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';
import { Badge, Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { IGenre } from '../../interfaces/IGenre';
import { IEpisode } from '../../interfaces/IEpisode';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { genres } from '../../data/genres';

const CreateSeriesForm: FC = () => {
	const [newEpisodeName, setNewEpisodeName] = useState<string>('');
	const [newSeasonNumber, setNewSeasonNumber] = useState<string>('');
	const [newEpisodeNumber, setNewEpisodeNumber] = useState<string>('');
	const [newGenre, setNewGenre] = useState<IGenre[]>([]);
	const [newEpisode, setNewEpisode] = useState<IEpisode[]>([]);

	const [newSeries, setNewSeries] = useState<ISeries>({
		name: '',
		image: '',
		genre: newGenre,
		plot: '',
		episodes: newEpisode,
	});

	const [newImage, setNewImage] = useState<File>();

	const { saveSeries } = useContext(SeriesContext) as SeriesContextType;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		let { name, value, checked } = event.target;

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
			case 'Action':
			case 'Adventure':
			case 'Sci-Fi':
			case 'Comedy':
			case 'Romance':
			case 'Horror':
			case 'Thriller':
			case 'Drama':
				if (checked) {
					setNewGenre([...newGenre, { name }]);
				} else if (!checked) {
					const result = newGenre.filter(
						({ name }) => name !== event.target.name
					);
					setNewGenre(result);
				}
				break;
			case 'episodeName':
				setNewEpisodeName(value);
				break;
			case 'seasonNumber':
				setNewSeasonNumber(value);
				break;
			case 'episodeNumber':
				setNewEpisodeNumber(value);
				break;
			case 'plot':
				setNewSeries({ ...newSeries, plot: value });
				break;
		}
	};

	useEffect(() => {
		setNewSeries({ ...newSeries, genre: newGenre });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newGenre]);

	const addNewEpisode = () => {
		setNewEpisode([
			...newEpisode,
			{
				name: newEpisodeName,
				seasonNumber: newSeasonNumber,
				episodeNumber: newEpisodeNumber,
			},
		]);
		setNewEpisodeName('');
		setNewSeasonNumber('');
		setNewEpisodeNumber('');
	};

	useEffect(() => {
		setNewSeries({ ...newSeries, episodes: newEpisode });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newEpisode]);

	const listGenres = () => {
		return newGenre.map((genre: IGenre, key: number) => {
			return (
				<Badge className="mx-1" bg="secondary" key={key}>
					{genre.name}
				</Badge>
			);
		});
	};

	const listEpisodes = () => {
		return newEpisode.map((episode: IEpisode, key: number) => {
			return (
				<Badge className="mx-1" bg="secondary" key={key}>
					{`"${episode.name}" as episode ${episode.episodeNumber} in season ${episode.seasonNumber}`}
				</Badge>
			);
		});
	};

	const postNewSeries = () => {
		seriesService.postSeries(newSeries, newImage as File);
		saveSeries(newSeries);

		setNewSeries({
			name: '',
			image: '',
			genre: [],
			plot: '',
			episodes: [],
		});
		setNewEpisodeName('');
		setNewSeasonNumber('');
		setNewEpisodeNumber('');
		setNewGenre([]);
		setNewEpisode([]);
	};

	const listGenresCheckbox = () => {
		return genres.map((genre, key) => {
			return (
				<Form.Check
					inline
					label={genre.name}
					name={genre.name}
					type="checkbox"
					key={key}
					onChange={handleChange}
				/>
			);
		});
	};

	return (
		<>
			{/* Series Name */}
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
					value={newSeries.name}
				/>
			</FloatingLabel>

			{/* Image */}
			<Form.Group controlId="seriesImage" className="mb-3 mt-3">
				<Form.Label>Series image</Form.Label>
				<Form.Control onChange={handleChange} name="image" type="file" />
			</Form.Group>

			{/* Plot */}
			<FloatingLabel className="input-label" controlId="plot" label="Plot">
				<Form.Control
					onChange={handleChange}
					className="mb-3"
					as="textarea"
					style={{ height: '100px' }}
					name="plot"
					type="text"
					placeholder="Once upon a time..."
					value={newSeries.plot}
				/>
			</FloatingLabel>

			{/* Genre */}
			<div className="mb-3">{listGenresCheckbox()}</div>

			{/* List all genres added */}
			<p className="mt-1">Genres added: {listGenres()}</p>

			{/* Episodename, seasonnumber og episodenumber */}
			<FloatingLabel
				className="mb-3 input-label"
				controlId="episodeName"
				label="Episode name"
			>
				<Form.Control
					onChange={handleChange}
					name="episodeName"
					type="text"
					placeholder="Episode name"
					value={newEpisodeName}
				/>
			</FloatingLabel>
			<Row>
				<Col>
					<FloatingLabel
						className="input-label"
						controlId="seasonNumber"
						label="Season number"
					>
						<Form.Control
							onChange={handleChange}
							name="seasonNumber"
							type="text"
							placeholder="Which season is this?"
							value={newSeasonNumber}
						/>
					</FloatingLabel>
				</Col>
				<Col>
					<FloatingLabel
						className="input-label"
						controlId="episodeNumber"
						label="Episode number"
					>
						<Form.Control
							onChange={handleChange}
							name="episodeNumber"
							type="text"
							placeholder="Episode number?"
							value={newEpisodeNumber}
						/>
					</FloatingLabel>
				</Col>
			</Row>

			{/* Add new episode */}
			{newEpisodeName && newSeasonNumber && newEpisodeNumber ? (
				<Button
					onClick={addNewEpisode}
					className="my-3"
					variant="secondary"
					type="submit"
				>
					Add episode
				</Button>
			) : (
				<Button className="my-3" variant="secondary" type="submit" disabled>
					Add episode
				</Button>
			)}

			{/* List all episodes added */}
			<p className="mt-1">Episodes added: {listEpisodes()}</p>

			{/* Post new series */}
			<Button
				className="mt-3"
				onClick={postNewSeries}
				variant="primary"
				type="submit"
			>
				Submit new series
			</Button>
		</>
	);
};

export default CreateSeriesForm;
