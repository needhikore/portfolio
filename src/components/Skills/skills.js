import React from "react";
import './skills.css';
import DEng from '../../assets/datae.png';
import DSci from '../../assets/datas.png';
import DAna from '../../assets/dataa.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a Data Science Master's student at George Washington University with a strong background in Python, SQL, and Google Cloud Platform. I have experience as a Research Assistant, utilizing web scraping, NLP, and statistical methods for data analysis, and as a System Engineer, focusing on automated testing and SQL integration for enhanced test script efficiency.<br /></span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={DSci} alt="DataScience" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Science</h2>
                        <p>This is a demo text.I am a Data Science Master's student at George Washington University with a cloud Platform</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DEng} alt="DataEngineering" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Engineering</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DAna} alt="DataAnalytics" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analytics</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills