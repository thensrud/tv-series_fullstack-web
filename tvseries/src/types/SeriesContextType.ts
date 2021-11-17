import { ISeries } from "../interfaces/ISeries";

export type SeriesContextType = {
  series: ISeries[];
  getSeriesById: (id: string) => ISeries;
  saveSeries: (newSeries: ISeries) => void;
  deleteSeries: (id: string) => void;
};
