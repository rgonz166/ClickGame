import React from "react";
import "./style.css";


function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Memory Game!
            </a>
            <h5 className="score">Score: {props.score}</h5>
            <h5 className="high-score">Hi-Score: {props.highscore}</h5>
        </nav>
    );
}

export default Header;