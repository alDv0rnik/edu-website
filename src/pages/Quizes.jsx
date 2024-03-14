import React, { Fragment } from 'react'
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Quiz from "../components/Quiz/Quiz.jsx";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Quiz />
            <Footer />
        </Fragment>
    )
}

export default Content