import React, { Component } from "react";
import { Container } from 'reactstrap'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCard, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBBtn, MDBIcon, MDBGallery, MDBGalleryList } from 'mdbreact'
import CarouselCustom from '../component/carouselCustom'

class customPage extends Component {
    state = {
        dataImg: [
            {
                img:
                    'http://www.hygmatic.com/uploads/article/2017/05/article26.jpg',
                cols: 1,
                title: 'image',
            },
            {
                img:
                    'https://blog.porinto.com/wp-content/uploads/2019/07/perbedaan-sablon-manual-dan-digital.jpg',
                cols: 2,
                title: 'image',
            },
            {
                img:
                    'https://media.karousell.com/media/photos/products/2018/03/26/jasa_sablon_manual_profesional_1522064507_424a5e63.jpg',
                cols: 1,
                title: 'image',
            },
            {
                img:
                    'https://www.mypoly.co.id/wp-content/uploads/2019/04/sablon-manual-1.jpg',
                cols: 2,
                title: 'image',
            },
            {
                img:
                    'https://rovingandalan.com/wp-content/uploads/2018/09/WhatsApp-Image-2018-05-17-at-4.27.33-PM-1024x576.jpeg',
                cols: 2,
                title: 'image',
            },

            {
                img:
                    'https://www.100mobpsycho.com/wp-content/uploads/2019/02/31515915218_906b76d5cb_z.jpg',
                cols: 1,
                title: 'image',
            },
            {
                img:
                    'https://awesam.id/wp-content/uploads/2019/10/SABLON-MANUAL-AWESAM-2-800x450.jpg',
                cols: 2,
                title: 'image',
            },
            {
                img:
                    'https://i.pinimg.com/originals/fa/66/de/fa66de9912c7e0c5e1c52fd438aecd29.jpg',
                cols: 1,
                title: 'image',
            }
        ],
        modal14: false
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <div>
                <MDBContainer className="d-flex flex-wrap" style={{ paddingTop: 50 }}>
                    <MDBCard className="card-image" style={{
                        backgroundImage:
                            "url(http://www.hygmatic.com/uploads/article/2017/05/article26.jpg)"

                    }}>
                        <div style={{ height: 500 }} className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                            <div>
                                <h3 className="py-3 font-weight-bold">
                                    <strong>SABLON MANUAL</strong>
                                </h3>
                                <p className="pb-10" style={{ fontSize: 20 }}>
                                    Selain menjual product oddi juga menawarkan jasa sablon manual kaos dengan kualitas bahan terbaik dan harga termurah untuk customer kami. baik unutuk satuan ataupun lusinan, yang melayani khususnya unutk family gathering, partai, paguyuban. unutk informasi lebih lengkap bisa langsung hubungi kami.
              </p>

                                <MDBBtn color="teal accent-2" onClick={this.toggle(14)}>
                                    <MDBIcon icon='phone' style={{width: '120px'}}/> 
                                </MDBBtn>
                                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                                    <MDBModalHeader toggle={this.toggle(14)}> </MDBModalHeader>
                                    <MDBModalBody style={{ color: 'black' }}>
                                        <h2>082299327664</h2>
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="teal accent-2" onClick={this.toggle(14)}>Close</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModal>
                            </div>
                        </div>
                    </MDBCard>

                    <MDBGallery
                        className='scrollbar'
                        cols={4}
                        style={{ width: '1120px', height: '500px', paddingTop: 5 }}
                    >
                        {this.state.dataImg.map(({ cols, img, title }, i) => {
                            return (
                                <MDBGalleryList
                                    key={i}
                                    cols={cols || 1}
                                    titleClasses='rounded'
                                    styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)', }}
                                >
                                    <img src={img} alt={title} />
                                </MDBGalleryList>
                            );
                        })}
                    </MDBGallery>
                </MDBContainer>
            </div>
        )
    }
}

export default customPage;