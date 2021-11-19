import { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavigation: FC = () => {
	return (
		<Navbar className="px-4" bg="dark" expand="lg" variant="dark">
			<Navbar.Brand as={Link} to="/">
				Series Database
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="all-series">
						All series
					</Nav.Link>
					<Nav.Link as={Link} to="create-series">
						Add new series
					</Nav.Link>
					<Nav.Link as={Link} to="all-actors">
						All actors
					</Nav.Link>
					<Nav.Link as={Link} to="create-actor">
						Add new actor
					</Nav.Link>
					<Nav.Link as={Link} to="all-movies">
						All movies
					</Nav.Link>
					<Nav.Link as={Link} to="create-movies">
						Add new movie
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MainNavigation;
