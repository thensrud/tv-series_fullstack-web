import { FC } from 'react';
import EditActor from '../components/actors/EditActor';

const EditActorPage: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Edit Actor Info</h3>
			<EditActor />
		</section>
	);
};

export default EditActorPage;
