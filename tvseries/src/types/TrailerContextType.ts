import { ITrailer } from "../interfaces/ITrailer";

export type TrailerContextType = {
  trailer: ITrailer[];
  getTrailerById: (id: string) => ITrailer;
  getTrailerFromService: () => void;
};
