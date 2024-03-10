import React from 'react'
import {  Container, Row, Col } from "reactstrap"
import "./hero-section.css";
import heroImg from '../../assets/images/hero-img1.png'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>


          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h1 className="mb-4">
                <span className='e-purple'>E</span> - Learning <br />Anywhere  <br />In the world
              </h1>
              <p className='mb-4'>The best place to learn programming with beginner friendly tutorials and examples.</p>

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