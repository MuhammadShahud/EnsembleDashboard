// Login Layout Styles
import theme from '../../theme/theme';
import rightBg from '../../assets/images/personal-info-bg.png';

const Styles = {
  [theme.breakpoints.up('xs')]: {
    minHeight: '100vh',
    maxWidth: '100vw',
    bgcolor: 'primary.main',
    '& .login-layout-left': {
      flexBasis: '100%'
    },
    '& .login-layout-Right': {
      display: 'none'
    },
    '& .login-layout-Right-display-xs': {
      display: 'flex',
      flexBasis: '100%',
      borderRadius: '1rem 0 0 1rem'
    },
    '& .login-layout-bg': {
      // backgroundColor: '#212121',
      backgroundImage: `url(${rightBg})`,
      backgroundSize: 'cover',
      objectFit: 'cover',
      backgroundPosition: 'left bottom'
      // backgroundBlendMode: 'Multiply'
    },

    '& .login-layout-no-bg': {
      backgroundColor: 'secondary.main'
    },
    '& .login-layout-bg-overly': {
      // flexBasis: '100%',
      // backgroundImage: `url(${rightVector})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'bottom',
      // borderRadius: '1rem 0 0 1rem'
    },
    '& .login-layout-logo': {
      cursor: 'pointer',
      maxWidth: '15rem'
    },
    '& .login-logo-container': {
      maxWidth: '32rem',
      
    },
    '& .layout-panel-grid': {
      display: 'grid',
      gridTemplateRows: '2fr 8fr 2fr',
      alignItems: 'center',
      justifyContent: 'center'

    },
    '& .left-layout-form': {
      border: '0.5px solid #C9C5CA',
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '2rem 3rem',
      width: '100%',
      maxWidth: '32rem',
      alignSelf: 'center',
      justifySelf: 'center',
      minHeight: '42rem',
      // height: '35rem',
      display: 'flex',
      flexDirection: 'column'
      // justifyContent: 'center'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {
    '& .login-layout-left': {
      flexBasis: '50%'
    },
    '& .login-layout-Right': {
      display: 'flex',
      flexBasis: '50%',
      borderRadius: '1rem 0 0 1rem'
    },
    '& .login-layout-Right-display-xs': {
      flexBasis: '50%'
    },
    '& .left-layout-form': {
      minHeight: '47rem'
    }
  },
  [theme.breakpoints.up('lg')]: {
    '& .left-layout-form': {
      minHeight: '42rem',
      // maxWidth: '32rem'
      width: '34.62rem'
      
    }
  },
  [theme.breakpoints.up('xl')]: {
    '& .left-layout-form': {
      minHeight: '40rem'
    }
  }
};

export default Styles;
