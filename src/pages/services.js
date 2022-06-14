import React from "react";
import {Col, Row} from "react-bootstrap";

function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <h2>My services</h2>
                <Row>
                    <Col lg={4}>
                        <h6>Software Engineer</h6>
                        <p>As a software Engineer i design, analyze and modify new or existing software,
                            by constructing and testing this end user applications to meet the end user needs
                        </p>
                            <ul>
                                <li>Innovation Consulting & Digital Advisory.</li>
                                <li>Product Innovation & Concept Design.</li>
                                <li>Digital Platform Development.</li>
                                <li>Quality Assurance Services.</li>
                                <li>Product Deployment & Support.</li>
                            </ul>
                    </Col>
                    <Col lg={4}>
                        <h6>Front-end Engineer</h6>
                        <p>As a front-end engineer i builds websites, designs applications and ensures
                            overall user accessibility.</p>
                             <ul>
                                 <li>Optimizing the user experience.</li>
                                 <li>Using HTML, JavaScript and CSS and Frameworks to bring concepts to life.</li>
                                 <li>Developing and maintaining the user interface.</li>
                                 <li>implementing design on mobile websites.</li>
                                 <li>Managing software workflow.</li>
                             </ul>
                    </Col>
                    <Col lg={4}>
                        <h6>Back-end Engineer</h6>
                        <p>As a backend engineer my primary responsibility is to build the structure of a
                            software application.</p>
                        <ul>
                            <li>Optimizing servers for scalability, speed, and stability</li>
                            <li>Implementing security structures and its best practices</li>
                            <li>Generating reusable code libraries for future implementation</li>
                            <li>Generating data storage solutions</li>
                            <li>Implementing ongoing security systems</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );

}

export default Services;
