import { FC } from 'react';
import SeriesDetails from '../components/series/SeriesDetails';

const SeriesDetailsPage: FC = () => {
  return (
    <section className='section'>
      <h3 className='page-title mb-2'>Series details</h3>
      <SeriesDetails />
    </section>
  );
};

export default SeriesDetailsPage;
