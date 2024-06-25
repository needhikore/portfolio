import React from 'react';
import "./works";
import Portfolio1 from '../../assets/Portfolio1.jpg';
import Portfolio2 from '../../assets/Portfolio2.jpg';
import Portfolio3 from '../../assets/Portfolio3.jpg';
import Portfolio4 from '../../assets/Portfolio4.jpg';
import Portfolio5 from '../../assets/Portfolio5.jpg';
import Portfolio6 from '../../assets/Portfolio6.jpg';

const works = () => {
    return (
        <section id='works'>
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying attention to details</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="" />
                <img src={Portfolio2} alt="" className="" />
                <img src={Portfolio3} alt="" className="" />
                <img src={Portfolio4} alt="" className="" />
                <img src={Portfolio5} alt="" className="" />
                <img src={Portfolio6} alt="" className="" />
            </div>
        </section>

    );
}

export default works;