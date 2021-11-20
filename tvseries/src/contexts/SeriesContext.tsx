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
    try {
      const result = await seriesService.getAllSeries();
      setSeries(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getSeriesById = (id: string) => {
    return series.find((serie) => serie.id === id) as ISeries;
  };

  const saveSeries = (newSeries: ISeries) => {
    setSeries([newSeries, ...series]);
  };

  const deleteSeries = (id: string) => {
    seriesService.deleteSeries(id);
  };

  const editSeries = (id: any, editedSeries: ISeries) => {
    seriesService.editSeries(id, editedSeries);
  };

  return (
    <SeriesContext.Provider
      value={{
        series,
        getSeriesFromService,
        getSeriesById,
        saveSeries,
        deleteSeries,
        editSeries,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};
