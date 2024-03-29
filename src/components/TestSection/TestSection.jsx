import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import "./TestSection.css"
import offerImg from '../../assets/images/test.jpg'
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../constants.js";


const TestSection = () => {
    const navigate = useNavigate();

    function onQuiz () {
        navigate(`${PATHS.TEST}`);
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='about_img'>
                            <img src={offerImg} alt='' className='w-100'/>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='offer_content'>
                            <h2>Пройди проверку знаний онлайн</h2>
                            <p>На нашем ресурсе вы найдете набор тематических тестов для проверки знаний по интересующей области.
                                Эти тесты разработаны для помощи в самопроверке и увеличении уровня понимания ваших знаний.
                                Мы предлагаем разнообразные вопросы и задания, охватывающие различные аспекты изучаемых тем,
                                что поможет вам оценить свой уровень подготовки.</p>
                        </div>
                        <div className='nav_right'>
                            <p className='mb-2 d-flex align-items-center gap-2'></p>
                            <Button onClick={() => onQuiz()}>Пройти тест</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TestSection