import { SeriesContextType } from '../types/SeriesContextType';
import { createContext, FC, useEffect, useState } from 'react';
import { ISeries } from '../interfaces/ISeries';
import { seriesService } from '../services/seriesService';

export const SeriesContext = createContext<SeriesContextType | null>(null);

export const SeriesProvider: FC = ({ children }) => {
  const [series, setSeries] = useState<ISeries[]>([]);

  useEffect(() => {
    getSeriesFromService();
  }, []);

  const getSeriesFromService = async () => {
    const result = await seriesService.getAllSeries();
    setSeries(result);
  };

  const getSeriesById = (id: string) => {
    return series.find((serie) => serie.id === id) as ISeries;
  };

  // Todo - saveSeries calls saveIt to avoid crash - this is probably not best practice

  const saveIt = (newSeries: ISeries) => {
    return [newSeries, ...series];
  };

  const saveSeries = (newSeries: ISeries) => {
    saveIt(newSeries);
  };

  const deleteSeries = (id: string) => {
    seriesService.deleteSeries(id);
  };

  return (
    <SeriesContext.Provider
      value={{ series, getSeriesById, saveSeries, deleteSeries }}
    >
      {children}
    </SeriesContext.Provider>
  );
};
