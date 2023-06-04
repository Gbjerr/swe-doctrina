import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
	darkModeColor,
	lightModeColor,
	mode,
	visibleMenu
} from './recoil-state';

const BurgerMenu = () => {
	const [isVisibleBurgerMenu, setIsVisibleBurgerMenu] = useRecoilState(visibleMenu)
	const [isSwitch, setIsSwitch] = useRecoilState(mode)
	const [lightMode, setLightMode] = useRecoilState(lightModeColor)
	const [darkMode, setDarkMode] = useRecoilState(darkModeColor)

	const menuLightMode = '#fcfcfc'
	const menuDarkMode = '#505050'

	// Is menu visible mobile
	const handleResizeMobile = () => {
		if (window.innerWidth < 769 && !isVisibleBurgerMenu) {
			setIsVisibleBurgerMenu(true)
		} else if (window.innerWidth >= 769 && isVisibleBurgerMenu) {
			setIsVisibleBurgerMenu(false)
		}
	}
	useEffect(() => {
		window.addEventListener("resize", handleResizeMobile)

		return () => {
			window.removeEventListener('resize', handleResizeMobile)
		}
	}, [])

	const style = {
		width: '100%',
		maxWidth: 200,
		height: '100vh',
		borderRight: '1px solid silver',
		bgcolor: 'background.paper',
		color: isSwitch ? lightMode : darkMode,
		backgroundColor: isSwitch ? '#ffffff' : lightMode,
		'& .MuiListItem-button:hover': {
			backgroundColor: '#1976d2',
			color: darkMode
		}
	}

	return (
		<nav>
			{isVisibleBurgerMenu &&
				<List sx={style} component="nav" aria-label="mailbox folders">
					<ListItem button>
						<ListItemText primary="Schema" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
					<ListItem button>
						<ListItemText primary="Klassrum" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
					<ListItem button>
						<ListItemText primary="Chatt" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
					<ListItem button>
						<ListItemText primary="Kalender" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
					<ListItem button>
						<ListItemText primary="Hjälpmedel" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
					<ListItem button>
						<ListItemText primary="Logga in" />
					</ListItem>
					<Divider style={{ backgroundColor: isSwitch ? menuLightMode : menuDarkMode }} />
				</List>}
		</nav>
	)
}

export default BurgerMenu