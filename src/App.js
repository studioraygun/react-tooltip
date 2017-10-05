import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
	return (
		<div style={{padding:"50px"}}>
			<p>This is my text and <Tooltip text="this is my tooltip" tip="Tooltip text" path="http://google.com" /></p>
			<p>Lorem ipsum dolor <Tooltip text="and this I know" tip="This is a tooltip, many tooltips are like it, but this is mine" position="bottom" /> lorem ipsum is cool</p>
		</div>
	)
}

export default App;
