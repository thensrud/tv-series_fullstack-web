import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <section className='section' id='notfoundpage'>
      <strong>
        <h1>404</h1>
      </strong>
      <h1>You weren't supposed to see this</h1>
      <p>The page you're looking for doesn't seem to exist</p>
      <p>
        Return to the <Link to='/'>homepage</Link> and remember: you haven't
        seen anything
      </p>
    </section>
  );
};

export default NotFound;
