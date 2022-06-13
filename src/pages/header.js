import React from "react";
import '../styles/style.css';
import TypeAnimation from 'react-type-animation';

function Header() {
    return (
        <header>
            <div className='container'>
                <div className="resume-details">
                    <h3 className="text1">My portfolio.</h3>
                    <div className="hire-details">
                        <h4 className="text2">Hire Me</h4>
                        <p className='text3'>a software engineer and a front-end developer always ready to help
                            <br/> build web-applications for business and personal use with a diverse
                            <br/>range of skills in React,Node,Bootstrap,Php.<br/>
                            myemail@gmail.com</p>
                    </div>
                </div>
                <div className="nav-content">
                    <div className="inner-content">
                        <h2>Hey I'm Olayinka Kolawole</h2>
                        <p> a <TypeAnimation
                                cursor={false}
                                sequence={[
                                    'Freelance Developer',
                                    3000,
                                    'Software-Engineer',
                                    3000,
                                    'Frontend-Engineer',
                                    3000
                                ]}
                                wrapper="span"
                                repeat={3}
                            />
                        </p>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><a className="active" href="/">Home</a></li>
                            <li><a className="link" href="#works">Works</a></li>
                            <li><a className="link" href="#about">About</a></li>
                            <li><a className="link" href="#services">Services</a></li>
                            <li><a className="link" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>

    );
}
export default Header;
