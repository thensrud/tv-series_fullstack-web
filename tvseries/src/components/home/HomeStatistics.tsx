import { FC, useContext } from 'react';
import { ActorsContext } from '../../contexts/ActorsContext';
import { SeriesContext } from '../../contexts/SeriesContext';
import { ActorsContextType } from '../../types/ActorsContextType';
import { SeriesContextType } from '../../types/SeriesContextType';

const HomeStatistics: FC = () => {
	const { actors } = useContext(ActorsContext) as ActorsContextType;
	const { series } = useContext(SeriesContext) as SeriesContextType;

	const nOfActors = actors.length;
	const nOfSeries = series.length;

	return (
		<>
			<p>
				Number of actors: {nOfActors} and number of series: {nOfSeries}
			</p>
		</>
	);
};

export default HomeStatistics;
