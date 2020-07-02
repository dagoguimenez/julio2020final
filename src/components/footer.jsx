import React from "react";

import { Container,Row,Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF,faTwitter,faInstagram,faLinkedinIn,faGoogle } from '@fortawesome/free-brands-svg-icons';

class PageFooter extends React.Component{
    render(){
        return(
            <footer>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content-text-footer text-center">
                                <ul>
                                    <li>
                                        <a className="facebook" href="https://www.facebook.com">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="https://www.twitter.com">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="https://www.instagram.com">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="https://www.linkedin.com">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="https://www.google.com">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                    </li>
                                </ul>
                                <p>Copyright © 2020 All Right Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
export default PageFooter;