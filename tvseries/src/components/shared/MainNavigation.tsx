import { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MainNavigation: FC = () => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="/">Series Database</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="all-series">All series</Nav.Link>
						<Nav.Link href="create-series">Add new series</Nav.Link>
						<Nav.Link href="all-actors">All actors</Nav.Link>
						<Nav.Link href="create-actor">Add new actor</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MainNavigation;
