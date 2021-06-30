import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SamplesItem from './SamplesItem';
import portfolioImg1 from '../assets/img/portfolio/mm_portfolio_img1.jpg';
import portfolioImg2 from '../assets/img/portfolio/mm_portfolio_img2.jpg';
import portfolioImg3 from '../assets/img/portfolio/mm_portfolio_img3.jpg';
import portfolioImg4 from '../assets/img/portfolio/mm_portfolio_img4.jpg';
import portfolioImg5 from '../assets/img/portfolio/mm_portfolio_img5.jpg';
import portfolioImg6 from '../assets/img/portfolio/mm_portfolio_img6.jpg';
import portfolioImg7 from '../assets/img/portfolio/mm_portfolio_img7.jpg';
import portfolioImg8 from '../assets/img/portfolio/mm_portfolio_img8.jpg';
import portfolioImg9 from '../assets/img/portfolio/mm_portfolio_img9.jpg';

const SamplesComponent = () => {
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);

	const toggle1 = () => setModal1(!modal1);
	const toggle2 = () => setModal2(!modal2);

	return (
		<div className="PortfolioComponent">
			{/* Page Title */}
			<div className="title-section text-left text-sm-center">
				<h1>
					Sample <span className="main-color">Work</span>
				</h1>
			</div>
			<div className="container">
				<div className="row text-center">
					{/* Project 1 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="2021 NBA G League Bubble Highlights"
							projectImg={portfolioImg1}
							imgAlt="2021 NBA G League Bubble Highlights"
							isYoutubeVideo
							isSpotify={false}
							videoId="OxVNaZy_8nc"
						/>
					</div>

					{/* Project 2 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="NBA G League TV Play-by-Play"
							projectImg={portfolioImg2}
							imgAlt="NBA G League TV Play-by-Play Youtube Thumbnail"
							isYoutubeVideo
							isSpotify={false}
							videoId="xhhR3QVmKqU"
						/>
					</div>

					{/* Project 3 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="Solo TV Call At 2021 G League Bubble"
							projectImg={portfolioImg3}
							imgAlt="Solo TV Call At 2021 G League Bubble Thumbnail"
							isYoutubeVideo
							isSpotify={false}
							videoId="QaGhFim4Rvk"
						/>
					</div>

					{/* Project 4 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="NBA G League Radio Play-by-Play"
							projectImg={portfolioImg4}
							imgAlt="NBA G League Radio Play-by-Play Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/nba-g-league-pxp-2019-20-season-delaware-blue-coats"
						/>
					</div>

					{/* Project 5 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="CFB Radio Play-by-Play Highlights"
							projectImg={portfolioImg5}
							imgAlt="CFB Radio Play-by-Play Highlights Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/alvernia-football-2019-sounds-of-the-first-3-weeks-jakib-media-sports"
						/>
					</div>

					{/* Project 6 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="CFB Radio 1st MAC Win Highlights"
							projectImg={portfolioImg6}
							imgAlt="CFB Radio 1st MAC Win Highlights Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/alvernia-fb-game-winning-td-and-final-call-first-mac-win-101219-jakib-media-sports"
						/>
					</div>

					{/* Project 7 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="Hosting on 76ers Podcast Network"
							projectImg={portfolioImg7}
							imgAlt="Hosting on 76ers Podcast Network Soundcloud"
							isYoutubeVideo={false}
							isSpotify={true}
							url="https://open.spotify.com/episode/3AmsZXqPn3P1MWWR7jPlRs?si=lBCNDTd1TKW9pvMy5gA75A"
						/>
					</div>

					{/* Project 8 */}
					<div className="col-lg-6 col-md-6">
						<p className="project-title">Writing</p>

						<div
							className="portfolio-item portfolio-writing mx-auto"
							onClick={toggle1}
						>
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center" />
							</div>
							<LazyLoad>
								<img
									className="img-fluid portfolio-img portfolio-img-lg"
									src={portfolioImg8}
									alt="Writing sample"
								/>
							</LazyLoad>
						</div>
					</div>
					{/* Modal 1 */}
					<Modal
						size="lg"
						isOpen={modal1}
						toggle={toggle1}
						className="portfolio-modal"
						role="dialog"
					>
						<div className="modal-content">
							<button
								type="button"
								className="close"
								onClick={toggle1}
								aria-label="Close"
							>
								<span aria-hidden="true">
									<FontAwesomeIcon icon={faTimes} />
								</span>
							</button>
							<div className="modal-body text-center">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-12 col-sm-10">
											{/* Portfolio Modal - Title */}
											<h2 className="portfolio-modal-title text-uppercase mb-3">
												Writing
											</h2>
											{/* Portfolio Modal - Media */}
											<img
												className="img-fluid"
												src={portfolioImg8}
												alt="Writing sample"
											/>
											<a
												target="_blank"
												href="https://www.nba.com/sixers/news/coming-home"
												rel="noopener noreferrer"
											>
												<button className="mt-3 btn btn-about">
													Read article
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>

					{/* Project 9 */}
					<div className="col-lg-6 col-md-6">
						<p className="project-title">Writing</p>

						<div
							className="portfolio-item portfolio-writing mx-auto"
							onClick={toggle2}
						>
							<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
								<div className="portfolio-item-caption-content text-center" />
							</div>
							<LazyLoad>
								<img
									className="img-fluid portfolio-img portfolio-img-lg"
									src={portfolioImg9}
									alt="Writing sample"
								/>
							</LazyLoad>
						</div>
					</div>
					{/* Modal 2 */}
					<Modal
						size="lg"
						isOpen={modal2}
						toggle={toggle2}
						className="portfolio-modal"
						role="dialog"
					>
						<div className="modal-content">
							<button
								type="button"
								className="close"
								onClick={toggle2}
								aria-label="Close"
							>
								<span aria-hidden="true">
									<FontAwesomeIcon icon={faTimes} />
								</span>
							</button>
							<div className="modal-body text-center">
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-12 col-sm-10">
											{/* Portfolio Modal - Title */}
											<h2 className="portfolio-modal-title text-uppercase mb-3">
												Writing
											</h2>
											{/* Portfolio Modal - Media */}
											<img
												className="img-fluid"
												src={portfolioImg9}
												alt="Writing sample"
											/>
											<a
												target="_blank"
												href="https://www.nba.com/sixers/tyrese-maxey-shines-76ers-game-6-victory-vs-hawks "
												rel="noopener noreferrer"
											>
												<button className="mt-3 btn btn-about">
													Read article
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default SamplesComponent;
