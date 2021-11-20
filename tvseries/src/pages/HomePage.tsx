import { FC } from 'react';
import HomeStatistics from '../components/home/HomeStatistics';

const HomePage: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Home</h3>
			<HomeStatistics />
		</section>
	);
};

export default HomePage;
