import React from 'react';
import './Header.css';
import tinderLogo from '../../assets/Tinder-Logo.png';

import { Person as PersonIcon, Forum as ForumIcon } from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header__icon' />
			</IconButton>
			<img src={tinderLogo} alt='' className='header__logo' />
			<IconButton>
				<ForumIcon fontSize='large' className='header__icon' />
			</IconButton>
		</div>
	);
};

export default Header;
