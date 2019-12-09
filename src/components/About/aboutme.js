import React, { Component } from 'react';
import classes from './aboutme.module.css';

class About extends Component {
	render() {
		return (
			<div>
				<section className={classes.success}>
					<div className={classes.container}>
						<div className={classes.row}>
							<div class='col-lg-12 text-center'>
								<h2>About Me</h2>
								<hr className={classes.starlight} />
							</div>
						</div>
						<div className={classes.row}>
							<div class='col-lg-8 col-lg-offset-2'>
								<p className={classes.aboutme}>
									Fresher Frontend React Web Developer using HTML/CSS,Javascript,React, Node.js with an emphasis on
									Frontend web development and mobile using React Native.Hands On Experienced in building basic
									applications, RESTful APIs using react router,axios. Common libraries of use: Axios, Redux,
									react-redux, react-router, redux- thunk. Common use of UI libraries:React-mdl
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default About;
