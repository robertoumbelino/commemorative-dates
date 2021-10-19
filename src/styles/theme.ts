import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: '#14162C',
    white: '#FAFBFC',

    primary: '#E6484F',
    primaryLight: '#F3646A',

    secondary: '#979AAD',

    darkLight: '#232538'
  },

  styles: {
    global: {
      '*': {
        color: '#FAFBFC',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontDisplay: 'initial',
        outline: 'none',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      },

      'html, body, #root': {
        height: '100%',
        backgroundColor: '#14162C'
      },

      '*, button, input': {
        border: 0
      },

      '.alice-carousel__dots': {
        marginTop: '15vh'
      }
    }
  },

  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
    mono: 'Montserrat, sans-serif'
  }
})
