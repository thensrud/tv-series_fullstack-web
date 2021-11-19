import { IInSeries } from './IInSeries';
export interface IActors {
	id?: string;
	name: string;
	image?: string;
	age: string;
	country: string;
	inSeries?: IInSeries[];
}
