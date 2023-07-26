import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    '& .MuiStepLabel-iconContainer': {
      paddingRight: '0px',
      paddingLeft: '0px'
    },
    '& .MuiStep-root': {
      paddingRight: '0px',
      paddingLeft: '0px'
    },
    '& .Mui-active': {
      '& .MuiStepConnector-line': {
        borderColor: `${theme.palette.darkPurple}`
      }
    },
    '& .Mui-completed': {
      '& .MuiStepConnector-line': {
        borderColor: `${theme.palette.darkPurple}`
      }
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
