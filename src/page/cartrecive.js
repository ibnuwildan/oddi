import React, { Component } from 'react';
import { MDBCardTitle, MDBBtn, MDBContainer, MDBRow, MDBTableHead, MDBTable, MDBTableBody, MDBCol, MDBInput, MDBFormInline } from 'mdbreact';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class cartrecive extends Component {

    state = {
        data: [],
        cart: [],
        radio: 2,
        totalprice: [],
        idcart: []
    }

    onClick = nr => () => {
        this.setState({
            radio: nr
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
                    console.log(this.state.cart)
                    res.data.map((val)=>{
                        this.state.idcart.push(val.idcart)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
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

    getPengirim = () => {
        let iduser = this.props.id;
        let idcart = this.state.idcart;
        let nama = this.refs.nama.value;
        let no_hp = this.refs.no_hp.value;
        let provinsi = this.refs.provinsi.value;
        let kota = this.refs.kota.value;
        let kode_pos = this.refs.kode_pos.value;
        let alamat = this.refs.alamat.value;
        let data = {
            iduser,
            idcart,
            nama,
            no_hp,
            provinsi,
            kota,
            kode_pos,
            alamat
        }
        console.log(data)
        console.log(this.state.idcart)
        if (nama && no_hp && provinsi && kota && kode_pos && alamat) {
            Axios.post('http://localhost:2020/datapengirim/addDatapengirim', data)
                .then((res) => {
                    console.log(res.data)
                    this.setState({ data: res.data, redirect: true })
                    console.log(this.state.redirect)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            alert('isi data dengan lengkap')
        }



    }

    rendergetcart = () => {
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

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/cartpay'/>
            )
        }
        return (
            <div style={{ witdh: '80px' }}>
                <MDBContainer style={{ paddingTop: '40px' }}>
                    <MDBRow>
                        <MDBCol>
                            <h3>DATA PENGIRIMAN</h3>
                            <MDBTable>
                                <label >Nama</label>
                                <input type="text" class="form-control" ref="nama" />
                                <label >No HP</label>
                                <input type="text" class="form-control" ref="no_hp" />
                                <label >Provinsi</label>
                                <input type="text" class="form-control" ref="provinsi" />
                                <label >Kota</label>
                                <input type="text" class="form-control" ref="kota" />
                                <label >Kode Pos</label>
                                <input type="text" class="form-control" ref="kode_pos" />
                                <label >Alamat Lengkap</label>
                                <input type="text" class="form-control" ref="alamat" />

                            </MDBTable>
                        </MDBCol>
                        <MDBCol>
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
                                <div>
                                    <MDBCardTitle>Total</MDBCardTitle>
                                    <MDBCardTitle>IDR {this.state.totalprice}</MDBCardTitle>
                                </div>
                            </MDBTable>
                            <div style={{ textAlign: 'right' }}>
                                <MDBBtn onClick={this.getPengirim}>Lanjut pembayaran</MDBBtn>

                            </div>
                        </MDBCol>
                    </MDBRow>
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

export default connect(mapStatetoProps)(cartrecive);

