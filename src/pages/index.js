import React from "react"
//import { Link } from "gatsby"
import Navbar from "../components/home-navbar-2"
import HomePagePost from "../components/home-post"
import Footer from "../components/footer"

//import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "../components/layout.css"

const IndexPage = () => (
  //<Layout>
  <>
    <SEO title="Home" />
    <header>
      <Navbar />

      <div class="banner">
        <h1>Schutz Liebe</h1>
        <h1>Rottweilers</h1>
        <p>Estd.~ 2016</p>
      </div>
      
      
    </header>
    <body>
      <HomePagePost />
    </body>
    <Footer />
  </>
)

export default IndexPage
