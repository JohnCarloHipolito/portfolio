import './App.css';
import NavigationBar from "./component/NavigationBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./component/Home";
import AboutMe from "./component/AboutMe";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/about" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}


export default App;
