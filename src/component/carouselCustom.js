import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact"
import carousel from './carousel'

class carouselCustom extends Component {
  render() {
    return (
      <div>
        {/* <MDBContainer> */}
        <MDBCarousel
          activeItem={1}
          // length={3}
          // showControls={false}
          showIndicators={false}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100" style = {{width: '100%', height: '100%'}}
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" width='100%'
                  alt="First slide"

                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h4-responsive">selain menjual product kami juga memberikan kepuasan kepada customer kami dgn meng custom baju sesuai dgn keinginan. tidak hanya untuk perseorangan kami juga melayani untuk pembuatan sablon kaos gathering, sablon kaos promosi, sablon kaos untuk intansi, sblon kaos untuk komunitas.
                            oddi memiliki berbagai pengalam dalam melayani kebutuhan konsumen, baik instansi, paguyuban atau individu.
                            untuk informasi pemesanan bisa langsung hubungi kami.</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        {/* </MDBContainer> */}
      </div>
    )
  }
}

export default carouselCustom;