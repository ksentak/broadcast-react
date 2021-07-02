import React from 'react';

interface PressProps {
	link: string;
	text: string;
}

const RecentPress: React.FC<PressProps> = ({ link, text }) => {
	return (
		<h6 className="mt-3">
			<a href={link} target="_blank" rel="noopener noreferrer">
				{text}
			</a>
		</h6>
	);
};

export default RecentPress;
