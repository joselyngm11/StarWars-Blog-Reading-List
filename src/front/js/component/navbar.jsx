import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../img/starWars.png"
import logo from "../../img/Star_Wars_Logo.png"
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 logo" src={logo}></img>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary">Favorites</button> */}
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
    				</Dropdown>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};
