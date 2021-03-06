import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Nav from "./common/nav/Nav";

import Service from './Service/Service';
import Team from './Team/Team';
import Press from './Press/Press';
import Contact from './Contact/Contact';

function App() {
    return (
        <Router>
            <Nav />
            <Route exact path="/" component={Service} />
            <Route path="/service" component={Service} />
            <Route path="/team" component={Team} />
            <Route path="/press" component={Press} />
            <Route path="/contact" component={Contact} />
            {/* NOT FOUND */}
        </Router>
    );
}

export default App;
