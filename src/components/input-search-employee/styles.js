// search Component
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .input-field': {
      backgroundColor: 'lightGrey',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.5px',
      borderRadius: '3rem',
      minHeight: '3.25rem',
      marginTop: '0.5rem',
      border: '0px solid',
      color: 'black',
      ['& fieldset']: {
        border: '0',
        padding: '6px'
      },

      '& .Mui-focused': {
        border: `0.2px solid ${theme.palette.darkPurple}`,
        borderRadius: '3rem',
        minHeight: '3.25rem'
      }
    },
    '& .input-error-state': {
      border: '0.2px solid red'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
