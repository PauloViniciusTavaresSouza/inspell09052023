// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Theme Config Imports
import themeConfig from 'src/configs/themeConfig'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover':{
            background: '#D3DDEC',
            color: "#2F4360",

          },
          color: theme.palette.text.AzulBranca,
          fontWeight: 500,
          borderRadius: 5,
          lineHeight: 1.71,
          letterSpacing: '0.3px',
          padding: `${theme.spacing(1.875, 3)}`,
          borderColor: theme.palette.text.AzulBranca,
        },
        contained: {
          boxShadow: theme.shadows[3],
          padding: `${theme.spacing(1.875, 5.5)}`,
          background: '#2F4361',
          color: theme.palette.text.BrancaAzul,
          
        },
        outlined: {
          padding: `${theme.spacing(1.625, 5.25)}`,
          background: '#2F4361',
          
        },
        sizeSmall: {
          '&.Mui-focusVisible':{
          },
          padding: `${theme.spacing(1, 2.25)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(1, 3.5)}`
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(0.75, 3.25)}`
          }
        },
        sizeLarge: {
          '&.Mui-focusVisible':{
          },
          padding: `${theme.spacing(2.125, 5.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(2.125, 6.5)}`
          },
          '&.MuiButton-outlined': {
            padding: `${theme.spacing(1.875, 6.25)}`
          }
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple
      }
    }
  }
}

export default Button
