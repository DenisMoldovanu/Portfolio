import React, { useEffect, useRef, useState } from "react";

const SkillBox = ({ label, percent }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div data-aos="fade-up" className="box" ref={ref}>
            <h3>
                {label}
                <span> {percent}% </span>
            </h3>
            <div className="progress-bar">
                <span
                    style={{
                        width: inView ? `${percent}%` : "0%",
                        transition: "width 1.5s ease-in-out"
                    }}
                ></span>
            </div>
        </div>
    );
};

const Skills = () => {
    const leftSkills = [
        { label: "HTML5", percent: 100 },
        { label: "CSS3", percent: 100 },
        { label: "JavaScript", percent: 90 },
        { label: "WCAG", percent: 90 },
        { label: "TypeScript", percent: 70 },
        { label: "GSAP Animations", percent: 70 }
    ];

    const rightSkills = [
        { label: "jQuery", percent: 90 },
        { label: "Bootstrap", percent: 90 },
        { label: "React", percent: 80 },
        { label: "Squarespace", percent: 70 },
        { label: "Tailwind CSS", percent: 90 },
        { label: "Dynamics 365 Business Central", percent: 60 }
    ];

    return (
        <div className="skill-container">
            <div className="heading">
                <h2 data-aos="fade-up">
                    My <span>Skills</span>
                </h2>
            </div>

            <div className="skills">
                <div className="skill-item item1">
                    {leftSkills.map((skill, index) => (
                        <SkillBox
                            key={index}
                            label={skill.label}
                            percent={skill.percent}
                        />
                    ))}
                </div>

                <div className="skill-item item2">
                    {rightSkills.map((skill, index) => (
                        <SkillBox
                            key={index}
                            label={skill.label}
                            percent={skill.percent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
