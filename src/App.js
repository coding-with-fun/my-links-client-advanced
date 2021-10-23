import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoutes from "./utils/Routes/IndexRoutes";

const App = () => {
    return (
        <Router>
            <Navbar />

            <div
                style={{
                    height: "100vh",
                }}
            >
                <IndexRoutes />
            </div>
        </Router>
    );
};

export default App;
