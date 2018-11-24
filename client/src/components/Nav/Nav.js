import React from "react";
import "./Nav.css"


const Nav = () => (
    <div>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper z-depth-4 grey darken-3">
                    <a href="/" className="brand-logo">Book Search</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/saved">Saved Books</a></li>
                    </ul>
                </div>
            </nav>
        </div>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            <li><a href="/saved">Saved Books</a></li>
        </ul>
    </div> 
)

export default Nav;