// Auth Button Group
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'left',
    gap: '1rem',

    '& .auth-btn-filled': {
      borderRadius: '3rem',
      backgroundColor: 'darkPurple',
      width: '100%',
      color: 'white',
      minHeight: '3.68rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
      letterSpacing: '0.1px',
      padding: '0.75rem 2rem',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'darkPurple'
      },
      '&:disabled': {
        backgroundColor: 'iconGrey',
        color: 'white'
      }
    },

    '& .auth-link': {
      textDecoration: 'none',
      // color: 'darkPurple',
      // fontSize: '0.875rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
      letterSpacing: '0.1px',
      flexBasis: '45%',
      '&:active': {
        color: 'darkPurple'
      }
    },
    '& .link-disable': {
      pointerEvents: 'none',
      color: 'iconGrey'
    }
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    '& .auth-btn-filled': {
      // maxWidth: '16.437rem'
    },
    // '& .auth-link': {
    //   fontSize: '1rem'
    // }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};

const EmployeeBtnGroupStyles = {
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',

    '& .auth-btn-filled': {
      borderRadius: '3rem',
      backgroundColor: 'darkPurple',
      color: 'white',
      fontSize: '0.875rem',
      padding: '0.3rem 2rem',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'darkPurple'
      },
      '&:disabled': {
        backgroundColor: 'iconGrey',
        color: 'white'
      }
    },
    '& .auth-link': {
      textDecoration: 'none',
      textTransform: 'capitalize',
      color: 'darkPurple',
      fontSize: '0.875rem',
      fontWeight: 400
    }
  },
  [theme.breakpoints.up('sm')]: {
    '& .auth-btn-filled': {
      fontSize: '1rem'
    },
    '& .auth-link': {
      fontSize: '1rem'
    }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export { Styles, EmployeeBtnGroupStyles };
