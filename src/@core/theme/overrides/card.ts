// ** MUI Imports
import { Theme } from '@mui/material/styles'
import { Settings } from 'src/@core/context/settingsContext'

const Card = (theme: Theme) => {
const mode = theme.palette.mode
  console.log(theme.palette.mode)
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[6],
          '& .card-more-options': {
            marginTop: theme.spacing(-1),
            marginRight: theme.spacing(-3)
          }
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          background: mode == "light" ? "#2F4361" : "#fff",
          padding: theme.spacing(1),
          '& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root': {
            paddingTop: 0
          },
          '& .MuiCardHeader-subheader': {
            fontSize: '0.875rem'
          }
        },
        title: {
          lineHeight: 1,
          fontWeight: 500,
          fontSize: '1.25rem',
          letterSpacing: '0.0125em',
          padding: '5px 5px 5px 20px',
          color: mode == "light" ? "#fff" : "#2F4361",
        },
        action: {
          marginTop: 0,
          marginRight: 0
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiCardContent-root': {
            paddingTop: 0
          },
          '&:last-of-type': {
            paddingBottom: theme.spacing(5)
          },
          '& + .MuiCardActions-root': {
            paddingTop: 0
          }
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '&.card-action-dense': {
            padding: theme.spacing(0, 2.5, 2.5),
            '.MuiCard-root .MuiCardMedia-root + &': {
              paddingTop: theme.spacing(2.5)
            },
            '.MuiCard-root &:first-of-type': {
              paddingTop: theme.spacing(5),
              paddingBottom: theme.spacing(5),
              '& + .MuiCardContent-root': {
                paddingTop: 0
              },
              '& + .MuiCardHeader-root': {
                paddingTop: 0
              }
            }
          },
          '& .MuiButton-text': {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5)
          }
        }
      }
    }
  }
}

export default Card
