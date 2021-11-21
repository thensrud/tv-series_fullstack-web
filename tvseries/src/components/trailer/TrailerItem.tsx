import { FC } from 'react';
import { ITrailer } from '../../interfaces/ITrailer';
import ReactPlayer from 'react-player';

const TrailerItem: FC<ITrailer> = ({ id, link }) => {
	return (
		<div className="mt-4">
			<ReactPlayer url={link} />
		</div>
	);
};

export default TrailerItem;
