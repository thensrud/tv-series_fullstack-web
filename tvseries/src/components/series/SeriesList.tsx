import { FC, useContext, useEffect } from 'react';
import { ISeries } from '../../interfaces/ISeries';
import SeriesItem from './SeriesItem';
import { Col, Row } from 'react-bootstrap';
import { SeriesContext } from '../../contexts/SeriesContext';
import { SeriesContextType } from '../../types/SeriesContextType';

const SeriesList: FC = () => {
	const { series, getSeriesFromService } = useContext(
		SeriesContext
	) as SeriesContextType;

	useEffect(() => {
		getSeriesFromService();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [series]);

	const createSeriesList = () => {
		return series?.map((serie: ISeries, key: number) => {
			return (
				<Col className="pt-4" sm={6} md={4} lg={3} xl={2} key={key}>
					<SeriesItem
						key={key}
						id={serie.id}
						name={serie.name}
						image={serie.image}
						genres={serie.genres}
						plot={serie.plot}
					/>
				</Col>
			);
		});
	};

	return <Row>{createSeriesList()}</Row>;
};

export default SeriesList;
