import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import HomePage from "../home/HomePage";
import Contact from "../contact/Contact";
import GameDetails from "../gamedetails/GameDetails";

function Layout() {
    return (
        <Router>
            <Navbar bg="light" variant="light">
            <Nav >
                <NavLink to="/" exact className="nav-link">Home</NavLink>
            </Nav>
            <Nav>
                <NavLink to="/contact/" className="nav-link">Contact</NavLink>
            </Nav>
        </Navbar>
        <Container>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" component={Contact}/>
                <Route path="/games/:id" component={GameDetails} />
            </Switch>
        </Container>
        </Router> 
    );
}

export default Layout;