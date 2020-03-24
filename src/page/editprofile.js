import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBInput, } from 'mdbreact';


class editprofile extends Component {
    render() {
        return (
            <div style={{ paddingTop: 60 }}>
                <MDBContainer style={{ paddingTop: '40px', backgroundColor:'red' }}>
                    <MDBRow>
                        <MDBCol>
                            <img class="card-img-top" src={require('../img/logobni.png')} alt='about' style={{ maxWidth: '20%' }} />
                        </MDBCol>
                        <MDBCol>
                            <MDBRow>
                            <MDBCol>
                            <MDBCardTitle >Nama<p>snaksfjna</p>
                            </MDBCardTitle>
                            </MDBCol>
                            <MDBCol>
                            <MDBCardTitle
                                label='ibnu'
                                type='text'/>
                                {/* // inputRef={(idproduct) => this.idproduct = idproduct} /> */}
                            </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default editprofile;