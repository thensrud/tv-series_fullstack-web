import { ActorsContextType } from '../types/ActorsContextType';
import { createContext, FC, useEffect, useState } from 'react';
import { IActors } from '../interfaces/IActors';
import { actorsService } from '../services/actorsService';

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

  // Todo - saveActor calls saveIt to avoid posting an actors details that are undefined - this is probably not best practice
  const saveIt = (newActors: IActors) => {
    return [newActors, ...actors];
  };

  const saveActor = (newActor: IActors) => {
    saveIt(newActor);
  };

  const deleteActor = (id: string) => {
    actorsService.deleteActor(id);
  };

  return (
    <ActorsContext.Provider
      value={{ actors, getActorsById, saveActor, deleteActor }}
    >
      {children}
    </ActorsContext.Provider>
  );
};
