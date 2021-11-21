import { FC } from 'react';
import HomeStatistics from '../components/home/HomeStatistics';
import HomeWelcome from '../components/home/HomeWelcome';

const HomePage: FC = () => {
	return (
		<section className="section">
			<h3 className="page-title mb-2">Home</h3>
			<HomeStatistics />
			<HomeWelcome />
		</section>
	);
};

export default HomePage;
