import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function Qualification() {
    return (
        <div className="qualification-section">
            <div class="heading">
                <h2>
                    My <span>Qualification</span>
                </h2>
            </div>

            <div class="box-container">
                <div class="education">
                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div class="content">
                            <span>2015 - 2016</span>
                            <h3>engineering</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>

                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div class="content">
                            <span>2016 - 2017</span>
                            <h3>engineering</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>

                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <div class="content">
                            <span>2017 - 2018</span>
                            <h3>engineering</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="experience">
                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div class="content">
                            <span>2018 - 2019</span>
                            <h3>front-end development</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>

                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div class="content">
                            <span>2019 - 2020</span>
                            <h3>front-end development</h3>
                            <p>
                                Lorem Ipsum Dolor Sit Amet Consectetur
                                Adipisicing Elit. Vitae Vel Quasi Consectetur
                                Expedita Ipsam Similique Maiores Ipsa? Error,
                                Debitis Ullam.
                            </p>
                        </div>
                    </div>

                    <div class="experience-item">
                        <div className="icon-block">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div class="content">
                            <span>2020 - 2021</span>
                            <h3>front-end development</h3>
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
