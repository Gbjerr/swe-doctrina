import SideMenu from './SideMenu'
import BurgerMenu from './BurgerMenu';
import { useRecoilState } from 'recoil';
import {
	darkModeColor,
	lightModeColor, 
	mode,
} from './recoil-state';


const Content = () => {
	const [isSwitch, setIsSwitch] = useRecoilState(mode)
	const [lightMode, setLightMode] = useRecoilState(lightModeColor)
	const [darkMode, setDarkMode] = useRecoilState(darkModeColor)

	return (
		<section className='content-container' style={{backgroundColor: isSwitch ? darkMode : lightMode}}>
			<div className='side-menu'> <SideMenu /></div>
			<div className='burger-side-menu'> <BurgerMenu /></div>
		</section>
	)
}

export default Content