import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouseLaptop,
    faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBootstrap,
    faJsSquare,
    faReact,
    faSquarespace,
} from "@fortawesome/free-brands-svg-icons";
function Services() {
    return (
        <div className="services-section" id="services">
            <div className="heading">
                <h2 data-aos="fade-up">
                    My <span>Services</span>
                </h2>
            </div>

            <div className="box-container">
                <div data-aos="fade-up" className="service-item">
                    <FontAwesomeIcon icon={faHouseLaptop} />
                    <h3>HTML & CSS Responsive Web Design</h3>
                    <p>
                        Responsive web design uses HTML and CSS to create
                        websites that adapt to different devices. It's all about
                        flexible layouts and design that adjust to various
                        screen sizes, providing a consistent user experience.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="service-item">
                    <FontAwesomeIcon icon={faReact} />
                    <h3>React JS Development</h3>
                    <p>
                        React JS is a popular JavaScript library for building
                        user interfaces. It simplifies the process of building
                        fast and efficient web apps, making it a favored choice
                        for front-end development.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="service-item">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <h3>Javascript Development</h3>
                    <p>
                        JavaScript development involves creating interactive and
                        dynamic web applications. It's a vital skill for web
                        developers and a core technology for building modern,
                        responsive, and engaging digital experiences.
                    </p>
                </div>

                <div data-aos="fade-up" className="service-item">
                    <FontAwesomeIcon icon={faBootstrap} />
                    <h3>PSD to Bootstrap Services</h3>
                    <p>
                        PSD to Bootstrap services involve the conversion of
                        Photoshop (PSD) design files into responsive web designs
                        using Bootstrap, a popular front-end framework. It
                        streamlines the transition from static design mockups to
                        dynamic, mobile-friendly websites.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="service-item">
                    <FontAwesomeIcon icon={faSquarespace} />
                    <h3>Squarespace Development</h3>
                    <p>
                        Squarespace development involves creating and
                        customizing websites using the Squarespace platform.
                        It's a user-friendly, all-in-one solution for building
                        beautiful websites without extensive coding.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="service-item">
                    <FontAwesomeIcon icon={faUniversalAccess} />
                    <h3>WCAG Services</h3>
                    <p>
                        WCAG (Web Content Accessibility Guidelines) these
                        services help organizations make their online platforms
                        more inclusive and user-friendly for individuals with
                        disabilities, aligning with legal requirements and best
                        practices for digital accessibility.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
