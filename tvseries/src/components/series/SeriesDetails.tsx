import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { ISeries } from '../../interfaces/ISeries';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IInSeries } from '../../interfaces/IInSeries';
import { Link } from 'react-router-dom';

const SeriesDetails: FC = () => {
  const { id } = useParams();

  const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;
  const { actors } = useContext(ActorsContext) as ActorsContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [serie, setSerie] = useState<ISeries>();

  useEffect(() => {
    if (id) {
      const _serie = getSeriesById(id);
      setSerie(_serie);
    }
  }, []);

  const createInActorsList = () => {
    return actors?.map((actor, key) => {
      console.log(actor, key);
    });
  };

  return (
    <section>
      <h3>Du har bedt om id: {id}</h3>
      <article>
        <h4>Serie: {serie?.name}</h4>
        <h4>Featured actors: {createInActorsList()}</h4>
      </article>
    </section>
  );
};

export default SeriesDetails;
