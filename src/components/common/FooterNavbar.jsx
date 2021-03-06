import React from 'react';
import { Col, Container, Row, Footer,MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import '../../styles/footerNavbar.css'

class FooterNavBar extends React.Component {
render() {
return (
<Footer className="page-footer unique-color-dark dock-bottom">
  <Container fluid className=" text-md-left">
    <Row>
      <Col xs="12" sm ="12" md="2">
      </Col>
      <Col xs="12" sm ="4" md="3">
          <Row>
            <Col md="6">
              <h6 className="text-uppercase font-weight-bold ">Anugraha Site</h6>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p>
                <Link to = "/">
                  Home
                </Link>
              </p>
              <p>
                <Link to = "/about">
                  About
                </Link>
              </p>
              <p>
                <Link to="/gallery">
                  Gallery
                </Link>
              </p>
              <p>
                <Link to="/news">
                  News
                </Link>
              </p>
            </Col>
          </Row>
      </Col>
      <Col xs="12" sm ="4" md="3">
          <Row>
            <Col md="6">
              <h6 className="text-uppercase font-weight-bold ">Useful Links</h6>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p>
                <a href="https://mangaloreuniversity.ac.in/">Mangalore University</a>
              </p>
              <p>
                <a href="http://pue.kar.nic.in/">Karnataka PU Education</a>
              </p>
              <p>
                <a href="http://karnatakaeducation.gov.in/">Karnataka Education Portal</a>
              </p>
              <p>
                <a href="http://www.kseeb.kar.nic.in/index.asp">KSEEB</a>
              </p>
            </Col>
          </Row>
      </Col>
      <Col xs="12" sm ="4" md="3">
          <Row>
            <Col md="6">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <p>
                <MDBIcon icon="address-book" className="amber-text pr-3 mr"/> 
                Anugraha Education Trust
              </p>
              <p>
                <MDBIcon icon="at" className="red-text pr-3 mr"/>anugraha.kalladka@gmail.com
              </p>
              <p>
               <MDBIcon icon="mobile" className="cyan-text pr-3 mr"/>+91 9481148830
              </p>
              <p>
               <MDBIcon icon="mobile" className="red-text pr-3 mr"/>+91 9481148830
              </p>
            </Col>
          </Row>
      </Col>      

    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <Link to="/"> Anugraha Women's College </Link>
    </Container>

  </div>
</Footer>
);
}
}

export default FooterNavBar;