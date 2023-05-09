// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Table = (theme: Theme) => {
  const mode = theme.palette.mode
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[0],
          borderTopColor: theme.palette.divider
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          '& .MuiTableCell-head': {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.13px'
          }
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-body': {
            letterSpacing: '0.25px',
            color: mode == 'light' ? '#3A4E6E' : "#C9C5DE",
            '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
              paddingTop: theme.spacing(3.5),
              paddingBottom: theme.spacing(3.5)
            }
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head:first-type, & .MuiTableCell-root:first-type ': {
            paddingLeft: theme.spacing(5),
          },
          '& .MuiTableCell-head:last-type, & .MuiTableCell-root:last-type': {
            paddingRight: theme.spacing(5)
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${theme.palette.divider}`,
          '& .MuiButton-root': {
            textTransform: 'uppercase',
            // color: theme.palette.text.secondary
          }
        },
        stickyHeader: {
          padding: theme.spacing(4),
          backgroundColor: 'theme.palette.customColors.tableHeaderBg'
        },
        head: {
          // color:"blue"
        },
        body: {
        }
      }
    }
  }
}

export default Table
