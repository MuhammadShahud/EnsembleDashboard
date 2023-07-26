import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .input-field': {
      backgroundColor: 'lightCyan',
      borderRadius: '1rem',
      border: `2px dashed ${theme.palette.darkPurple}`,
      textAlign: 'center',
      color: 'borderGrey',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      marginTop: '0.5rem'
    },

    '& .file-browse-btn': {
      textTransform: 'capitalize',
      color: 'darkPurple',
      textDecoration: 'underline'
    },
    '& .file-delete-icon': {
      color: 'darkPurple',
      alignSelf: 'end'
    },
    '& .logo-tumbnail': {
      maxWidth: '6rem',
      objectFit: 'contain'
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
