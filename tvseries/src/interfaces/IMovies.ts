import { IGenre } from './IGenre';

export interface IMovies {
	id?: string;
	name: string;
	image: string;
	genres?: IGenre[];
	plot: string;
}
