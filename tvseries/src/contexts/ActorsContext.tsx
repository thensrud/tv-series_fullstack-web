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

	const saveActor = (newActor: IActors) => {
		setActors([newActor, ...actors]);
	};

	const deleteActor = (id: string) => {
		actorsService.deleteActor(id);
	};

	const editActor = (id: any, editedActor: IActors) => {
		actorsService.editActor(id, editedActor);
	};

	return (
		<ActorsContext.Provider
			value={{
				actors,
				getActorsFromService,
				getActorsById,
				saveActor,
				deleteActor,
				editActor,
			}}
		>
			{children}
		</ActorsContext.Provider>
	);
};
