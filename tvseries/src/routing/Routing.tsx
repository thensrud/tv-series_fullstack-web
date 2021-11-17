import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from '../components/shared/MainNavigation';
import {
  AllActors,
  AllSeries,
  CreateSeries,
  CreateActor,
  HomePage,
} from '../pages';
import ActorsDetailsPage from '../pages/ActorsDetailsPage';
import SeriesDetailsPage from '../pages/SeriesDetailsPage';

// Docs new router version: https://reactrouter.com/docs/en/v6/getting-started/tutorial

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='all-series' element={<AllSeries />} />
        <Route path='create-series' element={<CreateSeries />} />
        <Route path='all-actors' element={<AllActors />} />
        <Route path='create-actor' element={<CreateActor />} />
        <Route
          path='series-details/:id'
          element={<SeriesDetailsPage />}
        ></Route>
        <Route
          path='actors-details/:id'
          element={<ActorsDetailsPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
