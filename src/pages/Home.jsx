import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import TestSection from '../components/TestSection/TestSection.jsx'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <TestSection />
        <Footer />
    </Fragment>
  )
}

export default Home