import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .tab': {
      borderBottom: `1px solid ${theme.palette.tabBottomGrey}`,
      margin: '1rem 0rem',
      textTransform: 'capitalize',
      '& .MuiTabs-indicator': {
        backgroundColor: 'lightPurple'
      },
      '& .MuiTab-root': {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '0.1px',
        marginRight: '1rem',
        color: 'textLightGrey'
        // padding: '0.75rem 0.6rem'
      },
      '& .Mui-selected': {
        color: 'black'
      },
      '& .MuiTabs-flexContainer': {
        alignItems: 'center'
      }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {
    '& .tab': {
      '& .MuiTab-root': {
        marginRight: '2rem'
      }
    }
  },
  [theme.breakpoints.up('lg')]: {
    '& .MuiTab-root': {
      marginRight: '3rem'
    }
  },
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
