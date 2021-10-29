import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/icon/logo.png'
import { BsTelephone,BsFacebook,BsTwitter,BsYoutube } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <Container className="py-5">
                <img className="img-fluid" src={logo} />
                <Row className="py-5">
                    <Col>
                        <div className="text-start">
                            <h5><MdLocationOn/>Dhaka, Bangladesh</h5>
                            <h5><BsTelephone/> Phone:+88 01784 48 90 43</h5>
                        </div>
                    </Col>
                    <Col>
                        <div>
                           <span className="fs-1"><BsFacebook/></span>
                           <span className="fs-1 mx-4"><BsTwitter/></span>
                           <span className="fs-1"><BsYoutube/></span>
                        </div>
                    </Col>
                    <Col>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </Col>
                </Row>
                <p className="text-center">Fooddy24h © 2021. All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;