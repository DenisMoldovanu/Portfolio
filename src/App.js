import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTerminal } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/navbar/Header";
import Hero from "./components/hero/Hero";
import "./assets/styles/main.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Hero />
            </div>
        </div>
    );
}

export default App;
