import "./style.scss";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/img/Home-Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import background from "../../assets/img/4.jpg";

function Hero() {
    return (
        <div className="hero" id="home">
            <img className="testback" src={background} alt="" />
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
                    Creative Web Developer Offering 4+ Years Of Experience
                    Providing High-Impact Web Solutions For Many Different
                    Organizations.
                </p>
                <div className="contact-section">
                    <h3>get in touch:</h3>
                    <div class="contact-info">
                        <div class="info-item">
                            <div class="detail">
                                <a href="">
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                </a>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="detail">
                                <a href="">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="detail">
                                <a href="">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="detail">
                                <a href="">
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
