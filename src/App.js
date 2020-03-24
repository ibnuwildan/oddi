import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import NavbarHead from './component/navbar';
import LoginPage from './page/login';
import FooterPage from './component/footer';
import productPage from './page/produk';
import homePage from './page/home';
import customPage from './page/custom';
import aboutPage from './page/aboutPage';
import informationPage from './page/informationpage';
import detailProduk from './page/detailproduk';
import AdminPage from './page/admin';
import UserPage from './page/user';
import { KeepLogin } from './redux/action'
import { connect } from 'react-redux';
import adminProduct from './page/AdminProduct';
import adminAddProduct from './page/adminAddProduct';
import cartPage from './page/cartPage';
import custom from './page/custom'
import cartrecive from './page/cartrecive';
import cartPay from './page/cartpay';
import ediprofile from './page/editprofile';
import editprofile from './page/editprofile';
import historyPage from './page/historypage';
import transaksiAdmin from './page/transaksiproductadmin';

class App extends Component {

  componentDidMount() {

    this.props.KeepLogin()
  }


  render() {
    if (this.props.role === 'admin') {
      return (
        <div>
          <NavbarHead></NavbarHead>
          <Route path="/" component={homePage} exact></Route>
          <Route path="/productPage" component={productPage}></Route>
          <Route path="/AdminProduct" component={adminProduct}></Route>
          <Route path="/detailProduk" component={detailProduk}></Route>
          <Route path="/cartPage" component={cartPage}></Route>
          <Route path="/aboutPage" component={aboutPage}></Route>
          <Route path="/informationPage" component={informationPage}></Route>
          <Route path="/cartrecive" component={cartrecive}></Route>
          <Route path="/cartpay" component={cartPay}></Route>
          <Route path="/transaksiAdmin" component={transaksiAdmin}></Route>
          <Route path="/editprofile" component={editprofile}></Route>


          <FooterPage></FooterPage>

        </div>

      )
    } else if (this.props.role === 'user') {
      return (
        <div>
          <NavbarHead></NavbarHead>
          <Switch>
            <Route path="/" component={homePage} exact></Route>
            <Route path="/AdminPage" component={AdminPage}></Route>
            <Route path="/UserPage" component={UserPage}></Route>
            <Route path="/productPage" component={productPage}></Route>
            <Route path="/detailProduk" component={detailProduk}></Route>
            <Route path="/aboutPage" component={aboutPage}></Route>
            <Route path="/informationPage" component={informationPage}></Route>
            <Route path="/adminProduct" component={adminProduct}></Route>
            <Route path="/adminAddProduct" component={adminAddProduct}></Route>
            <Route path="/cartPage" component={cartPage}></Route>
            <Route path="/customPage" component={custom}></Route>
            <Route path="/customPage" component={custom}></Route>
            <Route path="/cartrecive" component={cartrecive}></Route>
            <Route path="/cartpay" component={cartPay}></Route>
            <Route path="/editprofile" component={editprofile}></Route>
            <Route path="/historypage" component={historyPage}></Route>

          </Switch>
          <FooterPage></FooterPage>
        </div>
      )
    } else {
      return (
        <div>
          <NavbarHead></NavbarHead>
          <Switch>
            <Route path="/" component={homePage} exact></Route>
            {/* <Route path="/AdminPage" component={AdminPage}></Route> */}
            {/* <Route path="/UserPage" component={UserPage}></Route> */}
            <Route path="/productPage" component={productPage}></Route>
            <Route path="/productPage" component={productPage}></Route>
            <Route path="/detailProduk" component={detailProduk}></Route>
            <Route path="/aboutPage" component={aboutPage}></Route>
            <Route path="/informationPage" component={informationPage}></Route>
            {/* <Route path="/adminProduct" component={adminProduct}></Route> */}
            {/* <Route path="/adminAddProduct" component={adminAddProduct}></Route> */}
          </Switch>
          <FooterPage></FooterPage>
        </div>
      )
    }


  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.role)
  return {
    role: state.auth.role
  }
}

export default connect(mapStateToProps, { KeepLogin })(App);