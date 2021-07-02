import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ResumeBox from './resumeBox';

const AboutComponent = () => (
	<div className="AboutComponent">
		{/* Page Title */}
		<div className="title-section text-left text-sm-center">
			<h1>
				About <span className="main-color">Matt Murphy</span>
			</h1>
		</div>
		<div className="container">
			{/* Bio */}
			<div className="row pl-50px-sm">
				{/* Bio Text */}
				<div className="col-md-6 pl-sm-5">
					<p>
						Matt Murphy is a play-by-play broadcaster and versatile content
						professional. Since 2018, Matt has served as the television voice of
						the Delaware Blue Coats, the NBA G League affiliate of the
						Philadelphia 76ers. At age 22, he became the youngest play-by-play
						broadcaster in the NBA G League.
					</p>
					<p>
						Matt is a 2018 graduate of Fordham University in New York City. A
						proud product of Fordham’s WFUV Sports—a program with a storied
						history that includes Hall of Famers Vin Scully and Mike Breen—Matt
						called Fordham basketball, baseball and football, while also
						covering the New York Jets, New York Rangers and New Jersey Devils
						as a radio beat reporter. He hosted “One on One”—New York’s
						longest-running sports call-in show—on 90.7 FM and covered Super
						Bowl LII in Minneapolis, MN. He received the 2018 Marty Glickman
						Award for excellence in play-by-play broadcasting.
					</p>
					<p>
						Matt is proud to be among the Fordham and WFUV alumni serving as
						professional basketball play-by-play broadcasters: Mike Breen
						(ESPN/ABC, New York Knicks), Spero Dedes (TNT, NBA TV), Ryan Ruocco
						(ESPN/ABC, Brooklyn Nets), Chris Carrino (Brooklyn Nets).
					</p>
					<p>
						In August 2018, Matt was named the inaugural radio voice of the
						Alvernia University football program in Reading, PA. He completed
						his second season with the Golden Wolves in 2019, hosting the
						Alvernia Football Coach’s Show with Head Coach Ralph Clark in
						addition to his role as the team’s play-by-play broadcaster.
					</p>

					<p>Matt is a South Jersey native.</p>
				</div>
				{/* Bio Photo */}
				<div className="col-md-6">
					<StaticImage
						src="../images/MM1_Home.jpg"
						alt="Matt Headshot"
						className="img-fluid about-img pl-none pl-md-3"
					/>
				</div>
			</div>

			<hr className="separator mt-5" />

			{/* Experience & Education */}
			<div className="row">
				<div className="col-12">
					<h3 className="text-uppercase pb-2 mb-0 text-left text-sm-center">
						Experience & Education
					</h3>
				</div>

				{/* Resume Box 1 */}
				<ResumeBox
					role="Digital Content Coordinator"
					company="Philadelphia 76ers"
					date="May 2021 - Present"
				/>

				{/* Resume Box 2 */}
				<ResumeBox
					role="Play-by-Play Broadcaster; Communications"
					company="Delaware Blue Coats"
					date="Sep 2018 - Present"
					accomplishment1="-Harris Blitzer Sports & Entertainment: Philadelphia
          76ers/Delaware Blue Coats/76ers Gaming Club (GC)."
					accomplishment2="-Play-by-Play, Communications, Social Media for the Delaware
          Blue Coats, NBA G League affiliate of the Philadelphia 76ers."
					accomplishment3="-Youngest play-by-play broadcaster in the NBA G League."
				/>

				{/* Resume Box 3 */}
				<ResumeBox
					role="Play-by-Play Broadcaster"
					company="Alvernia University Football"
					date="Sep 2018 - Present"
					accomplishment1="-Radio play-by-play broadcaster for Alvernia University
          football on Sports Radio 1240."
					accomplishment2={`-Weekly host of "The Ralph Clark Show" with Alvernia head
          football coach Ralph Clark and players.`}
					accomplishment3="-Named inaugural voice of football program in 2018."
				/>

				{/* Resume Box 4 */}
				<ResumeBox
					role="Sports Radio Production Assistant/Board Operator"
					company="Westwood One"
					date="Jan 2017 - Sep 2018"
					accomplishment1="-Production assistant for Westwood One's national radio
          coverage of the NFL and NCAA Basketball."
					accomplishment2="-Board operator for coverage of the 2018 Winter Olympic Games."
					accomplishment3="-Highlight editor for events such as the Super Bowl and the
          NCAA Tournament."
				/>

				{/* Resume Box 5 */}
				<ResumeBox
					role="Sports Reporter, Play-by-Play"
					company="WFUV Public Radio"
					date="Oct 2014 - May 2018"
					accomplishment1="-Marty Glickman Award for Excellence in Play-by-Play
          broadcasting (2018)"
					accomplishment2="-On-Air experience: PxP, Host, Sideline"
					accomplishment3="-Beat Reporter: New York Jets, New York Rangers, New Jersey
          Devils"
					accomplishment4='-Special assignments: Super Bowl LII, NBA Draft 16 17, NCAA
          Tournament 16 17, NFL Draft 16"'
				/>

				{/* Resume Box 6 */}
				<ResumeBox
					role="Bachelor's Degree, Economics, Communications"
					company="Fordham University"
					date="Sep 2014 - May 2018"
					isSchool
				/>
			</div>
		</div>
	</div>
);

export default AboutComponent;
