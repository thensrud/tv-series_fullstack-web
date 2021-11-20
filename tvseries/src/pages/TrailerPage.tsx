import { FC } from "react";
import TrailerItem from "../components/trailer/TrailerItem";
import TrailerList from "../components/trailer/TrailerList";

const TrailerPage: FC = () => {
  return (
    <section className="section">
      <h3 className="page-title mb-2">Trailers</h3>
      <TrailerList />
    </section>
  );
};

export default TrailerPage;
