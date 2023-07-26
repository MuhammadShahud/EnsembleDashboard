import theme from '../../theme/theme';

export const style = {
  '& .home-page-container': {
    [theme.breakpoints.up('lg')]: {
      padding: '2.8rem 7rem 2.8rem 7rem'
    },
    [theme.breakpoints.up('xs')]: {
      padding: '2rem'
    },
    background: '#F7F7F7'
  },
  '& .home-survey-heading': {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.375rem',
    lineHeight: '28px',
    margin: '0.5rem 0'
  },
  '& .home-survey-btn-container': {
    display: 'flex',
    margin: '1rem',
    justifyContent: 'flex-end',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      margin: '1rem 0rem'
    }
  },
  '& .home-survey-grid-container': {
    width: '55px',
    [theme.breakpoints.down('md')]: {
      width: '50px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '45px'
    }
  },
  '& .home-survey-text': {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '24px',
    letterSpacing: '0.4px',
    color: 'textDarkGrey',
    margin: '0.2rem 0'
  },
  '& .home-survey-card-viewbtn': {
    borderRadius: '1.875rem',
    border: '1.5px solid #777680',
    background: 'transparent',
    color: 'dullBlue',
    fontWeight: 600,
    padding: '0.5rem 1.5rem',
    height: '2.5rem',
    cursor: 'pointer'
  },
  '& .home-survey-card-viewbtn:hover': {
    border: '1px solid #5055AD',
    background: '#5055AD',
    color: 'white',
    padding: '0.5rem 1.5rem',
    cursor: 'pointer'
  },
  '& .home-cardwithsvgbtn-container': {
    height: '100%',
    width: '100%'
  },
  '& .home-happiness-survey-card-container': {
    border: '1px solid #C9C5CA',
    borderRadius: '0.625rem',
    height: '100%',
    width: '100%',
    padding: 2,
    backgroundColor: 'white'
  },
  '& .home-happiness-survey-card-leftside-container': {
    flexDirection: 'column',
    textAlign: 'left'
  },
  '& .home-happiness-survey-card-percentage': {
    fontWeight: 400,
    fontSize: '2.8125rem',
    lineHeight: '52px'
  },
  '& .home-happiness-survey-card-rightside-text': {
    fontSize: '1rem',
    lineHeight: '24px'
  },
  '& .home-happiness-survey-card-rightside-heading': {
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: '24px'
  },
  '& .home-happiness-survey-card-leftside-heading': {
    fontWeight: 400,
    fontSize: '1.5rem !important',
    lineHeight: '32px !important'
  },
  '& .home-happiness-survey-card-leftside-keytext': {
    fontWeight: 400,
    fontSize: '1rem !important',
    lineHeight: '24px !important',
    color: '#949494'
  },
  '& .home-dashboard-text': {
    fontSize: '16px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '9px',
      marginTop: '1px'
    }
  },
  '& .home-btn-text': {
    height: '25px',
    width: '25px',
    borderRadius: '5px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      height: '15px',
      width: '15px',
      marginRight: '8px'
    }
  }
};
