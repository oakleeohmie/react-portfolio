import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Projects from './projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Projects} />
    </Switch >
)
export default Main;