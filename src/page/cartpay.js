import React, { Component } from 'react'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBTableHead, MDBTable, MDBTableBody, MDBCol, MDBInput, MDBFormInline, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle } from 'mdbreact';
import Axios from 'axios';
import { connect } from 'react-redux';
class cartPay extends Component {

    state = {
        modal14: false,
        cart: [],
        datapengiriman: []
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
        this.gettotalharga()
        this.getdatapengiriman()
    }

    // getdatapengirim =()=>{
    //     Axios.get(`http://localhost:2020/datapengirim/getAllDatapengirim?iddatapengiman=${req.props.id}`)
    // }

    // }

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

    renderdatapengiriman = () =>{
        if(this.state.datapengiriman.length > 0){
            return this.state.datapengiriman.map((item, index)=>{
                return(
                    <div >
                    <tr style={{textAlign:'left'}}> 
                        <td>{item.nama}<br/>
                         kota {item.kota},alamat {item.alamat},provinsi {item.provinsi}, kode pos {item.kode_pos},no hp {item.no_hp} </td>
                    </tr>
                    </div>
                )
            })
        }
    }

    rendergetcart = () => {
        if (this.state.cart.length > 0) {
            return this.state.cart.map((item, index) => {
                return (
                    <tr>
                        <td><img src={`http://localhost:2020${item.gambar}`} style={{ width: '100px', class: "center" }} />
                            {item.nama_product}</td>
                        <td>{item.size}</td>
                        <td>{item.kuantitas}</td>
                        <td>IDR {item.harga}</td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div style={{ paddingTop: 60 }}>
                <MDBContainer style={{ paddingTop: 20, paddingBottom: 30 }}>
        <MDBCardText className='text-center' style={{ paddingTop: 50 }}><h2>TERIMAKASIH {this.props.users}</h2></MDBCardText>
                    <MDBCardText className='text-center'><h3>TOTAL PEMBAYARAN ANDA</h3></MDBCardText>
                    <MDBCardText className='text-center'><h3>IDR {this.state.totalprice}</h3></MDBCardText>
                    
                    <div style={{ textAlign: 'center' }}>
                        <MDBBtn onClick={this.toggle(14)}>DETAIL PESANAN</MDBBtn>
                        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="lg" centered>
                            <MDBModalHeader toggle={this.toggle(14)}>DETAIL PESANAN </MDBModalHeader>
                            <MDBModalBody style={{ color: 'black' }}>
                            <MDBTable style={{width:'50%'}}>
                                    <MDBTableHead color="teal accent-2" textBlack>
                                        <tr>
                                            <th>Alamat</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {this.renderdatapengiriman()}
                                    </MDBTableBody>
                                    </MDBTable>
                                <MDBTable>
                                    <MDBTableHead color="teal accent-2" textBlack>
                                        <tr>
                                            <th></th>
                                            <th>Size</th>
                                            <th>Qty</th>
                                            <th>Harga</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {this.rendergetcart()}
                                    </MDBTableBody>
                                    
                                        <h3  style={{width: '100%'}}>Total</h3>
                                        <h3  style={{width: '100%'}}>IDR {this.state.totalprice}</h3>
                                    
                                </MDBTable>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="teal accent-2" onClick={this.toggle(14)}>Close</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </div>
                    <div class="d-flex justify-content-center ">

                        <img src="https://www.bilalcomputer.com/wp-content/uploads/2018/09/LOGO-MANDIRI.jpg" class="img-fluid" alt="" />
                    </div>
                    <h5 style={{ textAlign: 'center' }}>ibnu wildan</h5>
                    <h3 style={{ textAlign: 'center' }}>120293834740</h3>
                    <h5 style={{ paddingTop: 50, textAlign: 'center' }}>Harap transfer sesuai dengan nominal "TOTAL HARGA" ke salah satu bank yang tertera di atas!
Setelah transfer lakukan konfirmasi! Perbedaan nilai transfer akan menghambat proses verfikasi!</h5>
                    <h5 style={{ paddingTop: 50, textAlign: 'center', color: 'red' }}>Pemesanan dianggap batal jika tidak melakukan pembayaran selama 10 jam</h5>
                    <div style={{ textAlign: 'center' }}>
                        <MDBBtn color="teal accent-2">Konfirmasi Pembayaran</MDBBtn>
                    </div>
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

export default connect(mapStatetoProps)(cartPay);