import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WeeklyAd from "./components/WeeklyAd";
import Recipes from "./components/Recipes";
import Coupons from "./components/Coupons";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/WeeklyAd" element={<WeeklyAd />} />
                    </Routes>
                    <Routes>
                        <Route path="/Recipes" element={<Recipes />} />
                    </Routes>
                    <Routes>
                        <Route path="/Coupons" element={<Coupons />} />
                    </Routes>
                    <Routes>
                        <Route path="/Register" element={<Register />} />
                    </Routes>
                    <Routes>
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
