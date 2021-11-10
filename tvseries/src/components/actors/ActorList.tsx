import React, { FC, useEffect, useState } from "react";
import { IActors } from "../../interfaces/IActors";
import { actorsService } from "../../services/actorsService";
import ActorItem from "./ActorItem";

const ActorList: FC = () => {
  const [actor, setActor] = useState<IActors[]>();

  useEffect(() => {
    getAllActors();
  }, []);

  const getAllActors = async () => {
    const result = await actorsService.getAllActors();
    setActor(result);
  };

  const createActorList = () => {
    return actor?.map((actor: IActors, key: number) => {
      return (
        <ActorItem
          key={key}
          name={actor.name}
          image={actor.image}
          age={actor.age}
          country={actor.country}
        />
      );
    });
  };

  return <section>{createActorList()}</section>;
};

export default ActorList;
