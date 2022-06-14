import React from "react";
import '../styles/style.css';
import TypeAnimation from 'react-type-animation';
import {Col, Row} from "react-bootstrap";
import WorkSpace from  "../assets/marginalia-programming.gif"

function Header() {

    return (
        <>
        <header>
            <div className="top-nav">
                <nav className="navbar" id="navbar">
                    <ul>
                        <li className="list-header"><a href="/">Kolawole Olayinka </a></li>
                        <li><a className="link" href="/">Home</a></li>
                        <li><a className="link" href="#works">Works</a></li>
                        <li><a className="link" href="#about">About</a></li>
                        <li><a className="link" href="#services">Services</a></li>
                        <li><a className="link" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <a href="" className="icon" onClick="">
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </header>

        <div className="hero">
            <div className='container'>
               <Row>
                   <Col md={7}>
                       <div className="hire-details">
                           <h6>welcome to my website!</h6>
                               <h2>Hey I'm Olayinka Kolawole a <br/> <TypeAnimation
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
                                   className="type-animation"
                                   repeat={3}
                               /> </h2>
                           <p>A software engineer and a front-end developer always ready to help build
                               web-applications for business and personal use with a diverse
                               range of skills in React, Node, Bootstrap, PHP.</p>

                           <div className="my-button">
                               <a href="../assets/Resume-Olayinka-Kolawole.pdf"
                                  download
                                  className="btn btn-md btn-primary"><i className="far fa-file-alt"></i> Download Resume</a>
                           </div>
                       </div>
                   </Col>
                   <Col md={5}>
                       <div className="hero-image">
                           <img src={WorkSpace} alt="" className="img-fluid"/>
                       </div>
                   </Col>
               </Row>
            </div>
        </div>
    </>

    );
}
export default Header;
