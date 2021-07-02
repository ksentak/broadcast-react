import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

interface ResumeProps {
	role: string;
	company: string;
	date: string;
	accomplishment1?: string;
	accomplishment2?: string;
	accomplishment3?: string;
	accomplishment4?: string;
	isSchool?: boolean;
}

const ResumeBox: React.FC<ResumeProps> = ({
	role,
	company,
	date,
	accomplishment1,
	accomplishment2,
	accomplishment3,
	accomplishment4,
	isSchool
}) => {
	return (
		<div className="col-lg-6 m-15px-tb">
			<div className="resume-box">
				<ul>
					<li>
						<div className="icon">
							{isSchool ? (
								<FontAwesomeIcon icon={faGraduationCap} fixedWidth />
							) : (
								<FontAwesomeIcon icon={faBriefcase} fixedWidth />
							)}
						</div>
						<span className="time open-sans-font text-uppercase">{date}</span>
						<h5 className="poppins-font text-uppercase">
							{role}
							<br />
							<span className="place open-sans-font">- {company}</span>
						</h5>
						{accomplishment1 && (
							<p className="open-sans-font">
								{accomplishment1} <br /> {accomplishment2}
								<br /> {accomplishment3}
								<br /> {accomplishment4}
							</p>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ResumeBox;
