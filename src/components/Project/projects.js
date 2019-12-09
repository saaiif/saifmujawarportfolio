import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, CardActions, IconButton, Button, CardMenu, Card, CardText } from 'react-mdl';
import classes from './projects.module.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className={classes.projectGrid}>
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', backgroundColor: '#ffffff' }}>
            <CardTitle style={{ color: '#000', height: '160px' }}>FitBit</CardTitle>

            <img
              src='/projects/FitWatch.png'
              alt='todolist'
              style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '-50%', paddingTop: '-30%' }}
            />

            <CardText style={{ width: '100%', fontWeight: '700' }}>
              Meet the Fitbit Versa Special Edition— an all-day companion that helps you live your best life. This
              lightweight, water-resistant smartwatch empowers you to reach health and fitness goals with actionable
              insights, personalized guidance, on-screen workouts and more
            </CardText>
            <CardActions border>
              <a href='https://github.com/saaiif/fitwatch' rel='noopener noreferrer' target='_blank'>
                <Button colored>Github</Button>
              </a>
              <Button colored>Codepen</Button>
              <a href='https://happy-cray-151e1f.netlify.com/' rel='noopener noreferrer' target='_blank'>
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='sharp' />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', backgroundColor: '#ffffff' }}>
            <CardTitle style={{ color: '#000', height: '160px' }}>React Project #2</CardTitle>
            <img
              src='/projects/TodoList.png'
              alt='todolist'
              style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '-50%' }}
            />
            <CardText style={{ width: '100%', fontWeight: '700' }}>
              This To-Do-list app is best use for listing items like, grocery items,any ration list,any important task
              to be done and this todolist has benefit i.e, the list which is no more important can be replaced with new
              item or can either be deleted.
            </CardText>
            <CardActions border>
              <a href='https://github.com/saaiif/todolist' rel='noopener noreferrer' target='_blank'>
                <Button colored>Github</Button>
              </a>
              <Button colored>Codepen</Button>
              <a href='https://saiftodolist.netlify.com/' rel='noopener noreferrer' target='_blank'>
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: 'blue' }}>
              <IconButton name='sharp' />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          {/* <Card shadow={5} style={{minWidth:'450', margin:'auto',backgroundColor:'#ffffff'}}>
                  <CardTitle style={ {color:'#fff', height:'160px', background:'url(https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png) center / cover'}}>React Project #3</CardTitle>
                  <CardText>Lorem epsujkhsdjkd ashdhasjkdhjahdjkhas jdhjkasdhjkasdjkasdj ashhasjkdhjkasd hjkasdhk</CardText>
                  <CardActions border>
                     <Button colored>Github</Button>
                     <Button colored>Codepen</Button>
                     <Button colored>LiveDemo</Button>
                  </CardActions>
                  <CardMenu style={{color:'#fff'}}>
                     <IconButton name="sharp"/>
                  </CardMenu>
               </Card> */}
        </div>
      );
    }

    // Javascript project 1
    if (this.state.activeTab === 1) {
      return (
        <div className={classes.proGrid}>
          <Card shadow={5} style={{ minWidth: '350', margin: 'auto', backgroundColor: '#ffffff' }}>
            <CardTitle style={{ color: '#000', height: '160px' }}>FitBit</CardTitle>

            <img
              src='/projects/calculator.png'
              alt='calc'
              style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '-50%', paddingTop: '-30%' }}
            />

            <CardText style={{ width: '100%', fontWeight: '700' }}>
              A simple calculator App using HTML/CSS/Javascript
            </CardText>
            <CardActions border>
              <a href='https://github.com/saaiif/fitwatch' rel='noopener noreferrer' target='_blank'>
                <Button colored>Github</Button>
              </a>
              <Button colored>Codepen</Button>
              <a
                href='https://saaiif-jscalc.glitch.me/CalculatorApp%20JS/calc.html'
                rel='noopener noreferrer'
                target='_blank'>
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='sharp' />
            </CardMenu>
          </Card>

          {/* {project 2} */}
          <Card shadow={5} style={{ minWidth: '350', margin: 'auto', backgroundColor: '#ffffff' }}>
            <CardTitle style={{ color: '#000', height: '160px' }}>FitBit</CardTitle>

            <img
              src='/projects/Analogclock.png'
              alt='calc'
              style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '-50%', paddingTop: '-30%' }}
            />

            <CardText style={{ width: '100%', fontWeight: '700' }}>
              A simple calculator App using HTML/CSS/Javascript
            </CardText>
            <CardActions border>
              <a href='https://github.com/saaiif/fitwatch' rel='noopener noreferrer' target='_blank'>
                <Button colored>Github</Button>
              </a>
              <Button colored>Codepen</Button>
              <a href='https://saaiif-analogclock-1.glitch.me/clock.html' rel='noopener noreferrer' target='_blank'>
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='sharp' />
            </CardMenu>
          </Card>
        </div>
      );
    }

    // HTML/CSS
    if (this.state.activeTab === 2) {
      return (
        <div className={classes.proGrid}>
          <Card shadow={5} style={{ minWidth: '350', margin: 'auto', backgroundColor: '#ffffff' }}>
            <CardTitle style={{ color: '#000', height: '170px' }}>FitBit</CardTitle>

            <img
              src='/projects/htmlfinal.png'
              alt='calc'
              style={{ textAlign: 'center', width: '100%', height: '100%', marginTop: '-50%', paddingTop: '-30%' }}
            />

            <CardText style={{ width: '100%', fontWeight: '700' }}>
              A simple calculator App using HTML/CSS/Javascript
            </CardText>
            <CardActions border>
              <a href='https://github.com/saaiif/fitwatch' rel='noopener noreferrer' target='_blank'>
                <Button colored>Github</Button>
              </a>
              <Button colored>Codepen</Button>
              <a
                href='https://saaiif-htmlfinalcode-1.glitch.me/hmlFinalproject.html'
                rel='noopener noreferrer'
                target='_blank'>
                <Button colored>LiveDemo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='sharp' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div className={classes.categoryTab}>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{ textDecoration: 'none' }}>React</Tab>
          <Tab style={{ textDecoration: 'none' }}>JavaScript</Tab>
          <Tab style={{ textDecoration: 'none' }}>HTML/CSS</Tab>
        </Tabs>
        <section className={classes.projectsGrid}>
          <Grid className={classes.projectsGrid}>
            <Cell col={12}>
              <div className={classes.content}>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
