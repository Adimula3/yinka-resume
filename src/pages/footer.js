import React from "react";
function Footer() {
    return (
            <footer className="footer">
                <div className="container">
                    <h3>Olayinka Kolawole</h3>
                    <div className="socials">
                        <a href="https://" className="socials-link"><i className='bx bxl-twitter'></i></a>
                        <a href="https://www.linkedin.com/in/olayinka-kolawole-84189a188" className="socials-link"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://api.whatsapp.com/send/?phone=09064819280&text&app_absent=0" className="socials-link"><i className='bx bxl-whatsapp'></i></a>
                        <a href="https://github.com/Adimula3" className="socials-link"><i className='bx bxl-github'></i></a>
                    </div>
                </div>
                <p className="attribute">Illustration by <a href="https://icons8.com/illustrations/author/TQQ1qAnr9rn5">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
            </footer>
    );
}

export default Footer;
