import React, { Component } from 'react';

class HomeComponent extends Component {
	render() {
		return (
			<div className='HomeComponent'>
				<div className='row'>
					<div className='video col-sm-12 col-md-6 col-lg-5'>YOUTUBE VIDEO HERE</div>
					<div className='home-text col-sm-12 col-md-6 col-lg-7'>
						<h1>
							Matt <span className='main-color text-center'>Murphy</span>
						</h1>
						<p>
							Matt Murphy is a play-by-play broadcaster and versatile communications
							professional. Since 2018, Matt has served as the television voice of the
							Delaware Blue Coats, the NBA G League affiliate of the Philadelphia 76ers.
							He is the youngest play-by-play broadcaster in the NBA G League at age 24.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeComponent;
