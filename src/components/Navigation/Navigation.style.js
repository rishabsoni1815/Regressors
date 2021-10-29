import { styled } from './../../styles/theme.config.js'

export const Nav = styled('nav', {
  display        : 'flex',
  alignItems     : 'center',
  justifyContent : 'space-between',
  zIndex         : 1000,
  top            : 0,
  left           : 0,
  background     : '#ffffff',
  height         : '6em',
  width          : '100%',
  padding : '2rem 2rem ',
  boxShadow: '0 4px 12px 0 rgb(0 0 0 / 5%)',
})

export const Container = styled('div', {
  display        : 'flex',
  alignItems     : 'center',
  justifyContent : 'center',
})

export const LogoContainer = styled('div', {
	display        : 'flex',
  alignItems     : 'center',
  justifyContent : 'center',
})

export const Link = styled('a', {
  color          : '$black',
  fontSize       : '$1',
  fontWeight : 600,
  textDecoration : 'none',
  margin         : '0 1rem',
  cursor : 'pointer',

  '&:hover' : {
    color   : '$gray',
  },

})

export const SearchContainer = styled('div', {
	backgroundColor: "#F5F5F6",
	borderRadius : '3px',
	paddingTop : '4px',

})

export const Search = styled('input', {
	border : 'none',
	background: 'transparent',
	outline : 'none',
	width : '25vw',
	height : '36px',
})

export const IconContainer = styled('button', {

  background : 'none',
  border     : 'none',
  textAlign  : 'right',
  padding    : '0 0.5em',
  margin : ' 0 0.7rem',
})

export const Icon = styled('a', {
	
	color : '$gray',	
	
	'&:hover' : {
    color : '$black'
  }
})