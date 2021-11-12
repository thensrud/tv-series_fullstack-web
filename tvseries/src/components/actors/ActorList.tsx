import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IActors } from '../../interfaces/IActors';
import { actorsService } from '../../services/actorsService';
import ActorItem from './ActorItem';

const ActorList: FC = () => {
	const [actor, setActor] = useState<IActors[]>();

	useEffect(() => {
		getAllActors();
	}, []);

	const getAllActors = async () => {
		const result = await actorsService.getAllActors();
		setActor(result);
	};

	const createActorList = () => {
		return actor?.map((actor: IActors, key: number) => {
			return (
				<Col className="pt-4" sm={6} md={4} lg={3} xl={2} key={key}>
					<ActorItem
						key={key}
						name={actor.name}
						image={actor.image}
						age={actor.age}
						country={actor.country}
						inSeries={actor.inSeries}
					/>
				</Col>
			);
		});
	};

	return <Row>{createActorList()}</Row>;
};

export default ActorList;
