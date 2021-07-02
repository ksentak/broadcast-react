import React from 'react';

const SpotifyPlayer: React.FC = () => {
	return (
		<>
			<iframe
				src="https://open.spotify.com/embed-podcast/episode/3AmsZXqPn3P1MWWR7jPlRs"
				width="100%"
				height="330"
				frameBorder="0"
				allowTransparency={true}
				title="Sixers Coat Check Podcast"
			></iframe>
		</>
	);
};

export default SpotifyPlayer;
