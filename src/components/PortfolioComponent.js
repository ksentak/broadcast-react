import React, { useState } from 'react';
import { Modal } from 'reactstrap';
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

const PortfolioComponent = (props) => {
	const { className = 'portfolio-modal' } = props;
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);
	const [modal3, setModal3] = useState(false);
	const [modal4, setModal4] = useState(false);
	const [modal5, setModal5] = useState(false);
	const [modal6, setModal6] = useState(false);
	const toggle1 = () => setModal1(!modal1);
	const toggle2 = () => setModal2(!modal2);
	const toggle3 = () => setModal3(!modal3);
	const toggle4 = () => setModal4(!modal4);
	const toggle5 = () => setModal5(!modal5);
	const toggle6 = () => setModal6(!modal6);

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
						<div className='portfolio-item mx-auto' onClick={toggle1}>
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
					{/* Modal 1 */}
					<Modal
						size='lg'
						isOpen={modal1}
						toggle={toggle1}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={toggle1}
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
					</Modal>

					{/* Project 2 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle2}>
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
					{/* Modal 2 */}
					<Modal
						size='lg'
						isOpen={modal2}
						toggle={toggle2}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								aria-label='Close'
								onClick={toggle2}
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
					</Modal>

					{/* Project 3 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle3}>
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
					{/* Modal 3 */}
					<Modal
						size='lg'
						isOpen={modal3}
						toggle={toggle3}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={toggle3}
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
					</Modal>

					{/* Project 4 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle4}>
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
					{/* Modal 4 */}
					<Modal
						size='lg'
						isOpen={modal4}
						toggle={toggle4}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={toggle4}
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
					</Modal>

					{/* Project 5 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle5}>
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
					{/* Modal 5 */}
					<Modal
						size='lg'
						isOpen={modal5}
						toggle={toggle5}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={toggle5}
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
					</Modal>

					{/* Project 6 */}
					<div className='col-lg-4 col-md-6'>
						<div className='portfolio-item mx-auto' onClick={toggle6}>
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
					{/* Modal 6 */}
					<Modal
						size='lg'
						isOpen={modal6}
						toggle={toggle6}
						className={className}
						role='dialog'
					>
						<div className='modal-content'>
							<button
								type='button'
								className='close'
								onClick={toggle6}
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
					</Modal>
				</div>
				<div class='col-12 col-md-8 offset-md-2 text-center photography pb-4'>
					<PhotoCarousel />
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
};

export default PortfolioComponent;
