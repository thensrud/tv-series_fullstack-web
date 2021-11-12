import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { SeriesContext } from '../contexts/SeriesContext';
import { SeriesContextType } from '../types/SeriesContextType';
import { ISeries } from '../interfaces/ISeries';

const SeriesDetails: FC = () => {
  const { id } = useParams();

  const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [serie, setSerie] = useState<ISeries>();

  useEffect(() => {
    if (id) {
      const _serie = getSeriesById(id);
      setSerie(_serie);
    }
  }, []);

  return (
    <section>
      <h3>Du har bedt om id: {id}</h3>
      <article>
        <h4>Serie: {serie?.name}</h4>
      </article>
    </section>
  );
};

export default SeriesDetails;
