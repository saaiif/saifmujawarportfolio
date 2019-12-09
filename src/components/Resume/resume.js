import React, { Component } from 'react';
// import {Grid,Cell} from 'react-mdl';
// import classes from './resume.module.css';
// import Education from './education';
class Resume extends Component {
  render() {
    return (
      <div>
        {/* <Grid>
               <Cell className={classes.leftSide} col={4}>
                  <div style={{textAlign:'center'}}>
                     <img src="/myimg/avatar.jpg" alt="avatar"/>
                  </div>
                  
                  <h2>Saif Mujawar</h2>
                  <h5>Objective</h5>
                  <p>My main aim is to get placed in well developed company where i can grow and share my skills and knowledge.</p>
                  <hr style={{borderTop:'3px solid #633fb2',width:'50%'}}/>
                  <h5>Address</h5>
                  <p>BTM 2nd Stage,Bengaluru 560029</p>
                  <hr style={{borderTop:'3px solid #633fb2',width:'50%'}}/>
               </Cell>
               <Cell className={classes.rightCell} col={8}>
               <h5>Education</h5>
               </Cell>
            </Grid>
         </div> */}

        {/* <iframe src="/resume/MyResume.pdf" target="_blank" type="application/pdf" style={{width:'100%',height:'650px'}}/> */}
        <iframe
          src='https://drive.google.com/file/d/1NQ7qYmw_uzFBvyHhETirf-yEbsLR_WWS/preview'
          title='resume'
          width='100%'
          height='650'
          px
        />
      </div>
    );
  }
}

export default Resume;
