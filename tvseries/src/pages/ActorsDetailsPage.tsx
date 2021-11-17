import { FC } from 'react';
import ActorsDetails from '../components/actors/ActorsDetails';

const ActorsDetailsPage: FC = () => {
  return (
    <section className='section'>
      <h3 className='page-title mb-2'>Actor details</h3>
      <ActorsDetails />
    </section>
  );
};

export default ActorsDetailsPage;
