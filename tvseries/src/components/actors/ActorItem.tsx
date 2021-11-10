import React, { FC } from "react";
import { IActors } from "../../interfaces/IActors";

const ActorItem: FC<IActors> = ({ name }) => {
  return (
    <article>
      <h3>Navn: {name}</h3>
    </article>
  );
};

export default ActorItem;
