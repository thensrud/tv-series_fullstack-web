import { IActors } from "../interfaces/IActors";

export type ActorsContextType = {
  actors: IActors[];
  getActorsById: (id: string) => IActors;
  saveActor: (newActor: IActors) => void;
  // Added, idk if it works
  deleteActor: (id: string) => void;
};
