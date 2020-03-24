import React, { Component } from "react";
import CarouselPage from '../component/carousel';
import { MDBIcon, MDBCol } from "mdbreact";
import CardPage from '../component/card';

class homePage extends Component {
    render() {
        return (
            <div>
                <CarouselPage></CarouselPage>
            <div style={{ margin: 'auto', backgroundColor: 'aquamarine', color:'black'}}>
                <p className='title text-center' style={{ fontSize: 25, paddingTop: 30 }}>
                    CUSTOM PAKAIAN SESUAI IMPIANMU
                </p>
                <div class="d-flex justify-content-around m-5">
                    <div style={{ maxWidth: '30%' }}>
                        <MDBCol className='title text-center'>
                            <MDBIcon icon="wrench" style={{ fontSize: '400%' }} />
                            <p style={{ paddingTop: '20px' }}>
                                JAMINAN KUALITAS PRODUK
                    </p>
                        </MDBCol>
                    </div>

                    <div style={{ maxWidth: '30%' }}>
                        <MDBCol className='title text-center' >
                            <MDBIcon icon="clock" style={{ fontSize: '400%' }} />
                            <p style={{ paddingTop: '20px' }}>
                                JAMINAN PENGERJAAN TEPAT WAKTU
                    </p>
                        </MDBCol>
                    </div>
                    <div style={{ maxWidth: '30%' }}>
                        <MDBCol className='title text-center' >
                            <MDBIcon icon="paper-plane" style={{ fontSize: '400%' }} />
                            <p style={{ paddingTop: '20px' }}>
                                JAMINAN PENGIRIMAN TEPAT WAKTU
                    </p>
                        </MDBCol>
                    </div>
                    <div style={{ maxWidth: '30%' }}>
                        <MDBCol className='title text-center' >
                            <MDBIcon icon="money-bill-alt" style={{ fontSize: '400%' }} />
                            <p style={{ paddingTop: '20px' }}>
                                JAMINAN UANG KEMBALI
                    </p>
                        </MDBCol>>
                    </div>
                </div>
            </div>
            <div>
                    <CardPage></CardPage>
                    </div>
        </div>
        )
    }
}

export default homePage;