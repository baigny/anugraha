import React, { Component } from 'react';
import{Form, FormGroup,FormControl ,Col, Row, ControlLabel,Grid} from 'react-bootstrap';
import '../styles/contact.css'



export default class Contact extends Component {
  render() {
    return (
      <section className="contact-section ">
        <div className="container">
          <Col>
          <i className="fa fa-comments fa-4x" aria-hidden="true"></i>
          <h1 className="heads">Write to Us:</h1>
          </Col>
          <Form horizontal>
            <FormGroup controlId="formHorizontalName">
              <Col sm={6}>
                <ControlLabel>Full Name:</ControlLabel>
                <FormControl type="Name" placeholder="Enter your Name" />
              </Col>
              
            </FormGroup>
             <FormGroup controlId="formHorizontalEmail">
              
              <Col sm={6}>
                <ControlLabel>Email ID:</ControlLabel>
                <FormControl type="email" placeholder="Enter your Email ID" />
              </Col>
             
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              <Col sm={6}>
                <ControlLabel>Subject:</ControlLabel>
                <FormControl type="Subject" placeholder="Enter the Subject" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <Col sm={6}>
                <ControlLabel>Message:</ControlLabel>
                <FormControl componentClass="textarea" rows="5" placeholder="Enter the Question or your Feedback" />
              </Col>
                          
            </FormGroup>
            <FormGroup controlId="formControlsbutton">
              <Col sm={6}>
              <button type="button" className="buttons ">Submit</button> 
              </Col>
                          
            </FormGroup>
            
          </Form>
        </div>
       
       
       
       
        <Grid  fluid>
          <Row className="margins">
             <Col md={5} className="colors card" >
              <div>             
                  <h1 className="text-center font-weight-bold">Contact Information</h1>
                  <h2 className="text-center"> PUC Department</h2>    
              </div>
              <div>
                  <ul className=" list-unstyled ">
                          <li>                             
                             <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                             <p className="heads" >  +91 8255275500</p>
                          </li>
                          <li>
                             <i className="fa fa-at fa-2x" aria-hidden="true"></i>
                             <p className="heads" ><a className="anchors" href="mailto:anugraha.wpuc@gmail.com">PU College</a></p>
                          </li>
                  </ul>  
              </div>
              <div>             
                 <h2 className="text-center"> Degree Department</h2>    
              </div>
              <div>
                  <ul className=" list-unstyled ">
                          <li>                             
                             <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                             <p className="heads" >  +91 8255275500</p>
                          </li>
                          <li>
                             <i className="fa fa-at fa-2x" aria-hidden="true"></i>
                             <p className="heads" ><a className="anchors" href="mailto:anugraha.wpuc@gmail.com">Degree College</a></p>
                          </li>
                  </ul>  
              </div>
              <div>             
                
                 <h2 className="text-center"> Address Information</h2>    
              </div>   
              <div>
                 <Col md={6} >
                 <i className="fa fa-address-card" aria-hidden="true"></i>
                  <address className="headsss">
                    Anugraha Women's College,<br/>
                    Pattekodi, Golthamajal,<br/>
                    Kalladka Post, <br/>
                    Bantwal Taluq, P.O 574222.<br/>
                  </address>            
              </Col>
                 <Col md={6} >
                  <ul className="list-inline list-unstyled social float-right ">
                              <li className="list-inline-item">
                                  <a href="#!" className=" fa-lg w-ic">
                                  <i class="social-font fa fa-twitter" aria-hidden="true"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className=" fa-lg w-ic">
                                    <i class=" social-font fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className=" fa-lg w-ic">
                                    <i class=" social-font fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#!" className="fa-lg w-ic">
                                  <i class=" social-font fa fa-linkedin" aria-hidden="true"></i>
                                  </a>
                                </li>
                  </ul>
              </Col>
              </div>
            
              </Col> 
              <Col md={7} >
                <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container mrbt">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0494258304548!2d75.07174561418509!3d12.8400826909422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a40f48a87bb3%3A0x93ed297f0496cf27!2sAnugraha+Institutions!5e0!3m2!1sen!2sin!4v1548073307235"
                            title="This is a unique title"
                            width="100%"
                            height="480px"
                            frameBorder="0"
                    />
                </div>  
              </Col>         
            </Row>
          </Grid>
        </section>
      
    );
  }
}


 