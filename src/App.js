import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import classes from "./App.module.css";
import { Link } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div className={classes.demobigcontent}>
      <Layout>
        <Header
          className={classes.headercolor}
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Alatsi"
              }}
              to='/'>
              Saif Mujawar
            </Link>
          }
          scroll>
          <Navigation className={classes.menu}>
            <Link
              style={{ textDecoration: "none" }}
              to='/resume'
              rel='noopener noreferrer'
              target='_blank'>
              Resume
            </Link>
            <Link style={{ textDecoration: "none" }} to='/projects'>
              Projects
            </Link>
            <Link style={{ textDecoration: "none" }} to='/aboutme'>
              About
            </Link>
            <Link style={{ textDecoration: "none" }} to='/contact'>
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "#000" }} to='/'>
              Saif Mujawar
            </Link>
          }>
          <Navigation>
            <Link
              style={{ textDecoration: "none" }}
              to='/resume'
              rel='noopener noreferrer'
              target='_blank'>
              Resume
            </Link>
            <Link style={{ textDecoration: "none" }} to='/projects'>
              Projects
            </Link>
            <Link style={{ textDecoration: "none" }} to='/aboutme'>
              About
            </Link>
            <Link style={{ textDecoration: "none" }} to='/contact'>
              Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
