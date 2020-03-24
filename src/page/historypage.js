import React, { Component } from 'react';
import { MDBModalFooter, MDBModalBody, MDBModalHeader, MDBModal, MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import Axios from 'axios'
class historyPage extends Component {

    state = {
        datapengiriman: [],
        modal14: false,
        modal13: false
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log('Action', token)
        if (token) {
            console.log('Action2', token)
            const header = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            Axios.get(`http://localhost:2020/cart/getTocart`, header)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ cart: res.data })
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        this.getdatapengiriman()
        this.gettotalharga()
    }

    gettotalharga = () => {
        Axios.get(`http://localhost:2020/cart/totalharga?iduser=${this.props.id}`)
            .then((res) => {
                this.setState({ totalprice: res.data[0].jumlahprice })
                console.log('total', res.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getdatapengiriman = () => {
        Axios.get(`http://localhost:2020/datapengirim/getAllDatapengirim?iduser=${this.props.id}`)
            .then((res) => {
                this.setState({ datapengiriman: res.data })
                console.log(this.state.datapengiriman)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getcartpengiriman = (order_id) => {
        const token = localStorage.getItem('token')
        if (token) {
            console.log('Action2', token)
            const header = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            Axios.get(`http://localhost:2020/cart/getTocart?invoice='${order_id}'`, header)
                .then((res) => {
                    this.setState({ cart: res.data })
                    return (
                        <div>
                            {res.data[0].qty}
                        </div>
                    )
                    // console.log(this.state.cart)
                    // console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    rendergetcart = () => {
        if (this.state.cart) {
            return this.state.cart.map((item, index) => {
                // this.setState({ status: item.status })
                return (
                    <tr>
                        <td><img src={`http://localhost:2020${item.gambar}`} style={{ width: '100px', class: "center" }} />
                            {item.nama_product}</td>
                        <td>{item.size}</td>
                        <td>{item.kuantitas}</td>
                        <td>IDR {item.harga}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
    }

    renderdatapengiriman = () => {
        if (this.state.datapengiriman.length > 0) {
            return this.state.datapengiriman.map((item, index) => {
                return (
                    <div >
                        <tr style={{ textAlign: 'left' }}>
                            <td>{item.nama}<br />
                         kota {item.kota},alamat {item.alamat}<bt />,provinsi {item.provinsi}, kode pos {item.kode_pos},no hp {item.no_hp}, invoice {item.invoice} </td>
                            <tr>{this.getcartpengiriman(item.invoice)}</tr>
                        </tr>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div>
                <MDBContainer style={{ paddingTop: '40px' }}>
                    <MDBTable>
                        <MDBTableHead color="teal accent-2" textBlack>
                            <tr>
                                <th>data pengiriman</th>
                                <th>detail</th>
                                <th>status</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th><MDBBtn onClick={this.toggle(13)}>DETAIL pengiriman</MDBBtn>
                                    <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} size="lg" centered>
                                        <MDBModalHeader toggle={this.toggle(13)}>DETAIL pengiriman </MDBModalHeader>
                                        <MDBModalBody style={{ color: 'black' }}>
                                            <MDBTable>
                                                <MDBTableHead color="teal accent-2" textBlack>
                                                    <tr>
                                                        <th>alamat</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {this.renderdatapengiriman()}
                                                </MDBTableBody>
                                            </MDBTable>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn color="teal accent-2" onClick={this.toggle(14)}>Close</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                </th>
                                <th><MDBBtn onClick={this.toggle(14)}>DETAIL PESANAN</MDBBtn>
                                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg" centered>
                                        <MDBModalHeader toggle={this.toggle(14)}>DETAIL PESANAN </MDBModalHeader>
                                        <MDBModalBody style={{ color: 'black' }}>
                                            <MDBTable>
                                                <MDBTableHead color="teal accent-2" textBlack>
                                                    <tr>
                                                        <th></th>
                                                        <th>Size</th>
                                                        <th>Qty</th>
                                                        <th>Harga</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {this.rendergetcart()}
                                                </MDBTableBody>
                                                <h3 style={{ width: '100%' }}>Total</h3>
                                                <h3 style={{ width: '100%' }}>IDR {this.state.totalprice}</h3>

                                            </MDBTable>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <MDBBtn color="teal accent-2" onClick={this.toggle(14)}>Close</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>  </th>
                                    {/* <th>{this.state.status}</th> */}

                            </tr>



                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            </div>
        )
    }

}
const mapStatetoProps = ({ auth }) => { // fungsi yg menghubungkan file login dgn authaction dan authreducer. 
    console.log(auth)
    return {

        ...auth
    }
}
export default connect(mapStatetoProps)(historyPage);