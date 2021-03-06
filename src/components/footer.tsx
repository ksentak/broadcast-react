import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faYoutube,
	faSoundcloud,
	faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
	<div className="Footer">
		<div className="col-12 text-center">
			<div className="footer-socials">
				<ul className="social-list">
					{/* Twitter */}
					<li className="social-inline-item">
						<a
							href="https://twitter.com/Matt_Murphy04"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faTwitter} fixedWidth />
						</a>
					</li>
					{/* Youtube */}
					<li className="social-inline-item">
						<a
							href="https://www.youtube.com/channel/UCf9pK1FolJR8f6MoSxjAToA"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faYoutube} fixedWidth />
						</a>
					</li>
					{/* Sound Cloud */}
					<li className="social-inline-item">
						<a
							href="https://soundcloud.com/matt_murphy04"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faSoundcloud} fixedWidth />
						</a>
					</li>
					{/* LinkedIn */}
					<li className="social-inline-item">
						<a
							href="https://www.linkedin.com/in/matt-murphy-04/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
						</a>
					</li>
				</ul>
			</div>
			<div className="col-12">
				<div className="footer-copyright text-center">
					<p>©{new Date().getFullYear()} All rights reserved. Matt Murphy.</p>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
