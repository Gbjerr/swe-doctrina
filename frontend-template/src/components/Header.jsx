import { AiOutlineBell } from 'react-icons/Ai';
import { FiMenu } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
	darkModeColor,
	lightModeColor, 
	mode,
	visibleMenu
} from './recoil-state';

const Header = () => {
	const [isBurgerMenu, setIsBurgerMenu] = useState()
	const [isSwitch, setIsSwitch] = useRecoilState(mode)
	const [lightMode, setLightMode] = useRecoilState(lightModeColor)
	const [darkMode, setDarkMode] = useRecoilState(darkModeColor)
	const [isVisibleBurgerMenu, setIsVisibleBurgerMenu] = useRecoilState(visibleMenu)

	// Is menu visible
	const handleResize = () => {
		if (window.innerWidth < 769) {
			setIsBurgerMenu(true)
		} else {
			setIsBurgerMenu(false)
		}
	}
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
	
		return () => {
		  window.removeEventListener('resize', handleResize)
		}
	  }, [])

	// Change theme
	const handleMode = () => {
		setIsSwitch(!isSwitch)
	}

	const handleBurger = () => {
		setIsVisibleBurgerMenu(!isVisibleBurgerMenu)
	}

	return (
		<section className="header-container" style={{ backgroundColor: isSwitch ? darkMode : lightMode }}>
			<p className="doctrina" style={{ color: isSwitch ? lightMode : darkMode }}>Doctrina</p>
			<p className="heading" style={{ color: isSwitch ? lightMode : darkMode }}>Ditt arbetseverktyg</p>
			<div className='bell-mode-container'>
				<div className='notification'><AiOutlineBell /> </div>
				<div className='switch-theme'><FormControlLabel control={<Switch defaultChecked />} onChange={handleMode} label={
					<div className={isSwitch ? 'switch-sun' : 'switch-moon'}>
						{isSwitch ? <FiSun /> : <FiMoon />}
					</div>} />
				</div>
			</div>
			{isBurgerMenu && <div className='burger-menu' style={{ color: isSwitch ? lightMode : darkMode }} onClick={handleBurger}><FiMenu /> </div>}
		</section>
	)
}

export default Header