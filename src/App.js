import React from 'react';
import './App.css';
import Binomial from "./distributions/Binomial";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


const distrMap = {
    'binom': <Binomial/>,
    'bernoulli': <p/>
};

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {currentGraph: 'binom'};
        this.handleSelectDistribution = this.handleSelectDistribution.bind(this);
    }

    handleSelectDistribution(event) {
        this.setState({currentGraph: event});
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Statistic and probability</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Discrete distributions" id="basic-nav-dropdown">
                                <NavDropdown.Item eventKey="binom"
                                                  onSelect={this.handleSelectDistribution}>Binomial</NavDropdown.Item>
                                <NavDropdown.Item eventKey="bernoulli"
                                                  onSelect={this.handleSelectDistribution}>Bernoulli</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {distrMap[this.state.currentGraph]}
            </div>
        )
    }
}

export default App;
