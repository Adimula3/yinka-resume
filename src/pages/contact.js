import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        await emailjs.sendForm('service_s9rc9x3', 'template_tm5gx6y', form.current, 'L6igJwwpaUaTzzg9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log(e.target.value);
        console.log('i got here');

        e.target.reset()
    };
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <div>
                    <Row>
                        <Col lg={6}>
                            <p className="contact-message">Interested to work together?<br/> Let's talk</p>
                           <Form ref={form} onSubmit={sendEmail}>
                               <Row>
                                   <Col md={6}>
                                       <div className="form-group">
                                           <input className="form-control" type="text" placeholder="Your Name" name="name"/>
                                       </div>
                                   </Col>
                                   <Col md={6}>
                                       <div className="form-group">
                                           <input className="form-control" type="email" placeholder="Your Email" name="email"/>
                                       </div>
                                   </Col>
                               </Row>
                               <div className="form-group">
                                   <input className="form-control" type="text" placeholder="Subject" name="subject"/>
                               </div>
                               <div className="form-group">
                                   <textarea  className="form-control" cols="30" rows="5"  placeholder="Message" name="message"></textarea>
                               </div>
                               <div className="button-center">
                                   <button type="submit" className="button">Submit</button>
                               </div>

                           </Form>
                        </Col>
                        <Col lg={6}>
                            <div className="contact-two">
                                <div className="message">
                                    <p>If you like my work and want to avail my services then drop<br/> me a message using the
                                        contact form.
                                    </p>
                                    <p>Or get in touch using my email or my contact number.</p>
                                    <p> See you!</p>
                                </div>

                                <div className="contact-details">
                                    <h6>Address</h6>
                                    <p>19 Oguntona Street,Ijaiye Ojokoro, Lagos, Nigeria</p>
                                    <h6>Phone</h6>
                                    <p>+234 9064 8192 80</p>
                                    <h6>Email</h6>
                                    <p>kolawoleolayinka16@gmail.com.com</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Contact;
