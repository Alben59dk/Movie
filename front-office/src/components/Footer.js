import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <Row className={'flex-col nomargin bg-lgrey h25vh'}>
                    <Col className={'border-green'}>
                        <h1 className={'border-orange txtcenter'}>Footer</h1>
                    </Col>
                </Row>
                <Row className={'flex-fill border-orange'}>
                </Row>
            </div>
        );
    }
}

export default Footer;