import React from "react";
import {Col, Row} from "react-bootstrap";


function About() {
    return (
        <section className="about">
            <div className='container'>
                <div>
                    <Row>
                        <Col md={6}>
                            <h2>About me</h2>
                            <div>
                                <p>I’m from Nigeria I have  a bachelor of science degree in computer science from Kwara State University malete,
                                    finished with a second-class Lower with a cgpa of 2.5 out of 4.0 </p>
                                <p> I worked as an intern at Aptech nigeria and was able to learn and experience web development firsthand with he use of the latest programming language and frameworks such as HTML CSS JAVASCRIPT PHP REACT along with node</p>
                                <p>For my NYSC internship I worked at Grimaldi agency apapa my description there was to be a software tester
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={require('../assets/IMG_1112.JPG')} alt='profile' className="image"/>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default About;
