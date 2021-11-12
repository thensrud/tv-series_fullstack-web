import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ISeries } from '../../interfaces/ISeries';

const SeriesItem: FC<ISeries> = ({ id, name, image, plot, genres }) => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className='pb-3'>{genres} </Card.Subtitle>
        <Card.Text>{plot}</Card.Text>
        <Link to={`/series-details/${id}`}>Read more about {name}</Link>
      </Card.Body>
    </Card>
  );
};

export default SeriesItem;
