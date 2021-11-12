import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../contexts/ActorsContext';
import { ActorsContextType } from '../types/ActorsContextType';
import { IActors } from '../interfaces/IActors';

const ActorsDetails: FC = () => {
  const { id } = useParams();

  const { getActorsById } = useContext(ActorsContext) as ActorsContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [actor, setActor] = useState<IActors>();

  console.log('id in actorsDetails:   ' + id);

  useEffect(() => {
    if (id) {
      const _actor = getActorsById(id);
      setActor(_actor);
    }
  }, []);

  return (
    <section>
      <h3>Du har bedt om id: {id}</h3>
      <article>
        <h4>Actor: {actor?.name}</h4>
      </article>
    </section>
  );
};

export default ActorsDetails;
