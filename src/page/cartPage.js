import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBCardTitle } from 'mdbreact';
import { Container } from "reactstrap";
import { connect } from 'react-redux';
import Axios from 'axios';


class cartPage extends Component {

  state = {
    cart: [],
    totalprice: []
  }
  componentDidMount() { //akan jalan ketika halaman tsb ke render
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
          console.log()
        })
        .catch((err) => {
          console.log(err)
        })
    }
    this.gettotalharga()
  }

  Deletecart = (idcart) => {
    Axios.delete(`http://localhost:2020/cart/Deletecart?id=${idcart}`)
      .then((res) => {
        console.log(res.data)
        alert('are you sure to delete ??!!')
        this.componentDidMount()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  gettotalharga = () => {
    Axios.get(`http://localhost:2020/cart/totalharga?iduser=${this.props.id}`)
      .then((res) => {
        this.setState({ totalprice: res.data[0].jumlahprice})
        console.log('total', res.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  rendergetcart = () => {
    return this.state.cart.map((item, index) => {
      return (
        <tr>
          <td><img src={`http://localhost:2020${item.gambar}`} style={{ width: '150px', class: "center" }} />
            {item.nama_product}</td>
          <td>{item.size}</td>
          <td>{item.kuantitas}</td>
          <td>IDR {item.harga}</td>
          <td><MDBBtn onClick={() => this.Deletecart(item.idcart)}>delete</MDBBtn></td>
        </tr>
      )
    })
  }

  render() {
    // console.log('itu', this.state.totalprice[0])
    return (

      <div>
        <Container style={{ paddingTop: '40px' }}>
          <h3>Pesanan di Keranjang Belanja Anda</h3>
          <MDBTable>
            <MDBTableHead color="teal accent-2" textBlack>
              <tr>
                <th> </th>
                <th>Size</th>
                <th>Qty</th>
                <th>Harga</th>
                <th>Action</th>
                <th></th>
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
            <MDBBtn href='productPage' style={{ color: 'black' }}>belanja product lainya</MDBBtn>
            <MDBBtn href='cartrecive' style={{ color: 'black' }}>bayar</MDBBtn>
          </div>
        </Container>
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

export default connect(mapStatetoProps)(cartPage); 