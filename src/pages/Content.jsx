import React, { Fragment } from 'react'
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import InfoSection from "../components/InfoSection/InfoSection.jsx";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <InfoSection />
            <Footer />
        </Fragment>
    )
}

export default Content