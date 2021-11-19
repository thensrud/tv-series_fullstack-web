import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from '../components/shared/MainNavigation';
import {
	AllActors,
	AllSeries,
	CreateSeries,
	CreateActor,
	HomePage,
	AllMovies,
	MoviesDetailsPage,
	CreateMovie,
	EditActorPage,
	EditSeriesPage,
	ActorsDetailsPage,
	SeriesDetailsPage,
} from '../pages';

// Docs new router version: https://reactrouter.com/docs/en/v6/getting-started/tutorial

const Routing: FC = () => {
	return (
		<BrowserRouter>
			<MainNavigation />

			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="all-series" element={<AllSeries />} />
				<Route path="create-series" element={<CreateSeries />} />
				<Route path="all-actors" element={<AllActors />} />
				<Route path="create-actor" element={<CreateActor />} />
				<Route path="series-details/:id" element={<SeriesDetailsPage />} />
				<Route path="actors-details/:id" element={<ActorsDetailsPage />} />
				<Route path="all-movies" element={<AllMovies />} />
				<Route path="movies-details/:id" element={<MoviesDetailsPage />} />
				<Route path="create-movies" element={<CreateMovie />} />
				<Route path="edit-actor/:id" element={<EditActorPage />} />
				<Route path="edit-series/:id" element={<EditSeriesPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
