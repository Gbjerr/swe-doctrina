import { atom } from 'recoil'

export const mode = atom({
	key: 'mode',
	default: true
})

export const lightModeColor = atom({
	key: 'lightMode',
	default: '#202020'
})

export const darkModeColor = atom({
	key: 'darkMode',
	default: '#f3f4f5'
})

export const visibleMenu = atom({
	key: 'visibleMenu',
	default: false
})

export const visibleSideMenu = atom({
	key: 'visibleSideMenu', 
	default: false 
})