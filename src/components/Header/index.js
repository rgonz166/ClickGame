import React from "react";


function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Memory Game!
            </a>
            <h5>Score: {props.score}</h5>
            <h5>Hi-Score: {props.highscore}</h5>
        </nav>
    );
}

export default Header;