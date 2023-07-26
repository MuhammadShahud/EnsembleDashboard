// Onboarding
import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    color: 'white',
    maxWidth: '31rem',
    '& .onboarding-review-container': {
      bgcolor: 'chrysomela',
      borderRadius: '1rem',
      color: 'white',
      mt: '4rem',
      maxWidth: '24.68rem',
      minHeight: '12.87rem',
      display: 'flex',
      alignItems: 'center',
      px: '7px'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
