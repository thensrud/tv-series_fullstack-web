import { FC, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { To, useNavigate } from 'react-router-dom';
import { SeriesContext } from '../../contexts/SeriesContext';
import { ISeries } from '../../interfaces/ISeries';
import { SeriesContextType } from '../../types/SeriesContextType';

const SeriesItem: FC<ISeries> = ({ id, name, image, plot, genres }) => {
	const { deleteSeries } = useContext(SeriesContext) as SeriesContextType;

	const navigate = useNavigate();
	const handleClick = (path: To) => {
		navigate(path);
	};

	const removeSeries = () => {
		if (id) {
			deleteSeries(id);
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
				<Card.Subtitle className="pb-3">{genres} </Card.Subtitle>
				<Card.Text>{plot}</Card.Text>
			</Card.Body>

			<div className="d-grid m-1 gap-1">
				<Button
					variant="primary"
					onClick={() => handleClick(`/series-details/${id}`)}
				>
					Read more
				</Button>

				<Button variant="outline-danger" onClick={removeSeries}>
					Delete
				</Button>
			</div>
		</Card>
	);
};

export default SeriesItem;
