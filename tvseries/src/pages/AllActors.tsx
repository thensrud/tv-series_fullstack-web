import { FC } from 'react';
import ActorList from '../components/actors/ActorList';

const AllActors: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">All Actors</h3>
			<ActorList />
		</section>
	);
};

export default AllActors;
