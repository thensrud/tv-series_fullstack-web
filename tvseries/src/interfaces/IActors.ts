import { IInSeries } from './IInSeries';
export interface IActors {
	id?: string;
	name: string;
	image: string;
	age: number;
	country: string;
	inSeries?: IInSeries[];
}
