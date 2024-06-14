import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <img src={bg} alt="Profile" className="bg"/>
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Gourab</span><br />Data Ananlyst</span>
                <p className="introPara">I have a strong background in Python, SQL, and Google Cloud Platform.<br /></p>
                <Link><button className="btn"><b>Hire Me</b></button></Link>
            </div> 
        </section>
    )
}

export default Intro