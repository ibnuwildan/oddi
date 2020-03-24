import React, { Component } from "react";
import Axios from 'axios';
import { connect } from 'react-redux'
import { Login } from '../redux/action'
import { Logout } from '../redux/action'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCardTitle, MDBCardText
} from "mdbreact";
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { MDBRow, MDBCol, MDBInput, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Swal from 'sweetalert2';
import { NavItem } from "reactstrap";

class NavbarPage extends Component {
  state = {
    isOpenLogin: false,
    modalLogin: false,
    isOpenRegister: false,
    modalRegister: false
  };

  BtnLogout = () => {
    this.props.Logout()
    localStorage.clear();
  }
  toggleLogin = () => {
    this.setState({ isOpenLogin: !this.state.isOpenLogin });
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }
  toggleRegister = () => {
    this.setState({ isOpenRegistern: !this.state.isOpenRegister });
    this.setState({
      modalRegister: !this.state.modalRegister
    });
  }

  onBtnLogIn = () => {
    let username = this.text.value;
    let password = this.password.value;
    console.log(username)
    console.log(password)
    Axios.post('http://localhost:2020/users/Login', {
      username,
      password
    })
      .then((res) => {
        console.log(res.data)
        if (res.data.length === 0) {
         alert('password invalid!')
        } else {
          this.props.Login(res.data)
          localStorage.setItem('token', res.data.token)
          this.toggleLogin()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  regisUser = () => {
    var username = this.text.value
    var email = this.email.value
    var password = this.password.value
    var confpassword = this.confpassword.value
    if (username && email && password && confpassword) {
      if (password !== confpassword) {
        alert('Invalid Password Confirmation')
      }
      else {
        Axios.post('http://localhost:2020/users/register', {
          username: username,
          password: password,
          email: email,
          role: 'user'
        })
          .then((res) => {
            console.log('Regis Success' + res.data)
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'succsess...',
              text: 'You Can Login',
              // footer: '<a href>Why do I have this issue?</a>'
            })
            this.toggleRegister()
            // this.componentDidMount()//update pages dengan panggil fungsi get cara 2
          })
          .catch((err) => {
            console.log(err)
          })
      }

    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Please fill in all the forms!...'
        // footer: '<a href>Why do I have this issue?</a>'
      })
      // alert('Please fill in all the forms!')
    }
  }

  render() {
    return (
      <div>
        <MDBNavbar color="teal accent-2" dark expand="sm" className='text-dark'>
          <MDBNavbarBrand>
            <MDBNavLink to='/'>
              <img src={require('../img/logo4.png')} alt='logo' height='70' />
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to='/' className='h5' style={{ color: 'black' }} >Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/productPage' className='h5' style={{ color: 'black' }}>Product</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/customPage' className='h5' style={{ color: 'black' }}>Custom</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/aboutPage' className='h5' style={{ color: 'black' }}>About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right >
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/cartPAge">
                  <MDBIcon style={{ color: 'black' }} icon="shopping-cart" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon style={{ color: 'black' }} icon="user" href={'/cartPage'} />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right basic >
                    {this.props.users
                      ?
                      <div>
                        {this.props.role === 'admin'
                          ?
                          <div>
                            <MDBDropdownItem >
                              <MDBNavLink to='/adminProduct' style={{ color: 'black' }}>
                                Admin Product
                                                </MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem >
                              <MDBNavLink to='/transaksiAdmin' style={{ color: 'black' }}>
                                transaction product
                                                </MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavLink to='/editprofile' style={{ color: 'black' }}>
                                Setting
                                                </MDBNavLink>
                            </MDBDropdownItem>
                          </div>
                          :
                          <div>
                            <MDBDropdownItem>
                              <MDBNavLink to='/cartPage' style={{ color: 'black' }}>
                                History
                                                </MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavLink to='/editprofile' style={{ color: 'black' }}>
                                Setting
                                                </MDBNavLink>

                            </MDBDropdownItem>
                          </div>
                        }
                        <MDBDropdownItem onClick={this.BtnLogout}>
                          <MDBNavLink to='/' style={{ color: 'black' }}>
                            Logout
                                            </MDBNavLink>
                        </MDBDropdownItem>
                      </div>
                      :
                      <div>
                        <MDBDropdownItem onClick={this.toggleLogin} >Login</MDBDropdownItem>
                        <MDBDropdownItem onClick={this.toggleRegister}>Register</MDBDropdownItem>
                      </div>

                    }

                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBCardText className='h6'>{this.props.users} </MDBCardText>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBContainer>
          <MDBModal isOpen={this.state.modalLogin} toggle={this.toggleLogin}>
            {/* <MDBModalHeader togglet={his.toggle}> SIGN IN</MDBModalHeader> */}
            <MDBModalBody>
              <MDBRow>
                <MDBCol md="12">
                  <form>
                    <p className="h3 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your user"
                        icon="envelope"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        inputRef={(text) => this.text = text}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        inputRef={(password) => this.password = password}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn onClick={this.onBtnLogIn}>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
          <MDBModal isOpen={this.state.modalRegister} toggle={this.toggleRegister}>
            <MDBModalBody>
              <MDBRow>
                <MDBCol md="12">
                  <form>
                    <p className="h3 text-center mb-4">Sign Up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Username"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        inputRef={(text) => this.text = text}
                      />
                      <MDBInput
                        label="Your email"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        inputRef={(email) => this.email = email}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        inputRef={(password) => this.password = password}
                      />
                      <MDBInput
                        label="Confirm your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        inputRef={(confpassword) => this.confpassword = confpassword}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn onClick={this.regisUser}>Register</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

const mapStatetoProps = ({ auth }) => { // fungsi yg menghubungkan file login dgn authaction dan authreducer. 
  return {
    users: auth.users,
    role: auth.role
  }
}

export default connect(mapStatetoProps, { Login, Logout })(NavbarPage);