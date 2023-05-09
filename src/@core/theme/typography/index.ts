// ** Theme Type Import
import { Theme } from '@mui/material/styles'
import { Settings } from 'src/@core/context/settingsContext'

const Typography = (theme: Theme) => {
  const mode = theme.palette.mode

  return {
    h1: {
      fontWeight: 500,
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.AzulBranca
    },
    h6: {
      letterSpacing: '0.15px',
      color: mode === "light" ? theme.palette.grey[700] : "#CAC6E0",
    },
    subtitle1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle2: {
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary
    },
    body1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.5,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary
    },
    button: {
      letterSpacing: '0.3px',
      color: theme.palette.text.primary
    },
    caption: {
      letterSpacing: '0.4px',
      color: mode === "light" ? theme.palette.grey[700] : "#CAC6E0",

    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    },
    p: {
      fontWeight: 500,
      letterSpacing: '1px',
      color: theme.palette.text.AzulBranca
    },
    span: {
      fontWeight: 500,
      letterSpacing: '1px',
      color: mode === "light" ? theme.palette.grey[700] : "#CAC6E0",
      fontSize: "10px",
    }
  }
}

export default Typography
