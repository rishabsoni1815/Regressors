import { styled } from './../../styles/theme.config.js';

export const Container = styled('div', {
	padding : '0 1rem',
	width : '40%',
	display : 'flex',
	flexDirection : 'column',
	'@media only screen and (max-width : 600px)':{
		width : '90%',
		margin : '0 auto'
	}
})

export const Name = styled('p', {
	fontWeight : 'bold',
	fontSize : '$4'
})

export const Description = styled('p', {
	fontSize : '$3 ',
	color : '$gray',
	opacity : '0.7',
	margin : '0.5rem',
})

export const Price = styled('p', {
	fontWeight : 'bold',
	fontSize : '$4',
	margin : '1rem',
})

export const Button = styled('button', {
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
	background : '$primary_light',
	border : 'none',
	minWidth : '60%',
	padding : '12px 15px',
	fontWeight : 'bold',
	textAlign : 'center',
	color : '$white',
	fontSize : '$2',
	textTransform : 'uppercase',
	borderRadius : '3px',
	cursor : 'pointer',
	transition : '0.2s',

	'&:hover' : {
		background : '$primary',
	},

	'&:active' : {
		transform : 'scale(0.98)'
	},

	'@media only screen and (max-width : 600px)':{
		margin : '1rem',
	}
})

export const Text = styled('p' , {
	lineHeight : '18px',
	marginLeft : '0.5rem'
})