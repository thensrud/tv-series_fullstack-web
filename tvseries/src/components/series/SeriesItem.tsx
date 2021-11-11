import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ISeries } from '../../interfaces/ISeries';

const SeriesItem: FC<ISeries> = ({ name, image, plot, genre }) => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={`https://localhost:5001/images/${image}`}
				alt={name}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle className="pb-3">{genre}</Card.Subtitle>
				{/* <Card.Text>{plot}</Card.Text> */}
				<Button variant="primary">Read more</Button>
			</Card.Body>
		</Card>
	);
};

export default SeriesItem;
