import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return (
            <footer className="footer">
                <div className="container">
                    <h3>Olayinka Kolawole</h3>
                    <div className="socials">
                        <a href="#" className="socials-link"><i className='bx bxl-twitter'></i></a>
                        <a href="#" className="socials-link"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="socials-link"><i className='bx bxl-linkedin'></i></a>
                        <a href="#" className="socials-link"><i className='bx bxl-meta'></i></a>
                        <a href="#" className="socials-link"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
