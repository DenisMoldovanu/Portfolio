import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import portfolio1 from "../../assets/img/portfolio-1.png";
import portfolio2 from "../../assets/img/portfolio-2.png";
import portfolio3 from "../../assets/img/portfolio-3.png";
import portfolio4 from "../../assets/img/portfolio-4.png";
import portfolio5 from "../../assets/img/portfolio-5.png";
import portfolio6 from "../../assets/img/portfolio-6.png";
function Portfolio() {
    return (
        <div className="portfolio-section">
            <div class="heading">
                <h2>
                    My <span>Portfolio</span>
                </h2>
            </div>

            <div class="gallery">
                <ul class="controls">
                    <li class="button btn active" data-filter="all">
                        all
                    </li>
                    <li class="button btn" data-filter="web">
                        web development
                    </li>
                    <li class="button btn" data-filter="design">
                        graphic design
                    </li>
                    <li class="button btn" data-filter="photography">
                        photography
                    </li>
                </ul>

                <div class="box-container">
                    <div class="portfolio-item image web">
                        <img src={portfolio1} alt="Portfolio" />
                        <div class="content">
                            <h4>web development</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/img/portfolio-1.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item image web">
                        <img src={portfolio2} alt="Portfolio" />
                        <div class="content">
                            <h4>web development</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/img/portfolio-2.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item image design">
                        <img src={portfolio3} alt="Portfolio" />
                        <div class="content">
                            <h4>graphic design</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/img/portfolio-3.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item image design">
                        <img src={portfolio4} alt="Portfolio" />
                        <div class="content">
                            <h4>graphic design</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/img/portfolio-4.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-item image photography">
                        <img src={portfolio5} alt="Portfolio" />
                        <div class="content">
                            <h4>photography</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/img/portfolio-5.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item image photography">
                        <img src={portfolio6} alt="Portfolio" />
                        <div class="content">
                            <h4>photography</h4>
                            <a
                                data-effect="mfp-newspaper"
                                href="assets/images/Portfolio/portfolio-6.png"
                                class="view-btn"
                            >
                                <FontAwesomeIcon icon={faEye} />
                                Go To Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
