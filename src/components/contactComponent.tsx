import React from 'react';
import RecentPress from './contactRecentPress';
import { StaticImage } from 'gatsby-plugin-image';
import { Timeline } from 'react-twitter-widgets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const ContactComponent = () => (
	<div className="ContactComponent">
		{/* Page Title */}
		<div className="title-section text-left text-sm-center">
			<h1>
				Contact <span className="main-color">Matt Murphy</span>
			</h1>
		</div>
		{/* Contact Info */}
		<div className="container">
			<div className="row">
				{/* Row 1 */}
				<div className="col-12 col-lg-5 contact-info">
					<h3 className="text-uppercase contact-title mb-0 ft-wt-600 pb-3">
						Let's connect
					</h3>
					<p className="open-sans-font custom-span-contact position-relative">
						<a
							href="mailto:mattmurphy165@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={faEnvelopeOpen}
								className="position-absolute contact-icon"
							/>
						</a>
						<span className="d-block">Send an email</span>
						MattMurphy165@gmail.com
					</p>
					<p className="open-sans-font custom-span-contact position-relative">
						<a
							href="https://twitter.com/Matt_Murphy04"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className="position-absolute contact-icon"
							/>
						</a>
						<span className="d-block">Follow on twitter</span>
						@Matt_Murphy04
					</p>
				</div>

				<div className="col-12 col-lg-7">
					<StaticImage
						src="../images/MM4_Contact.jpeg"
						alt="Matt looking at phone"
						className="contact-img"
					/>
				</div>
			</div>
			{/* Row 2 */}
			<div className="row mt-4 mb-4">
				<div className="col-12">
					<h3>Recent Press</h3>

					<RecentPress
						link="https://thepaintedlines.com/legends-of-broadcasting-marc-zumoff-tom-mcginnis-matt-murphy-on-the-art-of-the-play-by-play/"
						text="	Legends of Broad(casting): Marc Zumoff, Tom McGinnis & Matt Murphy
							on the Art of the Play-by-Play"
					/>
					<RecentPress
						link="https://wfuv.org/content/air-matt-murphy"
						text="Off the Air: The Legacy of WFUV Sports - Matt Murphy"
					/>
					<RecentPress
						link="https://nbacallups.com/2020/08/21/interview-matt-murphy-delaware-blue-coats/"
						text="NBA Call-Ups: An Interview with Matt Murphy"
					/>
					<RecentPress
						link="https://www.thebiglead.com/posts/matt-murphy-press-pass-podcast-01f3b0z2f75b/"
						text="The Big Lead: Play-by-Play Broadcaster Matt Murphy Talks the
							G-League Bubble, Radio vs. TV Broadcasting, and More"
					/>
				</div>
			</div>
			{/* Row 3 */}
			<div className="row mt-4">
				<div className="col-12 col-lg-5">
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
				</div>

				<div className="col-12 col-lg-7 d-none d-lg-block">
					<StaticImage
						src="../images/MM5_Contact.jpg"
						alt="Walking with Blue Coats player"
						className="img-fluid contact-img2"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default ContactComponent;
