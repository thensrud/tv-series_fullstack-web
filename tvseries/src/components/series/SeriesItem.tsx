import { FC } from 'react';
import { ISeries } from '../../interfaces/ISeries';

const SeriesItem: FC<ISeries> = ({ id, name, image }) => {
	return (
		<article>
			<h3>
				{name} ({id})
			</h3>
			<img src={`https://localhost:5001/images/${image}`} alt={name} />
		</article>
	);
};

export default SeriesItem;
