import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [data, setData] = useState();

    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">Journify</Link>
                </div>
                <ul className="navbar-buttons">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );    
}

export default Navbar;