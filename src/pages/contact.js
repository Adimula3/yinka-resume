import React from "react";
import {Col, Form, Row} from "react-bootstrap";

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contact</h2>
                <div>
                    <div className="d-flex">
                        <div className="message1">
                            <p className="contact-message">Interested to work together?<br/> Let's talk</p>
                        </div>
                        <div className="message2">
                            <p className="contact-message2">If you like my work and want to avail my services then drop<br/> me a message using the
                                contact form.
                            </p>
                            <p className="contact-message2">Or get in touch using my email or my contact number.</p>
                            <p className="contact-message2">See you!</p>
                        </div>

                    </div>

                    <Row>
                        <Col lg={6}>
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
                            <div className="contact-details">
                                <h7>Address</h7>
                                <p>19 Oguntona Street,Ijaiye Ojokoro, Lagos, Nigeria</p>
                                <h7>Phone</h7>
                                <p>+234 9064 8192 80</p>
                                <h7>Email</h7>
                                <p>kolawoleolayinka16@gmail.com.com</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Contact;
