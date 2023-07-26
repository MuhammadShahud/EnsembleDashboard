import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    boxShadow: '3px 6px 14px rgba(43, 47, 134, 0.1)',
    borderRadius: '4rem',
    minWidth: '100%',
    color: 'black',
    fontSize: '0.875rem',
    letterSpacing: '0.1px',
    lineHeight: '1.25rem',
    textTransform: 'capitalize',
    padding: '0.5rem 1rem',
    '& .MuiButton-endIcon>*:nth-of-type(1)': {
      fontSize: '1.75rem',
      color: 'borderGrey'
    },
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  [theme.breakpoints.up('sm')]: {
    // minWidth: '50%'
  },
  [theme.breakpoints.up('md')]: {
    // minWidth: '100%'
  },
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
