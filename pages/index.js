import Head from 'next/head'
import Contact from '../component/Contact'
import Counts from '../component/Counts'
import Footer from '../component/Footer'
import Form from '../component/Form'
import Navbar from '../component/Navbar'
import Question from '../component/Question'
import Service from '../component/Service'
import Team from '../component/Team'
import Testimonial from '../component/Testimonial'
import Topbar from '../component/Topbar'
// import styles from '../styles/Home.module.css'
// import Script from 'next/script'
import About from '../component/About'
import Article from '../component/Article'
import Benner from '../component/Benner'
import { useEffect } from 'react'
// import PureCounter from "@srexi/purecounterjs"



export default function Home() {
  // useEffect(() => {
  //    new PureCounter();
  // })
  return (
    <div>
      <Head>
        <title>Rumah Sampah</title>
      </Head>
      <Topbar />
      <Navbar />
      <Benner />
      <About />
      <Counts />
      <Service />
      <Form />
      <Article />
      <Team />
      <Question />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}
