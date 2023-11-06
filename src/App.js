import React from 'react';
import YouTube from 'react-youtube';

function App() {
	const videoOptions = {
		height: '100%', // Set height to 100% of the parent
		width: '100%', // Set width to 100% of the parent
		playerVars: {
			autoplay: 1,
			controls: 0,
		},
	};

	return (
		<div className="App">
			<YouTube videoId="dQw4w9WgXcQ" opts={videoOptions} />
		</div>
	);
}

export default App;
