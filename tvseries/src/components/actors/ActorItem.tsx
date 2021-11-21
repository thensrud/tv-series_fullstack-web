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
		let confirmResult: boolean = window.confirm(
			`Are you sure you want to delete ${name} from the database?`
		);
		if (id && confirmResult) {
			try {
				deleteActor(id);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<Card>
			<Card.Img
				style={{ height: '300px' }}
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
