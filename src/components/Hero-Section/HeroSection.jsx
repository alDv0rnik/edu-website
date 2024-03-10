import React from 'react'
import {  Container, Row, Col } from "reactstrap"
import "./hero-section.css";
import heroImg from '../../assets/images/trud.jpg'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>


          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h2>
                <span>Обучайся вместе с нами</span>
              </h2>
              <p className=''>Узнай основные сведения о режущих инструментах и металлорежущих станках на нашем сайте</p>

            </div>
          </Col>

          {/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
    	  <Col lg='6' md='6'>
              <img src={heroImg} alt="" className='w-100' />
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default HeroSection