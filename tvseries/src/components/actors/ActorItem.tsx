import { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/IActors';
import { ActorsContextType } from '../../types/ActorsContextType';

const ActorItem: FC<IActors> = ({
	id,
	name,
	image,
	age,
	country,
	inSeries,
}) => {
	const { deleteActor } = useContext(ActorsContext) as ActorsContextType;

	const navigate = useNavigate();
	const handleClick = (path: To) => {
		navigate(path);
	};

	const removeActor = () => {
		if (id) {
			deleteActor(id);
		}
	};

	return (
		<Card>
			<Card.Img
				variant="top"
				src={`https://localhost:5001/images/${image}`}
				alt={name}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
			</Card.Body>

			<div className="d-grid m-1 gap-1">
				<Button
					variant="primary"
					onClick={() => handleClick(`/actors-details/${id}`)}
				>
					Read more
				</Button>

				<Button variant="outline-danger" onClick={removeActor}>
					Delete
				</Button>
			</div>
		</Card>
	);
};

export default ActorItem;
