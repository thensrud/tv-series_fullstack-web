import { FC, useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ActorsContext } from '../../contexts/ActorsContext';
import { IActors } from '../../interfaces/IActors';
import { ActorsContextType } from '../../types/ActorsContextType';
import ActorItem from './ActorItem';

const ActorList: FC = () => {
  const { actors, getActorsFromService } = useContext(
    ActorsContext
  ) as ActorsContextType;

  useEffect(() => {
    getActorsFromService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actors]);

  const createActorList = () => {
    return actors?.map((actor: IActors, key: number) => {
      return (
        <Col className='pt-4' sm={6} md={4} lg={3} xl={2} key={key}>
          <ActorItem
            key={key}
            id={actor.id}
            name={actor.name}
            image={actor.image}
            age={actor.age}
            country={actor.country}
            inSeries={actor.inSeries}
            inMovies={actor.inMovies}
          />
        </Col>
      );
    });
  };

  return <Row>{createActorList()}</Row>;
};

export default ActorList;
