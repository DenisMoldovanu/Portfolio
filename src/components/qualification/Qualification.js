import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function Qualification() {
    return (
        <div className="qualification-section" id="qualification">
            <div className="heading">
                <h2>
                    My <span>Qualification</span>
                </h2>
            </div>

            <div className="box-container">
                <div className="education">
                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="content">
                            <span>2010 - 2013</span>
                            <h3>
                                High School Diploma <br />
                                Elena Alistar Theoretical Lyceum of Arts
                            </h3>
                            <p>
                                Successful completion of secondary education,
                                signifying the acquisition of essential
                                knowledge and skills.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="content">
                            <span>2013 - 2016</span>
                            <h3>
                                BSc (Hons) Business and Administration <br />{" "}
                                State University of Moldova
                            </h3>
                            <p>
                                Students gain a strong foundation in business
                                principles and administration practices,
                                preparing them for diverse career opportunities
                                in the dynamic world of business.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div className="content">
                            <span>2017 - 2018</span>
                            <h3>
                                Web Development Course <br />
                                Udemy
                            </h3>
                            <p>
                                This Udemy course offers comprehensive training
                                in web development, covering HTML, CSS,
                                JavaScript, and more. Learn how to create
                                dynamic, interactive websites and gain essential
                                skills for a successful career in web
                                development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="content">
                            <span>2020 - 2021</span>
                            <h3>
                                Intership Front-End Developer <br />
                                It System
                            </h3>
                            <p>
                                As a front-end developer intern at IT System, I
                                was thrilled to be part of a dynamic team
                                working on cutting-edge web development
                                projects.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="content">
                            <span>2020 - Current</span>
                            <h3>
                                Freelance - Web Developer <br />
                                Upwork
                            </h3>
                            <p>
                                I'm a freelance web developer on Upwork,
                                passionate about crafting digital experiences.
                                With a keen eye for design and expertise in
                                HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="content">
                            <span>2021 - Curent</span>
                            <h3>
                                Front-End Developer <br />
                                CreativSoft
                            </h3>
                            <p>
                                I collaborate with a dynamic team to turn ideas
                                into visually stunning and functional web
                                solutions, making the digital world a more
                                visually appealing place, one website at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;
