import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div >
                Home
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        Services
                    </li>
                    <li>
                        SignIn
                    </li>
                    <li>
                        <Link to="/Signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
