import { ActorsContextType } from "../types/ActorsContextType";
import { createContext, FC, useEffect, useState } from "react";
import { IActors } from "../interfaces/IActors";
import { actorsService } from "../services/actorsService";

export const ActorsContext = createContext<ActorsContextType | null>(null);

export const ActorsProvider: FC = ({ children }) => {
  const [actors, setActors] = useState<IActors[]>([]);

  useEffect(() => {
    getActorsFromService();
  }, []);

  const getActorsFromService = async () => {
    const result = await actorsService.getAllActors();
    setActors(result);
  };

  const getActorsById = (id: string) => {
    return actors.find((actor) => actor.id === id) as IActors;
  };

  const saveActor = (newActor: IActors) => {
    setActors([newActor, ...actors]);
  };

  // Added, idk if it works
  const deleteActor = (id: string) => {
    const removableActor = actors.find((actor) => actor.id === id);
    actorsService.deleteActor(removableActor);
  };

  return (
    <ActorsContext.Provider
      value={{ actors, getActorsById, saveActor, deleteActor }}
    >
      {children}
    </ActorsContext.Provider>
  );
};
