import TextField from '@material-ui/core/TextField'
import logo from '../../assets/PulleySoleLogo.png'
import { borders } from '@material-ui/system'
import { Box, Button, OutlinedInput } from '@material-ui/core'
import { makeStyles, createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles"

const theme = createMuiTheme({
    typography: {
      "fontFamily": `"Poppins", "sans-serif"`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      "fontWeightBold": 900,
    },
    palette: {
      primary: { main: '#000000' },
      secondary: { main: '#ff5757' },
      tertiary: { main: '#5bce90'}
    }, 
    overrides: {
      MuiButton: {
          root: {
              textTransform: 'none',
              borderRadius: 50,
              borderStyle: 'solid',
              borderColor: 'black'
          }
      }
  },
  })
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        display: 'block',
        margin: theme.spacing(1),
        width: 200,
      },
      '& .MuiInput-root:': {
        display: 'block',
        margin: theme.spacing(1),
        width: 200
      }
    },
  }))

export { 
    TextField, Button, logo, borders, Box, OutlinedInput, makeStyles, createMuiTheme, MuiThemeProvider, useStyles, theme
} 