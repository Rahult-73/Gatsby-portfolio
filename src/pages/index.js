import React from "react"
import {Link} from "gatsby"

const IndexPage = ()=>{
  return(
    <div>
      <h1>Rahul</h1>
      <h2>Im an web developer</h2>
      <p>Need an developer ? <Link to="/contact">ContactMe</Link></p>
    </div>
  )
}

export default IndexPage