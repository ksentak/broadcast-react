import React, { Component } from 'react';

// Img
import Ruocco from '../assets/img/RyanRuocco_Testimonial.jpg';
import McGinnis from '../assets/img/TomMcGinnis.jpg';

class HomeComponent extends Component {
	render() {
		return (
			<div className='HomeComponent'>
				<div className='row'>
					<div className='video col-sm-12 col-md-6 col-lg-5'>YOUTUBE VIDEO HERE</div>
					<div className='home-text col-sm-12 col-md-6 col-lg-7'>
						<h1>
							Matt <span className='main-color text-center'>Murphy</span>
						</h1>
						<p>
							Matt Murphy is a play-by-play broadcaster and versatile communications
							professional. Since 2018, Matt has served as the television voice of the
							Delaware Blue Coats, the NBA G League affiliate of the Philadelphia 76ers.
							He is the youngest play-by-play broadcaster in the NBA G League at age 24.
						</p>
					</div>
				</div>

				{/* Testimonials */}
				<div className='row'>
					<div className='col-xs-12 col-sm-12'>
						<div className='p-20'></div>

						{/* Testimonial 1 */}
						<div className='testimonial-item'>
							<div className='testimonial-content'>
								{/* Testimonial Image */}
								<div className='testimonial-picture'>
									<img src={Ruocco} alt='Ryan Ruocco' />
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
									<i className='fa fa-quote-left'></i>
								</div>

								<div className='testimonial-icon-big'>
									<i className='fa fa-quote-right'></i>
								</div>
							</div>
						</div>

						{/* Testimonial 2 */}
						<div className='testimonial-item'>
							<div className='testimonial-content'>
								{/* Testimonial Image */}
								<div className='testimonial-picture'>
									<img src={McGinnis} alt='Tom McGinnis' />
								</div>

								{/* Testimonial Text */}
								<div className='testimonial-text'>
									<p>
										Matt Murphy is a can’t miss prospect. A five-tool player that’s ready
										to step into any organization and contribute in many ways. He’s a
										talented, personable, highly-skilled broadcaster who’s not afraid of
										hard work. I’ve worked with Matt and see a bright future for him!
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
									<i className='fa fa-quote-left'></i>
								</div>

								<div className='testimonial-icon-big'>
									<i className='fa fa-quote-right'></i>
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
