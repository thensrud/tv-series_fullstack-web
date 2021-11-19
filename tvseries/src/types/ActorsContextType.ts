import { IActors } from '../interfaces/IActors';

export type ActorsContextType = {
	actors: IActors[];
	getActorsById: (id: string) => IActors;
	getActorsFromService: () => void;
	saveActor: (newActor: IActors) => void;
	deleteActor: (id: string) => void;
	editActor: (id: any, editedActor: IActors) => void;
};
