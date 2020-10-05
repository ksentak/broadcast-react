import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Timeline } from 'react-twitter-widgets';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
// Images
import contactImage1 from '../assets/img/MM4_Contact.jpeg';
import contactImage2 from '../assets/img/MM5_Contact.jpg';

const ContactComponent = () => {
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
					{/* Row 1 */}
					<div className='col-12 col-lg-5 contact-info'>
						<h3 className='text-uppercase contact-title mb-0 ft-wt-600 pb-3'>
							Let's connect
						</h3>
						<p className='open-sans-font custom-span-contact position-relative'>
							<a
								href='mailto:mattmurphy165@gmail.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon
									icon={faEnvelopeOpen}
									className='position-absolute contact-icon'
								/>
							</a>
							<span className='d-block'>Send an email</span>MattMurphy165@gmail.com
						</p>
						<p className='open-sans-font custom-span-contact position-relative'>
							<a
								href='https://twitter.com/Matt_Murphy04'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className='position-absolute contact-icon'
								/>
							</a>
							<span className='d-block'>Follow on twitter</span>@Matt_Murphy04
						</p>
					</div>

					<div className='col-12 col-lg-7'>
						<LazyLoad offset={200}>
							<img
								src={contactImage1}
								alt='Matt looking at phone'
								className='contact-img'
							/>
						</LazyLoad>
					</div>
				</div>
				{/* Row 2 */}
				<div className='row mt-4 mb-4'>
					<div className='col-12'>
						<h3>Recent Press</h3>
						<h6 className='mt-3'>
							<a
								href='https://thepaintedlines.com/legends-of-broadcasting-marc-zumoff-tom-mcginnis-matt-murphy-on-the-art-of-the-play-by-play/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Legends of Broad(casting): Marc Zumoff, Tom McGinnis & Matt Murphy on the
								Art of the Play-by-Play
							</a>
						</h6>
						<h6 className='mt-3'>
							<a
								href='https://wfuv.org/content/air-matt-murphy'
								target='_blank'
								rel='noopener noreferrer'
							>
								Off the Air: The Legacy of WFUV Sports - Matt Murphy
							</a>
						</h6>
						<h6 className='mt-3'>
							<a
								href='https://nbacallups.com/2020/08/21/interview-matt-murphy-delaware-blue-coats/'
								target='_blank'
								rel='noopener noreferrer'
							>
								NBA Call-Ups: An Interview with Matt Murphy
							</a>
						</h6>
					</div>
				</div>
				{/* Row 3 */}
				<div className='row mt-4'>
					<div className='col-12 col-lg-5'>
						<LazyLoad offset={200}>
							<Timeline
								dataSource={{
									sourceType: 'profile',
									screenName: 'Matt_Murphy04'
								}}
								options={{
									height: '450',
									width: '400',
									theme: 'dark'
								}}
							/>
						</LazyLoad>
					</div>

					<div className='col-12 col-lg-7 d-none d-lg-block'>
						<LazyLoad offset={200}>
							<img
								src={contactImage2}
								alt='Walking with Blue Coats player'
								className='img-fluid contact-img2'
							/>
						</LazyLoad>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactComponent;
