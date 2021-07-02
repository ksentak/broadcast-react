import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface SamplesWritingProps {
	imgSrc: string;
	articleLink: string;
}

const SamplesWriting: React.FC<SamplesWritingProps> = ({
	imgSrc,
	articleLink
}) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	return (
		<>
			<div className="col-lg-6 col-md-6">
				<p className="project-title">Writing</p>

				<div
					className="portfolio-item portfolio-writing mx-auto"
					onClick={toggle}
				>
					<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
						<div className="portfolio-item-caption-content text-center" />
					</div>

					<StaticImage
						className="img-fluid portfolio-img portfolio-img-lg"
						src={imgSrc}
						alt="Writing sample"
					/>
				</div>
			</div>
			{/* Modal 1 */}
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
										Writing
									</h2>
									{/* Portfolio Modal - Media */}
									<img
										className="img-fluid"
										src={imgSrc}
										alt="Writing sample"
									/>
									<a
										target="_blank"
										href={articleLink}
										rel="noopener noreferrer"
									>
										<button className="mt-3 btn btn-about">Read article</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default SamplesWriting;
