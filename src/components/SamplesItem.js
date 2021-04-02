import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import Player from 'react-lazy-youtube';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SamplesItem = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const {
		projectTitle,
		projectImg,
		imgAlt,
		isYoutubeVideo,
		videoId,
		url
	} = props;

	return (
		<>
			{/* Project */}
			<p className="project-title">{projectTitle}</p>
			<div className="portfolio-item mx-auto" onClick={toggle}>
				<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
					<div className="portfolio-item-caption-content text-center" />
				</div>
				<LazyLoad>
					<img
						className="img-fluid portfolio-img"
						src={projectImg}
						alt={imgAlt}
					/>
				</LazyLoad>
			</div>

			{/* Modal */}
			<Modal
				size="lg"
				isOpen={modal}
				toggle={toggle}
				className="portfolio-modal"
				role="dialog"
			>
				<div className="modal-content">
					<button
						type="button"
						className="close"
						onClick={toggle}
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
										{projectTitle}
									</h2>
									{/* Portfolio Modal - Media */}
									{isYoutubeVideo ? (
										<Player
											id={videoId}
											imageSize="maxresdefault"
											className="youtube-video-modal"
											styles={{
												height: '330px',
												width: 'auto'
											}}
										/>
									) : (
										<ReactPlayer url={url} width="auto" height="330px" />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default SamplesItem;
