import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";

const NavBar = () => (
    <nav>
        <div>
            <Link className="logo-container" to="/">
                <img className="logo" src={logo} alt="Jim's Market Logo" />
            </Link>
        </div>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
            <span className="burger-icon"></span>
        </label>

        <ul className="nav-links">
            <li>
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/WeeklyAd">
                    Weekly Ad
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Recipes">
                    Recipes
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Coupons">
                    Coupons
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Register">
                    Register
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/Login">
                    Login
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
