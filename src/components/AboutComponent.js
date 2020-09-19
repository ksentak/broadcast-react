import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// Images
import aboutImage from '../assets/img/MM1_Home.jpg';

class AboutComponent extends Component {
	render() {
		return (
			<div className='AboutComponent'>
				{/* Page Title */}
				<div className='title-section text-left text-sm-center'>
					<h1>
						About <span className='main-color'>Matt Murphy</span>
					</h1>
				</div>
				<div className='container'>
					{/* Bio */}
					<div className='row pl-50px-sm'>
						{/* Bio Text */}
						<div className='col-md-6 pl-sm-5'>
							<p>
								Matt Murphy is a play-by-play broadcaster and versatile communications
								professional. Since 2018, Matt has served as the television voice of the
								Delaware Blue Coats, the NBA G League affiliate of the Philadelphia 76ers.
								He is the youngest play-by-play broadcaster in the NBA G League at age 24.
							</p>
							<p>
								In August 2018, Matt was named the inaugural radio voice of the Alvernia
								University football program in Reading, PA. He completed his second season
								with the Golden Wolves in 2019, hosting the Alvernia Football Coach’s Show
								with Head Coach Ralph Clark in addition to his role as the team’s
								play-by-play broadcaster.
							</p>
							<p>
								Matt is a 2018 graduate of Fordham University in New York City. A proud
								product of Fordham’s WFUV Sports—a program with a storied history that
								includes Hall of Famers Vin Scully and Mike Breen—Matt called Fordham
								basketball, baseball and football, while also covering the New York Jets,
								New York Rangers and New Jersey Devils as a radio beat reporter. He hosted
								“One on One”—New York’s longest-running sports call-in show—on 90.7 FM and
								covered Super Bowl LII in Minneapolis, MN. He received the 2018 Marty
								Glickman Award for excellence in play-by-play broadcasting.
							</p>
							<p>Matt is a South Jersey native.</p>
						</div>
						{/* Bio Photo */}
						<div className='col-md-6'>
							<LazyLoad height={550} offset={200}>
								<img
									src={aboutImage}
									alt='Matt Headshot'
									className='img-fluid about-img pl-none pl-md-3'
								/>
							</LazyLoad>
						</div>
					</div>

					<hr className='separator mt-5' />

					{/* Experience & Education */}
					<div className='row'>
						<div className='col-12'>
							<h3 className='text-uppercase pb-2 mb-0 text-left text-sm-center'>
								Experience & Education
							</h3>
						</div>

						{/* Resume Box 1 */}
						<div className='col-lg-6 m-15px-tb'>
							<div className='resume-box'>
								<ul>
									<li>
										<div className='icon'>
											<FontAwesomeIcon icon={faBriefcase} fixedWidth />
										</div>
										<span className='time open-sans-font text-uppercase'>
											Sep 2018 - Present
										</span>
										<h5 className='poppins-font text-uppercase'>
											Play-by-Play Broadcaster; Communications Associate
											<span className='place open-sans-font'>Delaware Blue Coats</span>
										</h5>
										<p className='open-sans-font'>
											-Play-by-Play, Communications, Social Media for the Delaware Blue
											Coats, NBA G League affiliate of the Philadelphia 76ers.
											<br />
											-Youngest play-by-play broadcaster in the NBA G League.
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* Resume Box 2 */}
						<div className='col-lg-6 m-15px-tb'>
							<div className='resume-box'>
								<ul>
									<li>
										<div className='icon'>
											<FontAwesomeIcon icon={faBriefcase} fixedWidth />
										</div>
										<span className='time open-sans-font text-uppercase'>
											Sep 2018 - Present
										</span>
										<h5 className='poppins-font text-uppercase'>
											Play-by-Play Broadcaster
											<span className='place open-sans-font'>
												Alvernia University Football
											</span>
										</h5>
										<p className='open-sans-font'>
											-Radio play-by-play broadcaster for Alvernia University football on
											Sports Radio 1240.
											<br />
											-Weekly host of "The Ralph Clark Show" with Alvernia head football
											coach Ralph Clark and players.
											<br />
											-Named inaugural voice of football program in 2018.
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* Resume Box 3 */}
						<div className='col-lg-6 m-15px-tb'>
							<div className='resume-box'>
								<ul>
									<li>
										<div className='icon'>
											<FontAwesomeIcon icon={faBriefcase} fixedWidth />
										</div>
										<span className='time open-sans-font text-uppercase'>
											Jan 2017 - Sep 2018
										</span>
										<h5 className='poppins-font text-uppercase'>
											Sports Radio Production Assistant/Board Operator
											<span className='place open-sans-font'>Westwood One</span>
										</h5>
										<p className='open-sans-font'>
											-Production assistant for Westwood One's national radio coverage of
											the NFL and NCAA Basketball.
											<br />
											-Board operator for coverage of the 2018 Winter Olympic Games.{' '}
											<br />
											-Highlight editor for events such as the Super Bowl and the NCAA
											Tournament.
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* Resume Box 4 */}
						<div className='col-lg-6 m-15px-tb'>
							<div className='resume-box'>
								<ul>
									<li>
										<div className='icon'>
											<FontAwesomeIcon icon={faBriefcase} fixedWidth />
										</div>
										<span className='time open-sans-font text-uppercase'>
											Oct 2014 - May 2018
										</span>
										<h5 className='poppins-font text-uppercase'>
											Sports Reporter, Play-by-Play
											<span className='place open-sans-font'>WFUV Public Radio</span>
										</h5>
										<p className='open-sans-font'>
											-Marty Glickman Award for Excellence in Play-by-Play broadcasting
											(2018)
											<br />
											-On-Air experience: PxP, Host, Sideline
											<br />
											-Beat Reporter: New York Jets, New York Rangers, New Jersey Devils
											<br />
											-Special assignments: Super Bowl LII, NBA Draft 16 17, NCAA
											Tournament 16 17, NFL Draft 16
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* Resume Box 5 */}
						<div className='col-lg-6 m-15px-tb'>
							<div className='resume-box'>
								<ul>
									<li>
										<div className='icon'>
											<FontAwesomeIcon icon={faGraduationCap} fixedWidth />
										</div>
										<span className='time open-sans-font text-uppercase'>
											Sep 2014 - May 2018
										</span>
										<h5 className='poppins-font text-uppercase'>
											Bachelor's Degree, Economics, Communications
											<span className='place open-sans-font'>Fordham University</span>
										</h5>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutComponent;
