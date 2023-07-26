import theme from '../../theme/theme';
// const style = {
//   navbar_large_screen_heading: {
//     mr: 2,
//     display: { xs: 'none', md: 'flex' },
//     fontWeight: 700,
//     letterSpacing: '.3rem',
//     color: 'inherit',
//     textDecoration: 'none',
//     marginLeft: '0.5rem'
//   },
//   navbar_small_screen_hamburger: { flexGrow: 0, display: { xs: 'flex', md: 'none' } }
// };

const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .MuiContainer-root': {
      paddingX: '0.5rem'
    },
    '& .navbar-toolbar-container': {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& .navbar-hamburger': {
      display: 'flex'
    },
    '& .navbar-logo': {
      marginTop: '0.4rem'
    },
    '& .navbar-link-container': {
      flexGrow: 1,
      display: 'none',
      paddingLeft: '2rem'
    },
    '& .nav-icons-container': {
      flexGrow: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0.5rem'
    }
  },
  [theme.breakpoints.up('mL')]: {
    '& .MuiContainer-root': {
      paddingX: '2rem'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('tB')]: {
    '& .navbar-hamburger': {
      display: 'none'
    },
    '& .navbar-link-container': {
      display: 'flex',
      paddingY: '1.2rem',
      '& .navbar-navlinks': {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        fontSize: '1rem',
        paddingX: '0.5rem',
        '&:hover': {
          color: 'softPurple'
        }
      }
    }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
