import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import './footer.css';
import {BASE_URL} from "../../constants.js";

const footerQuickLinks = [
    {
        display: 'На главную',
        url: BASE_URL
    },
    {
        display: 'Материалы',
        url: '#'
    },
    {
        display: 'Тесты',
        url: '#'
    },
]

const footerInfoLinks = [
    {
        display: 'О нас',
        url: '#'
    },
    {
        display: 'Контакты',
        url: '#'
    },
]


const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>Навигация</h6>
                    <ListGroup className='link_list'>
                        {
                            footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3' md='6'>
                    <h6 className='text-white pt-4'>МГПУ</h6>
                    <ListGroup className='link_list'>
                        {
                            footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className='border-0 ps-0 link_item'><a href={item.url}>
                                    {item.display}
                                </a>

                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='12' className=''>
                    <div className='follows'>
                        <p className='mb-0 d-flex align-items-center justify-content-center gap-2 text-white'>©МГПУ. Все
                            права защищены</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;