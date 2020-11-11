import logo from '../../assets/PulleyLogoName.jpg'
import line from '../../assets/Line2.jpg'
import { Button } from '@material-ui/core'
import { makeStyles, createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import IconButton from "@material-ui/core/IconButton"
import FormControl from "@material-ui/core/FormControl"
import clsx from 'clsx'




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
}));



export { 
  logo, line, Button, makeStyles, createMuiTheme, MuiThemeProvider, clsx,
  TextField, Input, InputAdornment, InputLabel, Visibility, VisibilityOff, IconButton, FormControl,
  theme, useStyles} 