import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import Player from 'react-lazy-youtube';
import ReactPlayer from 'react-player/lazy';
// Components
import PhotoCarousel from './PhotoCarousel';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Images
import portfolioImg1 from '../assets/img/portfolio/mm_portfolio_img1.jpg';
import portfolioImg2 from '../assets/img/portfolio/mm_portfolio_img2.jpg';
import portfolioImg3 from '../assets/img/portfolio/mm_portfolio_img3.jpg';
import portfolioImg4 from '../assets/img/portfolio/mm_portfolio_img4.jpg';
import portfolioImg5 from '../assets/img/portfolio/mm_portfolio_img5.jpg';
import portfolioImg6 from '../assets/img/portfolio/mm_portfolio_img6.jpg';

class PortfolioComponent extends Component {
	render() {
		return (
			<div className='PortfolioComponent'>
				{/* Page Title */}
				<div className='title-section text-left text-sm-center'>
					<h1>
						Sample <span className='main-color'>Work</span>
					</h1>
				</div>
				<div className='container'>
					<div className='row text-center'>
						{/* Project 1 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal1'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg1}
										alt='NBA G League TV Play-by-Play Youtube Thumbnail'
									/>
								</LazyLoad>
								<p className='project-title'>NBA G League TV Play-by-Play</p>
							</div>
						</div>

						{/* Project 2 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal2'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg2}
										alt='On Camera/Hosting Youtube Thumbnail'
									/>
								</LazyLoad>
								<p className='project-title'>On Camera/Hosting</p>
							</div>
						</div>
						{/* Project 3 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal3'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg3}
										alt='NBA G League Radio Play-by-Play Soundcloud'
									/>
								</LazyLoad>
								<p className='project-title'>NBA G League Radio Play-by-Play</p>
							</div>
						</div>
						{/* Project 4 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal4'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg4}
										alt='CFB Radio Play-by-Play Highlights Soundcloud'
									/>
								</LazyLoad>
								<p className='project-title'>CFB Radio Play-by-Play Highlights</p>
							</div>
						</div>
						{/* Project 5 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal5'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg5}
										alt='CFB Radio First MAC Win Highlights Soundcloud'
									/>
								</LazyLoad>
								<p className='project-title'>CFB Radio First MAC Win Highlights</p>
							</div>
						</div>
						{/* Project 6 */}
						<div className='col-lg-4 col-md-6'>
							<div
								className='portfolio-item mx-auto'
								data-toggle='modal'
								data-target='#portfolioModal6'
							>
								<div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
									<div className='portfolio-item-caption-content text-center text-white'></div>
								</div>
								<LazyLoad>
									<img
										className='img-fluid portfolio-img'
										src={portfolioImg6}
										alt='Hosting on 76ers Podcast Network Soundcloud'
									/>
								</LazyLoad>
								<p className='project-title'>Hosting on 76ers Podcast Network</p>
							</div>
						</div>
					</div>
					<div class='col-12 col-md-8 offset-md-2 text-center photography pb-4'>
						<PhotoCarousel />
					</div>
				</div>

				{/* Portfolio Modals */}
				{/* Portfolio Modal 1 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal1'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												NBA G League TV Play-by-Play
											</h2>
											{/* Portfolio Modal - Media */}
											<Player
												id='xhhR3QVmKqU'
												imageSize='maxresdefault'
												className='youtube-video-modal'
												styles={{
													height: '330px',
													width: 'auto'
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Portfolio Modal 2 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal2'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												On Camera/Hosting
											</h2>
											{/* Portfolio Modal - Media */}
											<Player
												id='WNuL9exqL94'
												imageSize='maxresdefault'
												className='youtube-video-modal'
												styles={{
													height: '330px',
													width: 'auto'
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 3 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal3'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												NBA G League Radio Play-by-Play
											</h2>
											{/* Portfolio Modal - Media */}
											<ReactPlayer
												url='https://soundcloud.com/matt_murphy04/nba-g-league-pxp-2019-20-season-delaware-blue-coats'
												width='auto'
												height='330px'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 4 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal4'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												CFB Radio Play-by-Play Highlights
											</h2>
											{/* Portfolio Modal - Media */}
											<ReactPlayer
												url='https://soundcloud.com/matt_murphy04/alvernia-football-2019-sounds-of-the-first-3-weeks-jakib-media-sports'
												width='auto'
												height='330px'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 5 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal5'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												CFB Radio First MAC Win Highlights
											</h2>
											{/* Portfolio Modal - Media */}
											<ReactPlayer
												url='https://soundcloud.com/matt_murphy04/alvernia-fb-game-winning-td-and-final-call-first-mac-win-101219-jakib-media-sports'
												width='auto'
												height='330px'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio Modal 6 */}
				<div
					className='portfolio-modal modal fade'
					id='portfolioModal6'
					tabIndex='-1'
					role='dialog'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-lg' role='document'>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
							>
								<span aria-hidden='true'>
									<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
								</span>
							</button>
							<div className='modal-body text-center'>
								<div className='container'>
									<div className='row justify-content-center'>
										<div className='col-12 col-sm-10'>
											{/* Portfolio Modal - Title */}
											<h2 className='portfolio-modal-title text-uppercase mb-3'>
												Hosting on 76ers Podcast Network
											</h2>
											{/* Portfolio Modal - Media */}
											<ReactPlayer
												url='https://soundcloud.com/sixers/coat-check-joe-richmond'
												width='auto'
												height='330px'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End of Modals */}
			</div>
		);
	}
}

export default PortfolioComponent;
