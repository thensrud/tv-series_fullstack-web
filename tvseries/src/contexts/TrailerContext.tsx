import { createContext, FC, useEffect, useState } from "react";
import { ITrailer } from "../interfaces/ITrailer";
import { TrailerContextType } from "../types/TrailerContextType";
import { trailerService } from "../services/trailerService";

export const TrailerContext = createContext<TrailerContextType | null>(null);
export const TrailerProvider: FC = ({ children }) => {
  const [trailer, setTrailer] = useState<ITrailer[]>([]);

  useEffect(() => {
    getTrailerFromService();
  }, []);

  const getTrailerFromService = async () => {
    try {
      const result = await trailerService.getTrailer();
      setTrailer(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getTrailerById = (id: string) => {
    return trailer.find((trailer) => trailer.id === id) as ITrailer;
  };
  return (
    <TrailerContext.Provider
      value={{ trailer, getTrailerFromService, getTrailerById }}
    >
      {children}
    </TrailerContext.Provider>
  );
};

export default TrailerContext;
