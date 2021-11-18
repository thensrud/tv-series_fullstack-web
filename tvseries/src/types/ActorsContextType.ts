import { IActors } from '../interfaces/IActors';

export type ActorsContextType = {
	actors: IActors[];
	getActorsById: (id: string) => IActors;
	getActorsFromService: () => void;
	deleteActor: (id: string) => void;
};
