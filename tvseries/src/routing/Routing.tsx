import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AllSeries, CreateSeries } from '../pages';

// Docs new router version: https://reactrouter.com/docs/en/v6/getting-started/tutorial

const Routing: FC = () => {
	return (
		<BrowserRouter>
			<ul>
				<li>
					<Link to="/">Alle serier</Link>
				</li>
				<li>
					<Link to="/create-series">Legg til ny serie</Link>
				</li>
			</ul>

			<Routes>
				<Route path="/" element={<AllSeries />}></Route>
				<Route path="create-series" element={<CreateSeries />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
