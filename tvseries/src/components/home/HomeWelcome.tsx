import { FC } from "react";

const HomeWelcome: FC = () => {
  return (
    <article className="mt-4">
      <h4>Welcome to OMG-DB!</h4>
      <h5>The Online Movie Gathering Database. </h5>
      <p>
        This is a database for series, movies and actors. You can see what is
        already in the MongoDB database by clicking on 'All Series', 'All
        Actors', 'All Movies', or 'Trailers'. You can also add new series,
        movies and actors! If there is a match between where an actor has
        starred and a corresponding series or movie, they should appear in the
        detailed page of that series or movie. The detailed actor page should
        also list in which series or movie the actor has starred.
      </p>
    </article>
  );
};

export default HomeWelcome;
