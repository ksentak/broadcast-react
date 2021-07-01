import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const HomeComponent = () => (
	<div className="HomeComponent">
		<div className="container">
			<div className="row homeRow1">
				<div className="home-text col-sm-12 col-lg-6 text-center pb-4">
					<h1 className="text-center poppins-font home-title">
						Matt <span className="main-color">Murphy</span>
					</h1>
					<p>
						Matt Murphy is a play-by-play broadcaster and versatile content
						professional. Since 2018, Matt has served as the television voice of
						the Delaware Blue Coats, the NBA G League affiliate of the
						Philadelphia 76ers. At age 22, he became the youngest play-by-play
						broadcaster in the NBA G League.
					</p>
					<Link to="/about">
						<button className="btn btn-about">More about Matt</button>
					</Link>
				</div>
				<div className="home-video col-sm-12 col-lg-6">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=OxVNaZy_8nc"
						className="youtube-video-home"
						height="330px"
						width="95%"
					/>
				</div>
			</div>

			<hr className="separator" />

			<div className="row text-center text-md-none pt-3 pb-3">
				<div className="col-sm-6">
					<StaticImage
						src="../images/MM2_Home.jpg"
						alt="Matt interviewing Adam Silver"
						className="img-fluid home-img pb-2 pb-sm-none"
					/>
				</div>
				<div className="col-sm-6">
					<StaticImage
						src="../images/MM3_Home.jpeg"
						alt="Matt interviewing Adam Silver"
						className="img-fluid home-img pt-2 pt-sm-none"
					/>
				</div>
			</div>

			<hr className="separator" />

			{/* Testimonials */}
			<div className="row">
				<div className="col-12">
					<div className="p-20" />

					{/* Testimonial 1 */}
					<div className="testimonial-item">
						<div className="testimonial-content">
							{/* Testimonial Image */}
							<div className="testimonial-picture">
								<StaticImage
									src="../images/RyanRuocco_Testimonial.jpg"
									alt="Ryan Ruocco"
									className="img-fluid"
								/>
							</div>

							{/* Testimonial Text */}
							<div className="testimonial-text">
								<p>
									Matt Murphy is a talented young play-by-play man. He’s driven,
									approachable and incredibly skilled. I’m so excited to watch
									this young man’s career.
								</p>
							</div>
							{/* Author */}
							<div className="testimonial-author-info">
								<h5 className="testimonial-author">Ryan Ruocco</h5>
								<p className="testimonial-firm">ESPN, YES Network, DAZN</p>
							</div>

							<div className="testimonial-icon">
								<FontAwesomeIcon icon={faQuoteLeft} fixedWidth />
							</div>

							<div className="testimonial-icon-big">
								<FontAwesomeIcon icon={faQuoteRight} fixedWidth />
							</div>
						</div>
					</div>
				</div>

				{/* Testimonial 2 */}
				<div className="col-12">
					<div className="testimonial-item">
						<div className="testimonial-content">
							{/* Testimonial Image */}
							<div className="testimonial-picture">
								<StaticImage
									src="../images/TomMcGinnis.jpg"
									alt="Tom McGinnis"
									className="img-fluid"
								/>
							</div>

							{/* Testimonial Text */}
							<div className="testimonial-text">
								<p>
									Matt Murphy is a can’t miss prospect. A five-tool player
									that’s ready to step into any organization and contribute in
									many ways. He’s a talented, personable, highly-skilled
									broadcaster who’s not afraid of hard work. I’ve worked with
									Matt and see a bright future for him!
								</p>
							</div>
							{/* Author */}
							<div className="testimonial-author-info">
								<h5 className="testimonial-author">Tom McGinnis</h5>
								<p className="testimonial-firm">
									25-year radio voice of the Philadelphia 76ers
								</p>
							</div>

							<div className="testimonial-icon">
								<FontAwesomeIcon icon={faQuoteLeft} fixedWidth />
							</div>

							<div className="testimonial-icon-big">
								<FontAwesomeIcon icon={faQuoteRight} fixedWidth />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default HomeComponent;
