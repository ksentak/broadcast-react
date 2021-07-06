import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SpotifyPlayer from './spotifyPlayer';

interface SamplesItemProps {
	projectTitle: string;
	projectImg: string;
	imgAlt: string;
	isYoutubeVideo: boolean;
	isSpotify: boolean;
	url: string;
}

const SamplesItem: React.FC<SamplesItemProps> = ({
	projectTitle,
	projectImg,
	imgAlt,
	isYoutubeVideo,
	isSpotify,
	url
}) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			{/* Project */}
			<p className="project-title">{projectTitle}</p>
			<div className="portfolio-item mx-auto" onClick={toggle}>
				<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
					<div className="portfolio-item-caption-content text-center" />
				</div>
				<img
					className="img-fluid portfolio-img"
					src={projectImg}
					alt={imgAlt}
				/>
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
										<ReactPlayer
											url={url}
											className="youtube-video-modal"
											width="auto"
											height="330px"
										/>
									) : isSpotify ? (
										<SpotifyPlayer />
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
