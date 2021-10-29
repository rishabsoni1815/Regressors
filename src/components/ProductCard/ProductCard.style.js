import { styled } from './../../styles/theme.config.js'

export const Container = styled('div', {
	width  : '210px',
	margin : '1rem 3rem',

	'&:hover' : {
		boxShadow : '0 2px 16px 4px rgb(40 44 63 / 7%)',
	}	
})

export const ImageContainer = styled('div', {

})

export const InfoContainer = styled('div', {
	padding : '1rem'
})

export const Name = styled('p', {
	fontWeight : 'bold',
})

export const Description = styled('p', {
	fontSize : '$1',
	color    : '$gray'
})

export const Price = styled('p', {
	fontWeight : 'bold',
})