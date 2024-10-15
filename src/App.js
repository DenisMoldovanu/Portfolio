import React, { useState, useEffect } from "react";
import Header from "./components/navbar/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import "./assets/styles/main.scss";

function App() {
    const [yearsOfExperience, setYearsOfExperience] = useState(4);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setYearsOfExperience((prevExperience) => prevExperience + 1);
        }, 1000 * 60 * 60 * 24 * 365); // 1 year in milliseconds

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="App">
            <Header />
            <Hero yearsOfExperience={yearsOfExperience} />
            <div className="container">
                <About yearsOfExperience={yearsOfExperience} />
                <Qualification />
                <Services />
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

export default App;
