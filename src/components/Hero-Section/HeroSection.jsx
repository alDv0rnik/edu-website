import React from 'react'
import {  Container, Row, Col } from "reactstrap"
import "./hero-section.css";
import heroImg from '../../assets/images/trud.jpg'
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../constants.js";

const HeroSection = () => {
  const navigate = useNavigate();

  function onContent () {
    navigate(`${PATHS.CONTENT}`);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_content'>
              <h2>
                <span>Обучайся вместе с нами</span>
              </h2>
              <p>
                Узнай основные сведения о режущих инструментах и металлорежущих станках на нашем сайте.
                Наша цель - предоставить студентам и учащимся эффективный инструмент для самостоятельной проверки знаний,
                узнавания слабых мест и улучшения учебного процесса.
              </p>
              <div className='nav_right'>
                <p className='mb-2 d-flex align-items-center gap-2'></p>
                <Button onClick={() => onContent()}>Перейти</Button>
              </div>
            </div>
          </Col>

          {/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
          <Col lg='6' md='6'>
            <img src={heroImg} alt="" className='w-100'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection