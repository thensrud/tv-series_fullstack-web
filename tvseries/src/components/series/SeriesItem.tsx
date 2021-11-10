import { FC } from "react";
import { ISeries } from "../../interfaces/ISeries";

const SeriesItem: FC<ISeries> = ({ id, name, image, plot, genre }) => {
  return (
    <article>
      <h3>
        {name} (sjanger: {genre})
      </h3>
      <img src={`https://localhost:5001/images/${image}`} alt={name} />
      <div>{plot}</div>
    </article>
  );
};

export default SeriesItem;
