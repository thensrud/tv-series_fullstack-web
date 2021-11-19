import { ISeries } from '../interfaces/ISeries';

export type SeriesContextType = {
	series: ISeries[];
	getSeriesById: (id: string) => ISeries;
	getSeriesFromService: () => void;
	saveSeries: (newSeries: ISeries) => void;
	deleteSeries: (id: string) => void;
	editSeries: (id: any, editedSeries: ISeries) => void;
};
