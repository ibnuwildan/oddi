import React, { Component } from "react";
import { MDBIcon,MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCard, MDBInput } from "mdbreact";
import Axios from 'axios'


class detailProduk extends Component {
    state = {
        product: [],
        size: '',
        totalharga: 0
    }

    componentDidMount() {
        let idproduct = this.props.location.search.split('=')[1]
        Axios.get(`http://localhost:2020/product/getAllProductId?id=${idproduct}`)
            .then((res) => { //apa yg dilakukan di data yg benar
                console.log(res.data)
                this.setState({ product: res.data[0] })
                console.log()
            })
            .catch((err) => {
                // apa yg dilakukan pd data yg salah
                console.log(err)
            })
    }

    getDetailProduct = () => {
        // const { product } = this.state
        // return (
        //     <div>
        //         {product.price}
        //     </div>
        // )
    }

    addTocard = () => {
        let idproduct = parseInt(this.props.location.search.split('=')[1]);
        let jmlh = parseInt(this.jumlh.value);
        let size = this.state.size;
        let price = parseInt(jmlh * this.state.product.price);
        console.log(price, this.state.totalharga, size, jmlh, idproduct)
        let data = {
            idproduct,
            jmlh,
            size,
            price
        }
        this.setState({ totalharga: price })
        const token = localStorage.getItem('token')
        if (token) {
            console.log('Action2', token)
            const header = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            if (idproduct && jmlh && size && price)
                Axios.post('http://localhost:2020/cart/AddToCard', data, header)
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
        }else{
            alert('ii=si')
        }

    }


    render() {
        // console.log(this.state.product.nama_product)
        const { product } = this.state
        return (
            <div>
                <MDBContainer className="mt-5 text-center" >
                    <MDBJumbotron className="p-0">
                        <MDBRow>
                            <MDBCol size="6">
                                {/* <MDBContainer> */}
                                <div class="view hm-zoom">
                                <MDBCardImage
                                    className="img-fluid"
                                    style={{ width: '100%' }}
                                    src={`http://localhost:2020${product.gambar}`}
                                />
                                <div class="mask flex-center">
                            </div>
                                </div>
                                {/* </MDBContainer> */}
                            </MDBCol>
                            <MDBCol size="6">

                                <MDBCardTitle className="h1" style={{ paddingTop: '25px' }}>{product.nama_product}</MDBCardTitle>
                                <MDBCardText className=' h6 text-left' style={{fontSize: 30}}>IDR {product.price}</MDBCardText>
                                <MDBCardText className=' h6 text-left' >Description {product.description_product}</MDBCardText>
                                <MDBCardText className='h6 text-left ' >Size {product.size}</MDBCardText>
                                <MDBBtn onClick={() => this.setState({ size: 'S' })}>S</MDBBtn>
                                <MDBBtn onClick={() => this.setState({ size: 'M' })}>M</MDBBtn>
                                <MDBBtn onClick={() => this.setState({ size: 'L' })}>L</MDBBtn>
                                <MDBBtn onClick={() => this.setState({ size: 'XL' })}>XL</MDBBtn>
                                <MDBCardText className='h6 text-left'>KUANTITAS</MDBCardText>
                                <MDBInput type='number' min="1" style={{ width: '20%' }} inputRef={(jumlh) => this.jumlh = jumlh} />
                                <MDBCardTitle className='h3 text-left'>IDR {this.state.totalharga}</MDBCardTitle>
                                <MDBBtn type="button" class="btn btn-default btn-lg" href='/cartPage' onClick={this.addTocard}><MDBIcon icon="shopping-cart" className="left" />  Masuk Keranjang Belanja </MDBBtn>
                                <MDBBtn type="button" class="btn btn-default btn-lg"  onClick={this.addTocard} href='cartrecive' >
                                Beli Sekarang </MDBBtn>
                                

                            </MDBCol>
                        </MDBRow>
                    </MDBJumbotron>
                </MDBContainer>
            </div>
        )
    }
}

export default detailProduk;