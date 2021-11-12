import 'bootstrap/dist/css/bootstrap.min.css';
import { ActorsProvider } from './contexts/ActorsContext';
import { SeriesProvider } from './contexts/SeriesContext';
import Routing from './routing/Routing';

function App() {
  return (
    <main>
      <SeriesProvider>
        <ActorsProvider>
          <Routing />
        </ActorsProvider>
      </SeriesProvider>
    </main>
  );
}

export default App;
