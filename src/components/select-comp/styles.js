//Input Component
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .input-label': {
      mt: '2rem',
      color: 'black',
      fontSize: '1rem',
      fontWeight: 500
    },
    '& .select-comp': {
      // backgroundColor: 'lightCyan',
      borderRadius: 12,
      height: '3rem',
      marginTop: '0.5rem',
      border: '0px solid',
      [`& fieldset`]: {
        border: '0px'
      },
      '&:hover, &.Mui-focusVisible': {
        border: `0.2px solid ${theme.palette.darkPurple}`
      }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
