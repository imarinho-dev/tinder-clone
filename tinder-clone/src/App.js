import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import TinderCards from './components/TinderCards/TinderCards.jsx';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';

function App() {
	return (
		<div className='app'>
			<Header />
			<TinderCards />
			<SwipeButtons />
		</div>
	);
}

export default App;
