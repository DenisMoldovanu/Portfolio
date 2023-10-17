import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import photo from "../../assets/img/photo2.jpeg";
function About() {
    return (
        <div className="about-section">
            <div className="box-container">
                <div className="img-box">
                    <img src={photo} alt="" />
                </div>
                <div className="content">
                    <h2>My Name Is Denis</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae aut adipisci necessitatibus veniam,
                        provident vero architecto praesentium, non sequi libero
                        corrupti molestias. Architecto voluptate eligendi
                        maiores, error magni accusamus officia.
                    </p>
                    <div className="about-info">
                        <div className="info">
                            <h4>
                                Age: <span>29</span>
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
                            <a href="#download" class="btn">
                                Download CV{" "}
                                <FontAwesomeIcon icon={faDownload} />
                            </a>
                        </div>
                        <div className="counting">
                            <div class="box">
                                <h1 class="count" data-count="4">
                                    4+
                                </h1>
                                <h3>Years Of Experience</h3>
                            </div>

                            <div class="box">
                                <h1 class="count" data-count="100">
                                    100+
                                </h1>
                                <h3>projects completed</h3>
                            </div>

                            <div class="box">
                                <h1 class="count" data-count="80">
                                    80+
                                </h1>
                                <h3>happy clients</h3>
                            </div>

                            <div class="box">
                                <h1 class="count" data-count="20">
                                    20+
                                </h1>
                                <h3>awards won</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skill-container">
                <div class="heading">
                    <h2>
                        My <span>Skills</span>
                    </h2>
                </div>

                <div class="skills">
                    <div class="skill-item item1">
                        <div class="box">
                            <h3>
                                HTML5<span> 95% </span>{" "}
                            </h3>
                            <div class="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div class="box">
                            <h3>
                                CSS3<span> 90% </span>{" "}
                            </h3>
                            <div class="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div class="box">
                            <h3>
                                javascript<span> 85% </span>{" "}
                            </h3>
                            <div class="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                    </div>

                    <div class="skill-item item2">
                        <div class="box">
                            <h3>
                                JQuery<span> 75% </span>{" "}
                            </h3>
                            <div class="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div class="box">
                            <h3>
                                Bootstrap<span> 65% </span>{" "}
                            </h3>
                            <div class="progress-bar">
                                {" "}
                                <span></span>{" "}
                            </div>
                        </div>
                        <div class="box">
                            <h3>
                                PHP<span> 60% </span>{" "}
                            </h3>
                            <div class="progress-bar">
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