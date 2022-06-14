import React from "react";
import {Col, Form, Row} from "react-bootstrap";

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div>
                    <Row>
                        <Col lg={6}>
                            <p className="contact-message">Interested to work together?<br/> Let's talk</p>
                           <Form>
                               <Row>
                                   <Col md={6}>
                                       <div className="form-group">
                                           <input className="form-control" type="text" placeholder="Your Name"/>
                                       </div>
                                   </Col>
                                   <Col md={6}>
                                       <div className="form-group">
                                           <input className="form-control" type="email" placeholder="Your Email"/>
                                       </div>
                                   </Col>
                               </Row>
                               <div className="form-group">
                                   <input className="form-control" type="text" placeholder="Subject"/>
                               </div>
                               <div className="form-group">
                                   <textarea name="" id="" className="form-control" cols="30" rows="5"  placeholder="Message"></textarea>
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
