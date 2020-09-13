import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import contactImage1 from '../assets/img/MM1_Home.jpg';

class ContactComponent extends Component {
	render() {
		return (
			<div className='ContactComponent'>
				{/* Page Title */}
				<div className='title-section text-left text-sm-center'>
					<h1>
						Contact <span className='main-color'>Matt Murphy</span>
					</h1>
				</div>
				{/* Contact Info */}
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-lg-5 contact-info'>
							<h3 className='text-uppercase'>Let's connect</h3>
							<p class='open-sans-font custom-span-contact position-relative'>
								<a href='mailto:mattmurphy165@gmail.com' target='_blank'>
									<FontAwesomeIcon
										icon={faEnvelopeOpen}
										className='position-absolute contact-icon'
									/>
								</a>
								<span class='d-block'>Send an email</span>MattMurphy165@gmail.com
							</p>
							<p class='open-sans-font custom-span-contact position-relative'>
								<a href='https://twitter.com/Matt_Murphy04' target='_blank'>
									<FontAwesomeIcon
										icon={faTwitter}
										className='position-absolute contact-icon'
									/>
								</a>
								<span class='d-block'>Follow on twitter</span>@Matt_Murphy04
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactComponent;
