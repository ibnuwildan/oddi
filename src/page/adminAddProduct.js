import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';
import { Container, Button, Input } from "reactstrap";
import Axios from "axios";

class adminAddProduct extends Component {
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
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.nama_product}</td>
                    <img src={item.gambar} style={{ width: '200px', class: "center" }} />
                    <td>{item.description_product}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
    }
    onBtnAddProduct = () => {
        let nama_product = this.nama_product.value;
        let gambar = this.gambar.value;
        let description_product = this.description_product.value;
        let price = this.price.value;
        let data = {
            nama_product,
            gambar,
            description_product,
            price
        }
        if(nama_product && gambar && description_product && price){
            Axios.post('http://localhost:2020/product/AddProduct', data)
            .then((res)=>{
                console.log(res.data)
                Axios.get('http://localhost:2020/product/getAllProduct')
                .then((res)=>{
                    console.log(res.data)
                    this.setState({data: res.data})
                    this.componentDidMount()
                    alert('sukses!!')
                })
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            alert('Please Fill in All the forms')
        }
    }

    render() {
        return (
            <Container style={{ paddingTop: '40px' }}>
                <MDBTable>
                    <MDBTableHead color="teal accent-2" textBlack>
                        <tr>
                            <th>idproduct</th>
                            <th>nama_product</th>
                            <th>gambar</th>
                            <th>description_product</th>
                            <th>price</th>
                            <th>Action</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.getProduct()}
                    </MDBTableBody>
                    <MDBTableBody>
                        <th>
                            <MDBInput 
                            label='idproduct'
                            type='text'
                            inputRef={(idproduct) => this.idproduct = idproduct} />
                        </th>
                        <th>
                            <MDBInput
                            label='nama_product' 
                            type='text'
                            inputRef={(nama_product) => this.nama_product = nama_product} />
                        </th>
                        <th>
                            <MDBInput 
                            label='gambar'
                            type='text'
                            inputRef={(gambar) => this.gambar = gambar} />
                        </th>
                        <th>
                            <MDBInput
                            label='description_product'
                            type='text'
                            inputRef={(description_product) => this.description_product = description_product} />
                        </th>
                        <th>
                            <MDBInput 
                            label='price'
                            type='text'
                            inputRef={(price) => this.price = price} />
                        </th>
                        <th>
                            <Button onClick={this.onBtnAddProduct}
                            style={{fontSize:'10px'}}>Add Product</Button>
                        </th>
                    </MDBTableBody>

                </MDBTable>
            </Container>
        )
    }
}

export default adminAddProduct;