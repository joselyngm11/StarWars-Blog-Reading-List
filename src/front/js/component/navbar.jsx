import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../img/starWars.png"
import logo from "../../img/Star_Wars_Logo.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/">
					<img className="navbar-brand mb-0 h1 logo" src={logo}></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
