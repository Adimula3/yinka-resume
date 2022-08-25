import React from "react";
import {Carousel} from "react-bootstrap";
import SlideImageOne from "../assets/image-slide-one.png"
import SlideImageTwo from "../assets/screenshot3.png"
import SlideImageFour from "../assets/ScreenShot8.png"

function Works() {
    return (
        <div className="works" id="works">
            <div className="work-text">
                <h2>Things I have built for clients and<br/>business owners</h2>
            </div>
            <div className="carousel-box">
                <Carousel className="carousel" variant="dark" >
                    <Carousel.Item className="carousel-item">
                        <a href="worksSinglePage.js" className="image-item"> <img
                            className="d-block w-100"
                            src={SlideImageOne}
                            alt="First slide"
                        /> </a>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SlideImageTwo}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SlideImageOne}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={SlideImageFour}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
}

export default Works;
