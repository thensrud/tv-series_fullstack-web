import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IActors } from '../../interfaces/IActors';
//import { IInSeries } from '../../interfaces/IInSeries';

const ActorItem: FC<IActors> = ({
  id,
  name,
  image,
  age,
  country,
  inSeries,
}) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/actors-details/${id}`}>Read more about {name}</Link>
      </Card.Body>
    </Card>
  );
};

export default ActorItem;
