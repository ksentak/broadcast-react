import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface TestimonialProps {
	testimonialText: string;
	testimonialAuthor: string;
	testimonialFirm: string;
	imgPath: string;
	imgAlt: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
	testimonialText,
	testimonialAuthor,
	testimonialFirm,
	imgPath,
	imgAlt
}) => (
	<div className="col-12">
		<div className="testimonial-item">
			<div className="testimonial-content">
				{/* Testimonial Image */}
				<div className="testimonial-picture">
					<img src={imgPath} alt={imgAlt} className="img-fluid" />
				</div>

				{/* Testimonial Text */}
				<div className="testimonial-text">
					<p>{testimonialText}</p>
				</div>
				{/* Author */}
				<div className="testimonial-author-info">
					<h5 className="testimonial-author">{testimonialAuthor}</h5>
					<p className="testimonial-firm">{testimonialFirm}</p>
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
);

export default Testimonial;
