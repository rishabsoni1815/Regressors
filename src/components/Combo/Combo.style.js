import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
	margin : '2rem',
	display : 'flex',
	float : 'left',
	flexDirection : 'column'
})

export const Heading = styled('p', {
	fontSize : '$4',
	fontWeight : 'bold',
	textAlign : 'center'
})

export const ComboContainer = styled('div', {
	border : '1px solid $gray',
	display : 'flex',
	flexDirection : 'column',
	justifyContent : 'center',
	alignItems : 'center',
	padding : '1rem',

})

export const Combo = styled('div', {
	float : 'left',
	display : 'flex',
})

export const Wrapper = styled('div' , {
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

export const Button = styled('button', {
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
	background : '$primary',
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

	'&:hover' : {
		background : '$primary_light',
	}
})

export const Text = styled('p' , {
	lineHeight : '18px',
	marginLeft : '0.5rem'
})