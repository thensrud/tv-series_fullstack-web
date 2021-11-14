import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IActors } from '../../interfaces/IActors';

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
    <section>
      <h3>Name:</h3>
      <article>
        <h4>Age: </h4>
        <h4>ID: {id}</h4>
      </article>
    </section>
    //{actor?.age} {actor?.name}
    //Map out inSeries in individual cards -
    //Fix in ActorItem.tsx and insert the variables below
    //<Card.Text>Nationality: {actor?.country}</Card.Text>
    //<Card.Text>Featured in: {actor?.inSeries}</Card.Text>
  );
};

export default ActorsDetails;
