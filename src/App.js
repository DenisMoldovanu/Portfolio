import Header from "./components/navbar/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import "./assets/styles/main.scss";
import Qualification from "./components/qualification/Qualification";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Hero />
                <About />
                <Qualification />
                <Services />
            </div>
        </div>
    );
}

export default App;
