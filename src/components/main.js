import React from "react";
import LandingPage from "./LandingPage/landingpage";
import Resume from "./Resume/resume";
import About from "./About/aboutme";
import Project from "./Project/projects";
import Contact from "./Contact/contact";
import { Switch, Route } from "react-router-dom";

let Main = () => {
 return (
  <Switch>
   <Route exact path='/' component={LandingPage} />
   <Route path='/aboutme' component={About} />
   <Route path='/resume' component={Resume} />
   <Route path='/projects' component={Project} />
   <Route path='/contact' component={Contact} />
  </Switch>
 );
};

export default Main;
