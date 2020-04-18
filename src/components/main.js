import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import ContactPage from './contact';
import ProjectPage from './projects';
import ResumePage from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/portfolio" component={ProjectPage} />
        <Route path="/resume" component={ResumePage} />
    </Switch>
)
export default Main;