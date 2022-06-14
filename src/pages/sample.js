import React from "react";

function Sample() {
    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <p>Kolawole Olayinka</p>
                    <div className="nav-item">
                        <ul>
                            <li><a className="active" href="/">Home</a></li>
                            <li><a className="link" href="#">Projects</a></li>
                            <li><a className="link" href="#">About</a></li>
                            <li><a className="link" href="#">Services</a></li>
                            <li><a className="link" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <p>welcome to my site</p>
            </div>
        </header>
    );
}

export default Sample;
