import "./style.scss";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/img/profile4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import background from "../../assets/img/4.jpg";

function Hero({ yearsOfExperience }) {
    return (
        <div className="hero" id="home">
            <img className="imgbackground" src={background} alt="" />
            <div className="content">
                <h2>Hi There!</h2>
                <h1>
                    I Am a
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Frontend Developer",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "",
                            500,
                            "Frontend Developer",
                            1000,
                            "",
                            500,
                        ]}
                        wrapper="span"
                        speed={40}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />
                </h1>
                <p>
                    Passionate and results-driven front-end developer with{" "}
                    {yearsOfExperience} years of experience in designing and
                    implementing user-focused, responsive web applications.
                    Proficient in HTML, CSS, JavaScript, and modern frameworks
                    like React. Adept at collaborating with cross-functional
                    teams to deliver high-quality solutions, I have a strong
                    track record of turning design concepts into functional,
                    optimized websites and applications. With a focus on clean
                    code, performance, and accessibility, I’m committed to
                    continuous learning and staying up-to-date with the latest
                    industry trends and technologies.
                </p>
                <div className="contact-section">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="detail">
                                <a
                                    href="https://instagram.com/denismoldovannuu?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
                                    target="blank"
                                >
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="detail">
                                <a
                                    href="mailto:deniscreativsoft@gmail.com"
                                    target="blank"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="detail">
                                <a
                                    href="https://uk.linkedin.com/in/denis-moldovanu-7a3ab520b"
                                    target="blank"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="detail">
                                <a
                                    href="https://github.com/DenisMoldovanu"
                                    target="blank"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-box">
                <img src={hero} alt="Denis" />
            </div>
        </div>
    );
}

export default Hero;
