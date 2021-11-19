import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { ISeries } from '../../interfaces/ISeries';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { Link, To, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SeriesDetails: FC = () => {
	const { id } = useParams();

	const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;
	const { actors } = useContext(ActorsContext) as ActorsContextType;
	// Trenger egentlig ikke state her, kan vaere statisk objekt
	const [serie, setSerie] = useState<ISeries>();

	useEffect(() => {
		if (id) {
			const _serie = getSeriesById(id);
			setSerie(_serie);
		}
	}, []);

	const createInActorsList = () => {
		// Mapping through all actors
		return actors?.map((actor) => {
			let featuringIn = actor.inSeries;
			// Mapping through all series an actor has featured in
			return featuringIn?.map((sName, key) => {
				if (sName.name === serie?.name) {
					return (
						<div key={key}>
							<Link to={`/actors-details/${actor.id}`}>
								<h5>{actor.name}</h5>
								<img
									src={`https://localhost:5001/images/${actor?.image}`}
									width="100"
									height="100"
									alt={actor?.name}
								/>
							</Link>
						</div>
					);
				}
			});
		});
	};

	const navigate = useNavigate();
	const handleClick = (path: To) => {
		navigate(path);
	};

	return (
		<section>
			<h3>Du har bedt om id: {id}</h3>
			<article>
				<h4>Serie: {serie?.name}</h4>
				<h4>Featured actors: {createInActorsList()}</h4>
			</article>
			<Button onClick={() => handleClick(`/edit-series/${id}`)}>
				Edit Series Info
			</Button>
		</section>
	);
};

export default SeriesDetails;
