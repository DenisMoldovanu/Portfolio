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
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
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
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
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
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
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
                                Front-End Developer <br />
                                It System
                            </h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
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
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
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
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Qualification;
