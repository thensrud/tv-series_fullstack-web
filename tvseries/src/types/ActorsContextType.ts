import { IActors } from "../interfaces/IActors";

export type ActorsContextType = {
  actors: IActors[];
  getActorsById: (id: string) => IActors;
  saveActor: (newActor: IActors) => void;
  deleteActor: (id: string) => void;
};
