import React, { Fragment } from "react";
import "./Navbar.css";

export const Navbar = () => {
    return(
        <Fragment>
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">Section</a>
            <a href="#">Footer</a>
        </div>
        </Fragment>
    );
}