import theme from '../../theme/theme';

export const style = {
  '& .page-container': {
    [theme.breakpoints.up('lg')]: {
      padding: '2.8rem 11.5rem 2.8rem 8rem'
    },
    [theme.breakpoints.up('xs')]: {
      padding: '2rem'
    },
    backgroundColor: 'lightGrey'
  },
  '& .main-heading': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  '& .main-heading .heading-text': {
    fontStyle: 'normal',
    fontWeight: 400,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem'
    },
    lineHeight: '3rem'
  },
  '& .content': {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px'
  }
};
