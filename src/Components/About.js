import React from 'react'
import Noman from './images/noman.jpeg'

function About() {
    return (
        <div className="page-div">
            <h1> About Us Page </h1>
            <br />
            <br />
            <img className="img" src={Noman} alt="Muhammad Noman Farooq" />
            <p>For more details, please visit my LinkedIn page by <a href="https://www.linkedin.com/in/nomanfarooq/">clicking here.</a></p>
        </div>
    )
}

export default About;