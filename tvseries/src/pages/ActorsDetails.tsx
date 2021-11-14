import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../contexts/ActorsContext';
import { ActorsContextType } from '../types/ActorsContextType';
import { IActors } from '../interfaces/IActors';
import { Card, Col } from 'react-bootstrap';

const ActorsDetails: FC = () => {
  const { id } = useParams();

  const { getActorsById } = useContext(ActorsContext) as ActorsContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [actor, setActor] = useState<IActors>();

  useEffect(() => {
    if (id) {
      const _actor = getActorsById(id);
      setActor(_actor);
    }
  }, []);

  return (
    <Col className='pt-2' sm={10} md={8} lg={6} xl={2}>
      <Card>
        <Card.Img
          variant='top'
          src={`https://localhost:5001/images/${actor?.image}`}
          alt={actor?.name}
        />
        <Card.Body>
          <Card.Title>Name: {actor?.name}</Card.Title>
          <Card.Subtitle className='pb-3'>Age: {actor?.age}</Card.Subtitle>

          <Card.Text>ID: {id}</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    //Fix in ActorItem.tsx and insert the text below into Card.Body
    //<Card.Text>Nationality: {actor?.country}</Card.Text>
    //<Card.Text>Featured in: {actor?.inSeries}</Card.Text>
  );
};

export default ActorsDetails;
