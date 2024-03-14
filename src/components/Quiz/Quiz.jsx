import {Container} from "reactstrap";
import {useState} from "react";
import {quiz} from "../../quiz.js";

export default function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const { questions } = quiz

    return (
        <Container>
            <h1>Опрос</h1>
            <p>{questions[activeQuestion].question}</p>
        </Container>
    )
}