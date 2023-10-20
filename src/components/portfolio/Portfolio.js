import React, { useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { projects, categories } from "../../helpers/utils";

function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="portfolio-section" id="portfolio">
            <div className="heading">
                <h2>
                    My <span>Portfolio</span>
                </h2>
            </div>

            <div className="gallery">
                <ul className="controls">
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={
                                activeCategory === category
                                    ? "button btn active"
                                    : "button btn"
                            }
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>

                <div className="box-container">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`portfolio-item image ${project.category.toLowerCase()}`}
                        >
                            <img
                                src={require(`../../assets/img/portfolio-${project.id}.png`)}
                                alt="Portfolio"
                            />
                            <div className="content">
                                <h4>{project.title}</h4>
                                <a
                                    data-effect="mfp-newspaper"
                                    href={`assets/img/portfolio-${project.id}.png`}
                                    className="view-btn"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                    Go To Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
