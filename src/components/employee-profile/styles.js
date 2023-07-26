import theme from '../../theme/theme';
const SkillsHobbiesStyles = {
  [theme.breakpoints.up('xs')]: {
    maxWidth: '95%',
    padding: '2rem 0rem 0rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    '& .emp-skill-container': {
      width: '100%',
      border: `0.2px solid ${theme.palette.borderGrey}`,
      borderRadius: '0.3rem',
      padding: '0.5rem'
    },
    '& .emp-chip': {
      margin: '0.3rem',
      bgcolor: 'dullWhitePurple',
      color: 'white'
    }
  },
  [theme.breakpoints.up('sm')]: {
    padding: '2rem 1rem 0rem 1rem',
    '& .emp-skill-container': {
      padding: '1.5rem'
    }
  },
  [theme.breakpoints.up('tB')]: {
    flexDirection: 'row'
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {
    maxWidth: '85%'
  },
  [theme.breakpoints.up('xl')]: {}
};
export default SkillsHobbiesStyles;
