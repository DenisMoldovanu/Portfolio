import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import photo from "../../assets/img/profile3.JPG";
// Import your Skills component
import Skills from "../skills/skills";

function About({ yearsOfExperience }) {
    const [birthdate] = useState(new Date("1994-08-20")); // Change this to the birthdate you want
    const [currentYear] = useState(new Date().getFullYear());
    const [age, setAge] = useState(0);

    useEffect(() => {
        const calculateAge = () => {
            const birthYear = birthdate.getFullYear();
            const age = currentYear - birthYear;
            setAge(age);
        };
        calculateAge();
    }, [birthdate, currentYear]);

    return (
        <div className="about-section" id="about">
            <div className="box-container">
                <div className="img-box">
                    <img data-aos="fade-right" src={photo} alt="" />
                    <div className="info hidden-xm">
                        <h4>
                            Age: <span>{age}</span>
                        </h4>
                        <h4>
                            Gender: <span>Male</span>
                        </h4>
                        <h4>
                            Language:
                            <span>Romanian, Russian, English</span>
                        </h4>
                        <h4>
                            Work: <span>Front-End developer</span>
                        </h4>
                        <h4>
                            Freelance: <span>Available</span>
                        </h4>
                        <a
                            href={require("../../assets/img/CVMoldovanuDenis.pdf")}
                            download="resume.pdf"
                            className="btn"
                        >
                            Download CV <FontAwesomeIcon icon={faDownload} />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="content">
                    <h2>My Name Is Denis</h2>
                    <p>
                        Front-End Developer with{" "}
                        {yearsOfExperience}+ years of experience building responsive,
                        user-friendly websites and web applications. Skilled in React, JavaScript (ES6+), Tailwind CSS, and modern UI frameworks.
                        Delivered 30+ projects for global clients across e-commerce, SaaS, and corporate sectors.
                        Passionate about clean code, performance optimization, and accessibility (WCAG). Available for full-time remote work.
                    </p>
                    <div className="about-info">
                        <div className="info hidden-xd">
                            <h4>
                                Age: <span>{age}</span>
                            </h4>
                            <h4>
                                Gender: <span>Male</span>
                            </h4>
                            <h4>
                                Language:<span>Romanian, Russian, English</span>
                            </h4>
                            <h4>
                                Work: <span>Front-End developer</span>
                            </h4>
                            <h4>
                                Freelance: <span>Available</span>
                            </h4>
                            <a
                                href={require("../../assets/img/CVMoldovanuDenis.pdf")}
                                download="Resume.pdf"
                                className="btn"
                            >
                                Download CV{" "}
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
                        </div>
                        <div className="counting">
                            <div className="box">
                                <h1 className="count" data-count="4">
                                    {yearsOfExperience}+
                                </h1>
                                <h3>Years Of Experience</h3>
                            </div>

                            <div className="box">
                                <h1 className="count" data-count="100">
                                    30+
                                </h1>
                                <h3>projects completed</h3>
                            </div>

                            <div className="box">
                                <h1 className="count" data-count="80">
                                    20+
                                </h1>
                                <h3>happy clients</h3>
                            </div>

                            <div className="box">
                                <h1 className="count" data-count="20">
                                    12+
                                </h1>
                                <h3>Technologies and Stacks </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    );
}

export default About;
