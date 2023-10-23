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
                <h2>
                    My <span>Services</span>
                </h2>
            </div>

            <div className="box-container">
                <div className="service-item">
                    <FontAwesomeIcon icon={faHouseLaptop} />
                    <h3>HTML & CSS Responsive Web Design</h3>
                    <p>
                        Responsive web design uses HTML and CSS to create
                        websites that adapt to different devices, ensuring they
                        look great on desktops, tablets, and smartphones. It's
                        all about flexible layouts and design that adjust to
                        various screen sizes, providing a consistent user
                        experience.
                    </p>
                </div>

                <div className="service-item">
                    <FontAwesomeIcon icon={faReact} />
                    <h3>React JS Development</h3>
                    <p>
                        React JS is a popular JavaScript library for building
                        user interfaces. It enables developers to create dynamic
                        and interactive web applications with ease. With its
                        component-based architecture and virtual DOM, React
                        simplifies the process of building fast and efficient
                        web apps, making it a favored choice for front-end
                        development.
                    </p>
                </div>

                <div className="service-item">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <h3>Javascript Development</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div className="service-item">
                    <FontAwesomeIcon icon={faBootstrap} />
                    <h3>PSD to Bootstrap Services</h3>
                    <p>
                        JavaScript is a versatile programming language widely
                        used for web development. It enables developers to add
                        dynamic functionality, interactivity, and real-time
                        features to websites. From creating interactive forms to
                        building complex web applications, JavaScript plays a
                        crucial role in enhancing the user experience and is a
                        foundational skill for web developers.
                    </p>
                </div>

                <div className="service-item">
                    <FontAwesomeIcon icon={faSquarespace} />
                    <h3>Squarespace Development</h3>
                    <p>
                        Squarespace development involves creating and
                        customizing websites using the Squarespace platform.
                        It's a user-friendly, all-in-one solution for building
                        beautiful websites without extensive coding. Developers
                        use Squarespace's templates and design tools to craft
                        visually appealing and functional sites, making it a
                        popular choice for businesses, portfolios, and online
                        stores.
                    </p>
                </div>

                <div className="service-item">
                    <FontAwesomeIcon icon={faUniversalAccess} />
                    <h3>WCAG Services</h3>
                    <p>
                        WCAG (Web Content Accessibility Guidelines) services
                        involve the assessment and enhancement of digital
                        content, such as websites and applications, to ensure
                        they conform to accessibility standards. These services
                        help organizations make their online platforms more
                        inclusive and user-friendly for individuals with
                        disabilities, aligning with legal requirements and best
                        practices for digital accessibility.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
