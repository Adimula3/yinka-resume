import React from "react";
import {Carousel} from "react-bootstrap";

function Works() {
    return (
        <div className="works">
            <div className="work-text">
                <h2>Things I have built for clients and<br/>business owners</h2>
            </div>
            <Carousel className="carousel" variant="dark" >
                <Carousel.Item className="carousel-item">
                    <a href="worksSinglePage.js"> <img
                        className="d-block w-100"
                        src={require('../assets/Screen Shot 2022-06-12 at 4.08.25 PM.png')}
                        alt="First slide"
                    /> </a>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/Screen Shot 2022-06-12 at 4.08.25 PM.png')}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/Screen Shot 2022-06-12 at 4.08.25 PM.png')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Works;
