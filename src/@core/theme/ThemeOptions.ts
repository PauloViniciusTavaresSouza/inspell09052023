// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import breakpoints from './breakpoints'

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { mode, themeColor } = settings

  const lightColor = '58, 53, 65'
  const darkColor = '231, 227, 252'
  // const secondarylightColor = '0, 0, 0'
  // const secondarydarkColor = '231, 227, 252'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const themeConfig = {
    palette: palette(mode, themeColor),
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor],
        main: '#9155FD',
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: mode == "light" ? '#2F4361' : "#D0CCE5",
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   // dark: será calculada com base palette.secondary.main,
    //   contrastText: '#ffcc00',
    // },
    warning: {
      main: "#FFB400",
    },
    info: {
      main: "#16B1FF"
    },
    success: {
      main: "#56CA00"
    },
    error: {
      main: "#FF4C51"
    },
    backgound: {
      paper: "#2F4361",
      default: "#f7f6f3"
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030'
    },
    svg: {
      color: mode === 'light' ? ' #2F4361' : '#D0CCE5',
    },
    text: {
    primary: `rgba(${mainColor}, 0.87)`,
    secondary: `rgba(${mainColor}, 0.68)`,
    BrancaAzul: mode === "light" ? "#fff" : "#2F4361",
    AzulBranca: mode === "light" ? "#3A4E6E" : "#fff", 
    // titlePrincipal: mode === "light" ? "#3A4E6E" : "#C9C5DE",
    disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      bgAzulBranca: mode === "light" ? "#2F4361" : "#fff",
      default: mode === 'light' ? '#F4F5FA' : '#28243D'
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.3)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`
    }
      }
  })
}

export default themeOptions
