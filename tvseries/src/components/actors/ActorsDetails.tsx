import { To, useNavigate, useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IActors } from '../../interfaces/IActors';
import { IInSeries } from '../../interfaces/IInSeries';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ActorsDetails: FC = () => {
	const { id } = useParams();

	const { getActorsById } = useContext(ActorsContext) as ActorsContextType;
	const { series } = useContext(SeriesContext) as SeriesContextType;
	// Trenger egentlig ikke state her, kan vaere statisk objekt
	const [actor, setActor] = useState<IActors>();

	useEffect(() => {
		if (id) {
			const _actor = getActorsById(id);
			setActor(_actor);
		}
	}, []);

	const matchSeries = (_name: string) => {
		return series?.find((serie: { name: string }) => serie.name === _name);
	};

	const createInSeriesList = () => {
		return actor?.inSeries?.map((featuredIn: IInSeries, key: number) => {
			let match = matchSeries(featuredIn.name);
			return (
				<div key={key}>
					<Link to={`/series-details/${match?.id}`}>
						<h5>{featuredIn.name}</h5>
						<img
							src={`https://localhost:5001/images/${match?.image}`}
							width="100"
							height="100"
							alt={match?.name}
						/>
					</Link>
				</div>
			);
		});
	};

	const navigate = useNavigate();
	const handleClick = (path: To) => {
		navigate(path);
	};

	return (
		<section>
			<img
				src={`https://localhost:5001/images/${actor?.image}`}
				width="450"
				alt={actor?.name}
			/>
			<h3>Name: {actor?.name}</h3>
			<article>
				<h4>Age: {actor?.age} </h4>
				<h4>Nationality: {actor?.country}</h4>
				<h4>Featured in: {createInSeriesList()}</h4>
				<p>ID: {id}</p>
			</article>
			<Button onClick={() => handleClick(`/edit-actor/${id}`)}>
				Edit Actor Info
			</Button>
		</section>
	);
};

export default ActorsDetails;
