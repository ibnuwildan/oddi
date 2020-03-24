import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn, MDBCol } from 'mdbreact';
import { Container, Button, Form } from "reactstrap";
import Axios from "axios";

class adminProduct extends Component {
    state = {
        addImageFileName: 'Select File',
        addImageFile: undefined,
        product: [],
        selectedId: null
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

    DeleteProduct = (idproduct) => {
        Axios.delete(`http://localhost:2020/product/DeleteProduct?id=${idproduct}`)
            .then((res) => {
                console.log(res.data)
                this.componentDidMount()
                alert('are you sure to delete ??!!')

            })
            .catch((err) => {
                console.log(err)
            })
    }
    onBtnAddProduct = () => {
        let { addImageFile } = this.state;

        let formData = new FormData()
        if (addImageFile) {
            let nama_product = this.nama_product.value;
            let description_product = this.description_product.value;
            let price = this.price.value;
            let data = {
                nama_product,
                description_product,
                price
            }
            formData.append('data', JSON.stringify(data))
            formData.append('image', addImageFile)
            if (nama_product && description_product && price) {
                Axios.post('http://localhost:2020/product/AddProduct', formData)
                    .then((res) => {
                        console.log(res.data)
                        Axios.get('http://localhost:2020/product/getAllProduct')
                            .then((res) => {
                                console.log(res.data)
                                this.setState({ data: res.data })
                                this.componentDidMount()
                                alert('sukses!!')
                            })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                alert('Please Fill in All the forms')
            }
        }

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
                    <MDBBtn onClick={() => this.state.selectedId}>Edit</MDBBtn>
                    <MDBBtn onClick={() => this.DeleteProduct(item.idproduct)}>Delete</MDBBtn>


                </tr>
            )
        })

    }

    EditProduct = (idproduct) => {
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
        console.log(data)
        Axios.post(`http://localhost:2020/product/EditProduct/${idproduct}`, data)
            .then((res) => {
                console.log(res.data)
                Axios.get('http://localhost:2020/product/getAllProduct')
                    .then((res) => {
                        this.setState({ data: res.data, selectedId: null })
                        alert('Edit Successful')
                        window.location.reload()
                    })
            })
            .catch((err) => {
                console.log(err)
                alert('Please Fill in All the forms')
            })
    }

    onBtnAddImageFile = (e) => {
        console.log('gambar', e.target.files[0])
        if (e.target.files[0]) {
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile: e.target.files[0] })
            // var preview = document.getElementById('imgpreview')
            // preview.src = URL.createObjectURL(e.target.files[0])
        } else {
            this.setState({ addImageFileName: 'Select Image', addImageFile: undefined })
        }
    }


    renderProduct = () => {
        let { data, product, selectedId } = this.state;
        return product.map((val, index) => {
            if (val.idproduct === selectedId) {
                return (
                    <tr>
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
                                type='file'
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
                            <MDBBtn onClick={() => this.EditProduct(val.idproduct)}>confirm</MDBBtn>
                        </th>
                    </tr>
                )
            } else {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{val.nama_product}</td>
                        <td>
                        <img src={`http://localhost:2020${val.gambar}`}  style={{ width: '200px', class: "center" }} />
                        </td>
                        <td>{val.description_product}</td>
                        <td>{val.price}</td>
                        <MDBBtn
                            onClick={() => {
                                console.log(val.idproduct)
                                this.setState({ selectedId: val.idproduct })
                            }}>
                            Edit</MDBBtn>
                        <MDBBtn onClick={() => this.DeleteProduct(val.idproduct)}>Delete</MDBBtn>


                    </tr>
                )
            }
        })
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
                        {this.renderProduct()}
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
                                type='file'

                                onChange={this.onBtnAddImageFile} label={this.state.addImageFileName}  />
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
                            <MDBBtn
                                onClick={this.onBtnAddProduct}>Add Product</MDBBtn>
                        </th>
                    </MDBTableBody>
                </MDBTable>
            </Container>
        )
    }
}

export default adminProduct;