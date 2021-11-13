import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { IActors } from '../../interfaces/IActors';
import { IInSeries } from '../../interfaces/IInSeries';

const ActorItem: FC<IActors> = ({ name, image, age, country, inSeries }) => {
	const createInSeriesList = () => {
		return inSeries?.map((series: IInSeries, key: number) => {
			return (
				<div key={key}>
					<h5>{series}</h5>
					{/* Trenger logikk her for å hente ut bilde av riktig serie fra serie-collection, 
          som også linker til den seriens side. MEN dette skal være på details-siden, ikke her */}
				</div>
			);
		});
	};

	return (
		<Card>
			<Card.Img
				variant="top"
				src={`https://localhost:5001/images/${image}`}
				alt={name}
			/>
			<Card.Body className="card">
				<Card.Title>
					{name} ({age})
				</Card.Title>
				<Button variant="primary">Read more</Button>
			</Card.Body>
		</Card>
	);
};

export default ActorItem;
