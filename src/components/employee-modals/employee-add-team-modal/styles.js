import theme from '../../../theme/theme';

const StepperStyles = {
  [theme.breakpoints.up('xs')]: {
    paddingTop: '1rem',
    '& .MuiStepLabel-iconContainer': {
      paddingRight: '0rem',
      paddingLeft: '0rem'
    },
    '& .MuiStep-root': {
      paddingRight: '0rem',
      paddingLeft: '0rem'
    },
    '& .MuiStepLabel-alternativeLabel': {
      fontSize: '1rem'
    },
    '& .Mui-active': {
      '& .MuiStepConnector-line': {
        borderColor: `${theme.palette.darkPurple}`
      }
    },
    '& .MuiStepLabel-label.Mui-active': {
      color: `${theme.palette.darkPurple}`
    },
    '& .Mui-completed': {
      '& .MuiStepConnector-line': {
        borderColor: `${theme.palette.darkPurple}`
      },
      '& .MuiStepLabel-alternativeLabel': {
        color: `${theme.palette.darkPurple}`
      }
    }
  },
  [theme.breakpoints.up('mL')]: {
    minWidth: '24rem'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: '30rem'
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '40rem'
    // '& .MuiStepLabel-alternativeLabel': {
    //   fontSize: '1rem'
    // }
  },
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};

const StepperIconStyles = {
  [theme.breakpoints.up('xs')]: {
    height: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .stepper-icon': {
      color: 'darkPurple',
      fontSize: '1.3rem'
    },
    '& .inactive': {
      color: 'iconGrey',
      fontSize: '0.75rem'
    }
  },
  [theme.breakpoints.up('sm')]: {
    height: '1.7rem',
    '& .stepper-icon': {
      color: 'darkPurple',
      fontSize: '1.6rem'
    }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};

const ModalFormStyle = {
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    display: 'flex',
    gap: '4rem',
    flexDirection: 'column',
    padding: '1rem 1rem 0rem 1rem',
    minHeight: '21rem',
    justifyContent: 'space-between',

    '& .modal-input-container': {
      minWidth: '100%',
      display: 'flex',
      textAlign: 'left',
      flexDirection: 'column',
      alignSelf: 'center',
      paddingTop: '2rem',

      '& .modal-add-member-link': {
        color: 'darkPurple',
        padding: '1rem'
        // cursor: 'pointer'
      }
    },

    '& .modal-team-color-swatches': {
      maxWidth: '25rem',
      alignSelf: 'center',
      paddingTop: '2rem'
    },
    '& .modal-btn': {
      alignSelf: 'center',
      display: 'flex',
      // gap: '1rem',
      minHeight: '4rem',
      flexDirection: 'column'
    },

    '& .skip-btn-text': {
      textAlign: 'right',
      fontSize: '0.75rem',
      padding: '0.5rem 1rem 0 0',
      width: '100%',
      textTransform: 'none',
      textDecoration: 'underline'
    }
  },
  [theme.breakpoints.up('sm')]: {
    '& .modal-input-container': {
      minWidth: '80%'
    }
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export { StepperStyles, StepperIconStyles, ModalFormStyle };
