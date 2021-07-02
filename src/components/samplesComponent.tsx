import React from 'react';
import SamplesItem from './samplesItem';
import SamplesWriting from './samplesWriting';
import portfolioImg1 from '../assets/img/portfolio/mm_portfolio_img1.jpg';
import portfolioImg2 from '../assets/img/portfolio/mm_portfolio_img2.jpg';
import portfolioImg3 from '../assets/img/portfolio/mm_portfolio_img3.jpg';
import portfolioImg4 from '../assets/img/portfolio/mm_portfolio_img4.jpg';
import portfolioImg5 from '../assets/img/portfolio/mm_portfolio_img5.jpg';
import portfolioImg6 from '../assets/img/portfolio/mm_portfolio_img6.jpg';
import portfolioImg7 from '../assets/img/portfolio/mm_portfolio_img7.jpg';
import portfolioImg8 from '../assets/img/portfolio/mm_portfolio_img8.jpg';
import portfolioImg9 from '../assets/img/portfolio/mm_portfolio_img9.jpg';

const SamplesComponent = () => {
	return (
		<div className="PortfolioComponent">
			{/* Page Title */}
			<div className="title-section text-left text-sm-center">
				<h1>
					Sample <span className="main-color">Work</span>
				</h1>
			</div>
			<div className="container">
				<div className="row text-center">
					{/* Project 1 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="2021 NBA G League Bubble Highlights"
							projectImg={portfolioImg1}
							imgAlt="2021 NBA G League Bubble Highlights"
							isYoutubeVideo
							isSpotify={false}
							url="https://www.youtube.com/watch?v=OxVNaZy_8nc"
						/>
					</div>

					{/* Project 2 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="NBA G League TV Play-by-Play"
							projectImg={portfolioImg2}
							imgAlt="NBA G League TV Play-by-Play Youtube Thumbnail"
							isYoutubeVideo
							isSpotify={false}
							url="https://www.youtube.com/watch?v=xhhR3QVmKqU"
						/>
					</div>

					{/* Project 3 */}
					<div className="col-lg-4 col-md-6">
						<SamplesItem
							projectTitle="Solo TV Call At 2021 G League Bubble"
							projectImg={portfolioImg3}
							imgAlt="Solo TV Call At 2021 G League Bubble Thumbnail"
							isYoutubeVideo
							isSpotify={false}
							url="https://www.youtube.com/watch?v=QaGhFim4Rvk"
						/>
					</div>

					{/* Project 4 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="NBA G League Radio Play-by-Play"
							projectImg={portfolioImg4}
							imgAlt="NBA G League Radio Play-by-Play Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/nba-g-league-pxp-2019-20-season-delaware-blue-coats"
						/>
					</div>

					{/* Project 5 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="CFB Radio Play-by-Play Highlights"
							projectImg={portfolioImg5}
							imgAlt="CFB Radio Play-by-Play Highlights Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/alvernia-football-2019-sounds-of-the-first-3-weeks-jakib-media-sports"
						/>
					</div>

					{/* Project 6 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="CFB Radio 1st MAC Win Highlights"
							projectImg={portfolioImg6}
							imgAlt="CFB Radio 1st MAC Win Highlights Soundcloud"
							isYoutubeVideo={false}
							isSpotify={false}
							url="https://soundcloud.com/matt_murphy04/alvernia-fb-game-winning-td-and-final-call-first-mac-win-101219-jakib-media-sports"
						/>
					</div>

					{/* Project 7 */}
					<div className="col-lg-3 col-md-6">
						<SamplesItem
							projectTitle="Hosting on 76ers Podcast Network"
							projectImg={portfolioImg7}
							imgAlt="Hosting on 76ers Podcast Network Soundcloud"
							isYoutubeVideo={false}
							isSpotify={true}
							url="https://open.spotify.com/episode/3AmsZXqPn3P1MWWR7jPlRs?si=lBCNDTd1TKW9pvMy5gA75A"
						/>
					</div>

					{/* Project 8 */}
					<SamplesWriting
						imgSrc={portfolioImg8}
						articleLink="https://www.nba.com/sixers/news/coming-home"
					/>

					{/* Project 8 */}
					<SamplesWriting
						imgSrc={portfolioImg9}
						articleLink="https://www.nba.com/sixers/tyrese-maxey-shines-76ers-game-6-victory-vs-hawks "
					/>
				</div>
			</div>
		</div>
	);
};

export default SamplesComponent;
