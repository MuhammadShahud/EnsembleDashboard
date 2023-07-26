//Input Component
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .signup-input-label': {
      color: 'black',
      fontSize: 'rem',
      fontWeight: 500
    },
    '& .text-box': {
      backgroundColor: 'lightCyan',
      borderRadius: 5,
      minHeight: '22rem',
      alignItems: 'start',
      marginTop: '0.5rem',
      border: '0px solid',
      [`& fieldset`]: {
        border: '0px'
      },
      '&:hover, &.Mui-focusVisible': {
        border: '0.2px solid #5055AD'
      }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
