import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">StarWars Blog</Link>
                <Link to="/favorites" className="btn btn-warning">Favorites</Link>
            </div>
        </nav>
	);
};
