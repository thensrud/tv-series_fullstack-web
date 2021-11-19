import 'bootstrap/dist/css/bootstrap.min.css';
import { ActorsProvider } from './contexts/ActorsContext';
import { MoviesProvider } from './contexts/MoviesContext';
import { SeriesProvider } from './contexts/SeriesContext';
import Routing from './routing/Routing';

function App() {
	return (
		<main>
			<MoviesProvider>
				<SeriesProvider>
					<ActorsProvider>
						<Routing />
					</ActorsProvider>
				</SeriesProvider>
			</MoviesProvider>
		</main>
	);
}

export default App;
