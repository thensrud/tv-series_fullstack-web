import { ISeries } from '../interfaces/ISeries';

export type SeriesContextType = {
	series: ISeries[];
	getSeriesById: (id: string) => ISeries;
	getSeriesFromService: () => void;
	deleteSeries: (id: string) => void;
};
