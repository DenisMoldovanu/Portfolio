import "./style.scss";
import { TypeAnimation } from "react-type-animation";
import hero from "../../assets/img/hero.jpeg";
function Hero() {
    return (
        <div className="hero">
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
                        style={{ fontSize: "1.5em", display: "inline-block" }}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />
                </h1>
                <p>
                    Creative Web Developer Offering 4+ Years Of Experience
                    Providing High-Impact Web Solutions For Many Different
                    Organizations.
                </p>
            </div>
            <div className="img-box">
                <img src={hero} alt="Denis" />
            </div>
        </div>
    );
}

export default Hero;
