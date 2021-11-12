import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import { IActors } from '../../interfaces/IActors';

const ActorItem: FC<IActors> = ({ name, image, age, country, inSeries }) => {
	const createInSeriesList = () => {
		return inSeries?.map((series: string, key: number) => {
			return (
				<div key={key}>
					<h5>{series}</h5>
					{/* Trenger logikk her for å hente ut bilde av riktig serie fra serie-collection, 
          som også linker til den seriens side */}
				</div>
			);
		});
	};

	return (
		// <article>
		//  <h3>Name: {name}</h3>
		//  <img src={`https://localhost:5001/images/${image}`} alt={name} />
		//  <p>Age: {age}</p>
		//  <p>Origin country: {country}</p>
		//  {createInSeriesList()}
		// </article>

		<Card>
			<Card.Img
				variant="top"
				src={`https://localhost:5001/images/${image}`}
				alt={name}
			/>
			<Card.Body>
				<Card.Title>
					{name} ({age})
				</Card.Title>
				<Button variant="primary">Read more</Button>
			</Card.Body>
		</Card>
	);

 export default ActorItem;
