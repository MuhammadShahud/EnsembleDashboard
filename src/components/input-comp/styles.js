// Input Component
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .signup-input-label': {
      marginTop: '2rem',
      color: 'black',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.1px'
    },
    // '.css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
    //   height: '1rem',
    // },

    '& .input-field': {
      // backgroundColor: 'lightCyan',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.5px',
      borderRadius: '3rem',
      // height: '3.5rem',
      marginTop: '0.5rem',
      border: '0px solid',
      color: 'black',
      // fontSize: '0.8rem',
      ['& fieldset']: {
        border: '0px'
        // backgroundColor: 'red'
      },
      // '&:hover, &.Mui-focusVisible': {
      //   border: `0.2px solid ${theme.palette.darkPurple}`
      // }
      '&.Mui-focused': {
        border: `1px solid ${theme.palette.darkPurple}`
      }
    },
    '& .input-error-state': {
      border: '1px solid red'
    },
    '& .input-field-square': {
      borderRadius: '0.5rem'
    }
  },
  [theme.breakpoints.up('sm')]: {
    // '& .input-field': { fontSize: '1.1rem' }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
