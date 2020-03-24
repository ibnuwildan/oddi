import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBLink, MDBIcon, MDBNavItem } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="teal accent-2" className="font-small pt-5 mt-5" style={{color: 'black'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" className="title text-center">
            <MDBIcon icon="user-alt" style={{ fontSize: '450%' }} />
            <h5 className="title text-center" style={{ fontSize: '15px', paddingTop: '20px' }} >ABOUT</h5>
            <MDBLink to='./aboutPage'>
              <p style={{ cursor: 'pointer', color: 'black' }}>
                How to stand and get to know more about us
            </p>
            </MDBLink>
          </MDBCol>
          <MDBCol md="4" className="title text-center">
            <MDBIcon icon="map-marker-alt" style={{ fontSize: '450%' }} />
            <h5 style={{ fontSize: '15px', paddingTop: '20px' }}>KONTAK</h5>
            <p>
              Kp. Sawah Rt 02 Rw 03 N0.01 Des.Lengkong kulon Kec.Pagedangan Kab.Tangerang 15311<br/>
              <MDBIcon icon='phone'tyle={{ fontSize: '50%' }}/>  082299327664
            </p>

          </MDBCol>
          <MDBCol md="4" className="title text-center">
            <MDBIcon icon="info-circle" style={{ fontSize: '450%' }} />
            <h5 className="title text-center" style={{ fontSize: '15px', paddingTop: '20px' }}>INFORMATION</h5>
            <MDBLink to='./informationPage'>
              <p style={{ cursor: 'pointer', color:'black'}}>
              Manual Screen Printing Information
            </p>
            </MDBLink>
          </MDBCol>
          {/* <MDBCol md="3" className="title text-center">
            <MDBIcon icon="book" style={{ fontSize: '450%' }} />
            <h5 className="title text-center" style={{ fontSize: '15px', paddingTop: '20px' }}>ARTIKEL</h5>
            <MDBLink to='./artikelPage'>
              <p style={{color:'black'}}>
                Kp. Sawah Rt 02 Rw 03 N0.01 Des.Lengkong kulon Kec.Pagedangan Kab.Tangerang 15311
            </p>
            </MDBLink>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;