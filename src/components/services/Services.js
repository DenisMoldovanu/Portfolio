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
        <div className="services-section">
            <div class="heading">
                <h2>
                    My <span>Services</span>
                </h2>
            </div>

            <div class="box-container">
                <div class="service-item">
                    <FontAwesomeIcon icon={faHouseLaptop} />
                    <h3>HTML & CSS Responsive Web Design</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div class="service-item">
                    <FontAwesomeIcon icon={faReact} />
                    <h3>React JS Development</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div class="service-item">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <h3>Javascript Development</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div class="service-item">
                    <FontAwesomeIcon icon={faBootstrap} />
                    <h3>PSD to Bootstrap Services</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div class="service-item">
                    <FontAwesomeIcon icon={faSquarespace} />
                    <h3>Squarespace Development</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>

                <div class="service-item">
                    <FontAwesomeIcon icon={faUniversalAccess} />
                    <h3>WCAG Services</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex repellendus porro facilis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
