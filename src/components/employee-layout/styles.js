import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    minHeight: '100vh',
    maxWidth: '100vw',
    backgroundColor: 'primary.main',
    // justifyItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    '& .emp-layout-main-container': {
      // backgroundColor: 'red',
      flexDirection: 'column',
      padding: '2rem 0',
      minHeight: '100%'
    },
    '& .emp-layout-header': {
      justifyContent: 'space-between',
      gap: '2rem',
      '& .header-left-container, .header-left-container-without-btn': {
        flexBasis: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& .header-left-arrow': {
          padding: '0rem',
          color: 'navyBlue',
          justifyContent: 'flex-start'
        }
      },
      '& .header-right-container': {
        flexBasis: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .header-right-btn': {
          width: '50%'
        }
      }
    },
    '& .emp-layout-content': {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      padding: '1rem',
      maxWidth: '100%',
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {
    '& .emp-layout-header': {
      gap: '0rem',
      justifyContent: 'space-between',
      '& .header-left-container': {
        flexBasis: '68%',
        display: 'flex'
      },
      '& .header-left-container-without-btn': {
        flexDirection: 'row',
        alignItems: 'center',

        '& .header-left-arrow': {
          padding: '0.5rem'
        }
      },

      '& .header-right-container': {
        flexBasis: '30%',
        maxWidth: '17.5rem',
        '& .header-right-btn': {
          width: '100%'
        }
      }
    }
  },
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
