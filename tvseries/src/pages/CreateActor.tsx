import { FC } from 'react';
import CreateActorForm from '../components/actors/CreateActorForm';

const CreateActor: FC = () => {
	return (
		<section>
			<h3>Save new actor</h3>
			<CreateActorForm />
		</section>
	);
};

export default CreateActor;
