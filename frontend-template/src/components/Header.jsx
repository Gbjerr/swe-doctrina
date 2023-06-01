import { AiOutlineBell } from 'react-icons/Ai';
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';

const Header = () => {

	return (
		<section className="header-container">
			<p className="doctrina">Doctrina</p>
			<p className="heading">Ditt arbetseverktyg</p>
			<div className='bell-mode-container'>
				<div className='notification'><AiOutlineBell /> </div>
				<div className='switch-theme'><FormControlLabel control={<Switch defaultChecked />} label="Dark" /></div>
			</div>
		</section>
	)
}

export default Header