import { IActors } from '../interfaces/IActors';

export type ActorsContextType = {
  actors: IActors[];
  getActorsById: (id: string) => IActors;
};
