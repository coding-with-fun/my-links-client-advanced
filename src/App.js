import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />

            <div
                style={{
                    height: "100vh",
                }}
            >
                <h1>Hello World!!</h1>
            </div>
        </Router>
    );
};

export default App;
