import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function WorksSinglePage() {
    return (
        <div className="container">
            <div className="breadcrumbs">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Works</h2>
                    <ul className="d-flex">
                        <li><a href="#" className="change" >Home</a></li>
                    </ul>
                </div>
            </div>

            <div className="work-page">
                <Row>
                    <Col lg="8">
                        <h1>ADORNBYOMA</h1>
                        <img src={require('../assets/Screen Shot 2022-06-12 at 4.08.25 PM.png')} height='700' width='850' className="image3"/>
                    </Col>
                    <Col lg="4">
                        <div className="content2">
                            <h4>E-Commerce</h4>
                            <p>Front-end Design</p>
                            <p>I designed, developed and maintain the user interface.
                                Along with the implementation on all type of devices e.g mobile,tablets.</p>
                            <p>What i developed with</p>
                            <ul>
                                <li>Bootstrap</li>
                                <li>HTML5/CSS3</li>
                                <li>React js</li>
                            </ul>
                            <div className="button-center">
                                <button type="submit" className="button">Download cv</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default WorksSinglePage;
