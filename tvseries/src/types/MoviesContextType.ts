import { IMovies } from '../interfaces/IMovies';

export type MoviesContextType = {
	movies: IMovies[];
	getMoviesFromService: () => void;
	getMoviesById: (id: string) => IMovies;
	deleteMovies: (id: string) => void;
};
