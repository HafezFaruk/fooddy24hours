import logo from '../../images/logo.png';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="text-block pt-5">
                <hr/>
                <img className="mb-3" width="300" src={logo} alt="" />
                <div className="container">
                    <div className="row py-5">
                        <div className="col">
                            <h6>+88 01629 78 63 99</h6>
                            <h6>Dhaka, Bangladesh</h6>
                        </div>
                       
                        <div className="col">
                            <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                                <Nav.Link href="/home">Help</Nav.Link>
                                <Nav.Link eventKey="link-1">Contact</Nav.Link>
                                <Nav.Link eventKey="link-2">Services</Nav.Link>
                                <Nav.Link eventKey="link-3">Food Review</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                    <div className="py-3">
                        <p className="text-muted text-center">
                            fooddy24h&copy;delivery-service.com 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;