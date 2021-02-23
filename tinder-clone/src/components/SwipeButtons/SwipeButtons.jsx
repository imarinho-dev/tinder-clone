import React from 'react';
import './SwipeButtons.css';

import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const SwipeButtons = () => {
	return (
		<div className='swipeButtons'>
			<div className='swipeButtons__container'>
				<IconButton className='swipeButtons__repeat'>
					<Replay fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__left'>
					<Close fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__star'>
					<StarRate fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__right'>
					<Favorite fontSize='large' />
				</IconButton>
				<IconButton className='swipeButtons__lightning'>
					<FlashOn fontSize='large' />
				</IconButton>
			</div>
		</div>
	);
};

export default SwipeButtons;
