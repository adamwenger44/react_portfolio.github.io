import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function navbar(props) {
    return (
        <div className="app">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1">Adam Wenger</span>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-1">
                    <p>About</p>
                </div>
                <div className="col-md-1">
                    <p>Portfolio</p>
                </div>
                <div className="col-md-1">
                    <p>Contact</p>
                </div>
                <div className="col-md-1"></div>
            </nav>

        </div>
    )
}
export default navbar