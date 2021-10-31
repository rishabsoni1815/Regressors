import { styled } from './../../styles/theme.config.js';

export const Container = styled('div', {
	width : '60%',
	display : 'flex',
	alignItems : 'center',
	justifyContent : 'space-around',

})

export const Image = styled('img', {
	width : '100%',
	transition : 'transform .4s,-webkit-transform .4s',
	'&:hover' : {
		transform : 'scale(1.1)',
		cursor : 'zoom-in'
	}
})

export const ImageContainer = styled('div', {
	width : '50%',
	overflow : 'hidden',
	marginRight : '0.5rem'
})