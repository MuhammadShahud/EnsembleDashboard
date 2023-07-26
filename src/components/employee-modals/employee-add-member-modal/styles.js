import theme from '../../../theme/theme';

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
export { ModalFormStyle };
