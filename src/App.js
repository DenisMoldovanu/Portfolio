import Header from "./components/navbar/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";
import "./assets/styles/main.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Hero />
                <About />
                <Qualification />
                <Services />
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

export default App;
