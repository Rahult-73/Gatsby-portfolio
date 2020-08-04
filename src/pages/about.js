import React from "react"
import { Link } from "gatsby"

const AboutPage = ()=>{
    return(
      <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        <p>Need an developer ? <Link to="/contact">Contact me</Link></p>
      </div>
    )
  }
  export default AboutPage