import { IEpisode } from './IEpisode';
import { IGenre } from './IGenre';
export interface ISeries {
	id?: string;
	name: string;
	image?: string;
	genres?: IGenre[];
	plot: string;
	episodes?: IEpisode[];
}
