import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexRoutes from "./utils/Routes/IndexRoutes";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Container maxWidth="md">
                <IndexRoutes />
            </Container>
        </Router>
    );
};

export default App;
