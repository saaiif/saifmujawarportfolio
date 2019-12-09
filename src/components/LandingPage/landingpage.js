import React, { Component } from "react";
import classes from "./landingpage.module.css";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
 render() {
  return (
   <div className={classes.landingmain}>
    <Grid className={classes.grid}>
     <Cell col={12}>
      <img className={classes.avatar} src='/myimg/front.jpg' alt='avatar' />
      <div className={classes.bannerText}>
       <h1>React Frontend Developer</h1>

       <hr />
       <p>HTML5/CSS3 | JavaScript | React JS | Redux</p>

       <div className={classes.socialCircle}>
        <a
         href='https://www.linkedin.com/in/saif-mujawar-🇮🇳-0205b7138'
         target='_blank'
         rel='noopener noreferrer'
         className={classes.socialLinks}>
         <span className={classes.sronly}>LinkedIN</span>
         <i className='fab fa-linkedin'></i>
        </a>

        <a
         href='https://github.com/saaiif'
         target='_blank'
         rel='noopener noreferrer'
         className={classes.socialLinks}>
         <span className={classes.sronly}>Github</span>

         <i className='fab fa-github-square'></i>
        </a>
       </div>
      </div>
     </Cell>
    </Grid>
   </div>
  );
 }
}

export default LandingPage;
