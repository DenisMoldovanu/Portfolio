import Header from "./components/navbar/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import "./assets/styles/main.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Hero />
                <About />
            </div>
        </div>
    );
}

export default App;
