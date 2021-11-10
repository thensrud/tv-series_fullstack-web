import React, { FC } from "react";
import ActorList from "../components/actors/ActorList";

const AllActors: FC = () => {
  return (
    <section>
      <h3>Alle skuespillere</h3>
      <ActorList />
    </section>
  );
};

export default AllActors;
