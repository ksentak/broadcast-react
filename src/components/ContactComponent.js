import React, { Component } from 'react';

class ContactComponent extends Component {
	render() {
		return (
			<div className='ContactComponent'>
				{/* Page Title */}
				<div className='title-section text-left text-sm-center'>
					<h1>Contact Matt Murphy</h1>
				</div>
				{/* Contact Info */}
				<div className='row'>
					<div className='col-12 col-lg-5 contact-info'>
						<h3 className='text-uppercase'>Let's connect</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactComponent;
