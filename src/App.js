import React from 'react';
import NavMenu from "./components/Navmenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from "../src/components/Footer"
import './App.css';

function App() {
  return (

    <div className="app-container">
        
      <Router>
      
        <NavMenu className="navbar"/>
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
        </Switch>

      </Router>
       <Footer className="footer"/>
    </div>

  );
}

export default App;
