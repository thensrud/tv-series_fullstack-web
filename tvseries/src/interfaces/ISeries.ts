export interface ISeries {
	id?: string;
	name: string;
	image: string;
	genre: string;
	plot: string;
	seasons?: Seasons[];
}

type Seasons = {
	seasonNumber: string;
	episodes: string[];
};
