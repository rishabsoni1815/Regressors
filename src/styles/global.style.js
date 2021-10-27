import { globalCss } from './theme.config.js'

const globalStyle = globalCss({

  '*' : {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily: '$font',

  },

  html : {
    overflowX : 'hidden',
  },

  body : {

    overflowX : 'hidden',
  },

  img : {
    // userSelect : 'none',
  },

  h1 : {
    // color:'$main',
    // fontFamily: '$primary',
    // userSelect : 'none',
    // fontSize : '$6'
  },

  '.clear' : {
    display : 'none !important',
  },

  '.hideSmall' : {
    '@media only screen and (max-width : 600px)' : {
      display : 'none',
    },
  },

  '.hideMedium' : {
    '@media only screen and (max-width : 900px)' : {
      display : 'none !important',
    },
  },

})

export default globalStyle