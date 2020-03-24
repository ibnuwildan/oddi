import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import Axios from "axios";
import { Container } from "reactstrap";

class cardPage extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        Axios.get(`http://localhost:2020/product/getAllProduct`)
            .then((res) => {
                this.setState({ product: res.data })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getProduct = () => {
        return this.state.product.map((item, index) => {
            return (
                // <div >
                <MDBCol style={{ paddingTop: 30 }}>

                    <MDBCard style={{ width: "20rem" }}>
                        <div class="view hm-zoom">
                            <MDBCardImage className="img-fluid view hm-zoom" src={`http://localhost:2020${item.gambar}`} waves />
                            <div class="mask flex-center">
                            </div>
                        </div>
                        <MDBCardBody>
                            <MDBCardTitle>{item.nama_product}</MDBCardTitle>

                            {/* <MDBCardText>
                                {item.description_product}
                            </MDBCardText> */}
                            <MDBCardTitle>IDR {item.price}</MDBCardTitle>
                            <MDBBtn style={{ width: '100%' }} href={`/detailProduk?id=${item.idproduct}`}>chek</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                // </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Container style={{ paddingTop: '30px' }}>
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>

                                {this.getProduct()}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </Container>
            </div>
        )
    }
}

export default cardPage;