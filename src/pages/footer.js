import React from "react";
function Footer() {
    return (
            <footer className="footer">
                <div className="container">
                    <h3>Olayinka Kolawole</h3>
                    <div className="socials">
                        <a href="https://" className="socials-link"><i className='bx bxl-twitter'></i></a>
                        <a href="https://" className="socials-link"><i className='bx bxl-facebook'></i></a>
                        <a href="https://" className="socials-link"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://" className="socials-link"><i className='bx bxl-meta'></i></a>
                        <a href="https://" className="socials-link"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <p className="attribute">Illustration by <a href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
            </footer>
    );
}

export default Footer;
