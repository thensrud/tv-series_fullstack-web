import { useParams } from 'react-router';
import { FC, useContext, useEffect, useState } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { IActors } from '../../interfaces/IActors';
import { IInSeries } from '../../interfaces/IInSeries';

import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';
import { ISeries } from '../../interfaces/ISeries';

const ActorsDetails: FC = () => {
  const { id } = useParams();

  const { getActorsById } = useContext(ActorsContext) as ActorsContextType;
  const { getSeriesById } = useContext(SeriesContext) as SeriesContextType;
  // Trenger egentlig ikke state her, kan vaere statisk objekt
  const [actor, setActor] = useState<IActors>();
  const [series, setSeries] = useState<ISeries | any>();

  useEffect(() => {
    if (id) {
      const _actor = getActorsById(id);
      const _serie = getSeriesById(id);
      setActor(_actor);
      setSeries(_serie);
    }
  }, []);

  const matchSeries = (_name: string) => {
    return series?.find((serie: { name: string }) => serie.name === _name);
  };

  const createInSeriesList = () => {
    return actor?.inSeries?.map((series: IInSeries, key: number) => {
      return (
        <div key={key}>
          <h5>{series.name}</h5>
          {console.log(matchSeries(series.name))}
          <img src={`https://localhost:5001/images/$`} width='150' />
          {
            // Trenger logikk her for å hente ut bilde av riktig serie fra serie-collection,
            //som også linker til den seriens side.
          }
        </div>
      );
    });
  };

  return (
    <section>
      <img src={`https://localhost:5001/images/${actor?.image}`} width='450' />
      <h3>Name: {actor?.name}</h3>
      <article>
        <h4>Age: {actor?.age} </h4>
        <h4>Nationality: {actor?.country}</h4>
        <h4>Featured in: {createInSeriesList()}</h4>
        <p>ID: {id}</p>
      </article>
    </section>
  );
};

export default ActorsDetails;
