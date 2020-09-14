import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Player from 'react-lazy-youtube';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// Images
import Ruocco from '../assets/img/RyanRuocco_Testimonial.jpg';
import McGinnis from '../assets/img/TomMcGinnis.jpg';
import MM2 from '../assets/img/MM2_Home.jpg';
import MM3 from '../assets/img/MM3_Home.jpeg';

class HomeComponent extends Component {
	render() {
		return (
			<div className='HomeComponent'>
				<div className='container'>
					<div className='row homeRow1'>
						<div className='home-text col-sm-12 col-md-6 text-center pb-4'>
							<h1 className='text-center poppins-font home-title'>
								Matt <span className='main-color'>Murphy</span>
							</h1>
							<p>
								Matt Murphy is a play-by-play broadcaster and versatile communications
								professional. Since 2018, Matt has served as the television voice of the
								Delaware Blue Coats, the NBA G League affiliate of the Philadelphia 76ers.
								He is the youngest play-by-play broadcaster in the NBA G League at age 24.
							</p>
							<Link to='/about'>
								<button className='btn btn-about'>More about Matt</button>
							</Link>
						</div>
						<div className='home-video col-sm-12 col-md-6'>
							<Player
								id='xhhR3QVmKqU'
								imageSize='maxresdefault'
								className='youtube-video-home'
								styles={{
									height: '330px',
									width: '95%'
								}}
							/>
							{/* <iframe
								width='560'
								height='330'
								src='https://www.youtube.com/embed/xhhR3QVmKqU'
								title='Matt Murphys YouTube Highlight Reel'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe> */}
						</div>
					</div>

					<hr className='separator mt-5' />
					<div className='row'>
						<div className='col-sm-6'>
							<img
								src={MM2}
								alt='Matt interviewing Adam Silver'
								className='img-fluid home-img'
							/>
						</div>
						<div className='col-sm-6'>
							<img
								src={MM3}
								alt='Matt interviewing Adam Silver'
								className='img-fluid home-img'
							/>
						</div>
					</div>
					<hr className='separator mt-5' />

					{/* Testimonials */}
					<div className='row'>
						<div className='col-12'>
							<div className='p-20'></div>

							{/* Testimonial 1 */}
							<div className='testimonial-item'>
								<div className='testimonial-content'>
									{/* Testimonial Image */}
									<div className='testimonial-picture'>
										<LazyLoad offset={200}>
											<img src={Ruocco} alt='Ryan Ruocco' className='img-fluid' />
										</LazyLoad>
									</div>

									{/* Testimonial Text */}
									<div className='testimonial-text'>
										<p>
											Matt Murphy is a talented young play-by-play man. He’s driven,
											approachable and incredibly skilled. I’m so excited to watch this
											young man’s career.
										</p>
									</div>
									{/* Author */}
									<div className='testimonial-author-info'>
										<h5 className='testimonial-author'>Ryan Ruocco</h5>
										<p className='testimonial-firm'>ESPN, YES Network, DAZN</p>
									</div>

									<div className='testimonial-icon'>
										<FontAwesomeIcon icon={faQuoteLeft} fixedWidth />
									</div>

									<div className='testimonial-icon-big'>
										<FontAwesomeIcon icon={faQuoteRight} fixedWidth />
									</div>
								</div>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className='col-12'>
							<div className='testimonial-item'>
								<div className='testimonial-content'>
									{/* Testimonial Image */}
									<div className='testimonial-picture'>
										<LazyLoad offset={200}>
											<img src={McGinnis} alt='Tom McGinnis' className='img-fluid' />
										</LazyLoad>
									</div>

									{/* Testimonial Text */}
									<div className='testimonial-text'>
										<p>
											Matt Murphy is a can’t miss prospect. A five-tool player that’s
											ready to step into any organization and contribute in many ways.
											He’s a talented, personable, highly-skilled broadcaster who’s not
											afraid of hard work. I’ve worked with Matt and see a bright future
											for him!
										</p>
									</div>
									{/* Author */}
									<div className='testimonial-author-info'>
										<h5 className='testimonial-author'>Tom McGinnis</h5>
										<p className='testimonial-firm'>
											25-year radio voice of the Philadelphia 76ers
										</p>
									</div>

									<div className='testimonial-icon'>
										<FontAwesomeIcon icon={faQuoteLeft} fixedWidth />
									</div>

									<div className='testimonial-icon-big'>
										<FontAwesomeIcon icon={faQuoteRight} fixedWidth />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeComponent;
