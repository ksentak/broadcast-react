import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ReactPlayer from 'react-player/lazy';
import Testimonial from './testimonial';
import RyanRuocco from '../images/RyanRuocco_Testimonial.jpg';
import TomMcGinnis from '../images/TomMcGinnis.jpg';

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

			<div className="row text-center text-md-none py-3">
				<div className="col-sm-6">
					<StaticImage
						src="../images/MM2_Home.jpg"
						alt="Matt interviewing Adam Silver"
						className="img-fluid home-img mb-2 mb-sm-0"
					/>
				</div>
				<div className="col-sm-6">
					<StaticImage
						src="../images/MM3_Home.jpeg"
						alt="Matt interviewing Adam Silver"
						className="img-fluid home-img mt-2 mt-sm-0"
					/>
				</div>
			</div>

			<hr className="separator" />

			{/* Testimonials */}
			<div className="row">
				<Testimonial
					testimonialText="Matt Murphy is a talented young play-by-play man. He’s driven,
          approachable and incredibly skilled. I’m so excited to watch
          this young man’s career."
					testimonialAuthor="Ryan Ruocco"
					testimonialFirm="ESPN, YES Network, DAZN"
					imgPath={RyanRuocco}
					imgAlt="Ryan Ruocco"
				/>

				<Testimonial
					testimonialText="Matt Murphy is a can’t miss prospect. A five-tool player
          that’s ready to step into any organization and contribute in
          many ways. He’s a talented, personable, highly-skilled
          broadcaster who’s not afraid of hard work. I’ve worked with
          Matt and see a bright future for him!"
					testimonialAuthor="Tom McGinnis"
					testimonialFirm="25-year radio voice of the Philadelphia 76ers"
					imgPath={TomMcGinnis}
					imgAlt="Tom McGinnis"
				/>
			</div>
		</div>
	</div>
);

export default HomeComponent;
