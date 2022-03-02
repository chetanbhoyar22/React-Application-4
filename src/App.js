import React from "react";
import Header from "./Routing/Header";
import Home from "./Routing/Home";
import Students from "./Routing/Students";
import Contact from "./Routing/Contact";
import PageNotFound from "./Routing/PageNotFound";
import Edit from "./Routing/Edit";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

const App = () => {
    return (
    <div id="screen">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/home"/> } />
                <Route path="/home" element={< Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students-desc/id" element={<Edit />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
        </Router>
    </div>);
};
export default App;