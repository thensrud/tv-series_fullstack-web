import { FC, useEffect, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';
import SeriesItem from './SeriesItem';

const SeriesList: FC = () => {
	const [series, setSeries] = useState<ISeries[]>();

	useEffect(() => {
		getAllSeries();
	}, []);

	const getAllSeries = async () => {
		const result = await seriesService.getAllSeries();
		setSeries(result);
	};

	const createSeriesList = () => {
		return series?.map((series: ISeries, key: number) => {
			return (
				<SeriesItem
					key={key}
					id={series.id}
					name={series.name}
					image={series.image}
				/>
			);
		});
	};

	return <section>{createSeriesList()}</section>;
};

export default SeriesList;
