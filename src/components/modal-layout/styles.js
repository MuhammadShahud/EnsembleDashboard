import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxWidth: '56rem',
    maxHeight: '90vh',
    overflow: 'hidden',
    minWidth: '85vw',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: '1.5rem',
    padding: '1rem',
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    '& .modal-close-icon': {
      alignSelf: 'end',
      '& >svg': {
        color: 'darkPurple'
      },
      '&:disabled >svg': {
        color: '#8C8C8C'
      }
    },
    '& .modal-content': {
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '0.6rem'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'white'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'softPurple',
        borderRadius: 2
      }
    },
    '& .modal-footer': {
      paddingTop: '1rem'
    }
  },
  [theme.breakpoints.up('sm')]: {
    padding: '2rem',
    minWidth: '30rem'
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {}
};
export default Styles;
