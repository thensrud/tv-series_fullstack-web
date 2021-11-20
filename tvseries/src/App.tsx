import "bootstrap/dist/css/bootstrap.min.css";
import { ActorsProvider } from "./contexts/ActorsContext";
import { MoviesProvider } from "./contexts/MoviesContext";
import { SeriesProvider } from "./contexts/SeriesContext";
import { TrailerProvider } from "./contexts/TrailerContext";
import Routing from "./routing/Routing";

function App() {
  return (
    <main>
      <TrailerProvider>
        <MoviesProvider>
          <SeriesProvider>
            <ActorsProvider>
              <Routing />
            </ActorsProvider>
          </SeriesProvider>
        </MoviesProvider>
      </TrailerProvider>
    </main>
  );
}

export default App;
