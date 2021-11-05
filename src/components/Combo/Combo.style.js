import { styled } from './../../styles/theme.config.js'

export const ComboContainer = styled('div', {
	border : '1px solid $gray',
	margin : '1rem',
	float : 'left',
	display : 'flex',
})

export const Container = styled('div' , {
	display : 'flex',
	justifyContent : 'center',
})

export const ProductContainer = styled('div', {
	maxWidth : '180px',
	margin : '1rem',
})

export const PlusContainer = styled('div' , {
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
})

export const Image = styled('img', {
})

export const InfoContainer = styled('div', {
	padding : '0 1rem',
})

export const Name = styled('p', {
	fontWeight : 'bold',
	fontSize : '$1'
})

export const Description = styled('p', {
	fontSize : '$1 ',
	color : '$gray',
	opacity : '0.7',
})

export const Price = styled('p', {
	fontWeight : 'bold',
	fontSize : '$1'
})

