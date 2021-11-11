import { FC, useEffect, useState } from 'react';
import { seriesService } from '../../services/seriesService';
import { ISeries } from '../../interfaces/ISeries';
import SeriesItem from './SeriesItem';
import { Col, Row } from 'react-bootstrap';

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
				<Col className="pt-4" md={6} lg={4} xl={3} key={key}>
					<SeriesItem
						key={key}
						id={series.id}
						name={series.name}
						image={series.image}
						genre={series.genre}
						plot={series.plot}
					/>
				</Col>
			);
		});
	};

	return <Row>{createSeriesList()}</Row>;
};

export default SeriesList;
