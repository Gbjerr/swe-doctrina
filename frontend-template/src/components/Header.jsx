import { AiOutlineBell } from 'react-icons/Ai';
import { FiMenu } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';
import { useState,useEffect } from 'react';

const Header = () => {
	const [isBurgerMenu, setIsBurgeerMenu] = useState(true)
	const [isSwitch, setIsSwitch] = useState(true)

	const handleResize = () => {
		if (window.innerWidth <  769) {
			setIsBurgeerMenu(true)
		} else {
			setIsBurgeerMenu(false)
		}
	  }

	  useEffect(() => {
		window.addEventListener("resize", handleResize)
	  })

	  const handleMode = () => {
		setIsSwitch(!isSwitch)
	  }

	return (
		<section className="header-container">
			<p className="doctrina">Doctrina</p>
			<p className="heading">Ditt arbetseverktyg</p>
			<div className='bell-mode-container'>
				<div className='notification'><AiOutlineBell /> </div>
				<div className='switch-theme'><FormControlLabel control={<Switch defaultChecked />} onClick={handleMode} label={isSwitch ? <div className='switch-moon'><FiMoon /></div> :  <div className='switch-moon'><FiSun /></div>} /></div>
			</div>
				{isBurgerMenu && <div className='burger-menu'><FiMenu /> </div>}
		</section>
	)
}

export default Header