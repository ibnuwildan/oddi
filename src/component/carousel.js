import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";

class carousel extends Component {
    render() {
        return (
            <div>
                {/* <MDBContainer> */}
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img
                                        className="d-block w-100" style = {{width: '100%', height: '100%'}}
                                        src={require('../img/banner1.jpeg')} 
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100" style = {{height: 'auto'}}
                                        src={require('../img/carousel2.JPG')}  width ='100%' 
                                        alt="Second slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100" style = {{height: 'auto'}}
                                        src={require('../img/carousel1.jpeg')}  width ='100%'
                                        alt="Third slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                {/* </MDBContainer> */}
            </div>
        )
    }
}

export default carousel;