import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import photo from "../../assets/img/profile3.JPG";
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
                    <img src={photo} alt="" />
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
                <div className="content">
                    <h2>My Name Is Denis</h2>
                    <p>
                        A dedicated professional with a background in Business
                        Management and Administration, boasting{" "}
                        {yearsOfExperience} years of expertise as a Front-End
                        Developer. Proficient in the art of constructing and
                        enhancing web pages, driven by a deep enthusiasm for
                        transforming designs into captivating, user-friendly
                        experiences. Eagerly searching for fresh prospects and
                        demanding projects to further enhance my skill set.
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
            <div className="skill-container">
                <div className="heading">
                    <h2>
                        My <span>Skills</span>
                    </h2>
                </div>

                <div className="skills">
                    <div className="skill-item item1">
                        <div className="box">
                            <h3>
                                HTML5<span> 95% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                CSS3<span> 90% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                javascript<span> 85% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                WCAG<span> 80% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                    </div>

                    <div className="skill-item item2">
                        <div className="box">
                            <h3>
                                JQuery<span> 90% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                Bootstrap<span> 80% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                React<span> 75% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div className="box">
                            <h3>
                                Squarespace<span> 70% </span>{" "}
                            </h3>
                            <div className="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
