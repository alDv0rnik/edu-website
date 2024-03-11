import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Test from '../components/Test/Test.jsx'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Test />
        <Footer />
    </Fragment>
  )
}

export default Home