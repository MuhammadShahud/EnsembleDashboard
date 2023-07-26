import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
const theme = createTheme({
  palette: {
    primary: {
      main: colors.lightGrey
    },
    secondary: {
      main: colors.darkBlue
    },
    lightGrey: colors.lightGrey,
    neutral: {
      main: colors.brightGreen
    },
    dullBlue: colors.dullBlue,
    textLightGrey: colors.textLightGrey,
    textDarkGrey: colors.textDarkGrey,
    navyBlue: colors.navyBlue,
    lightPurple: colors.lightPurple,
    dullWhitePurple: colors.dullWhitePurple,
    chrysomela: colors.chrysomela,
    skyBlue: colors.skyBlue,
    lightGreen: colors.lightGreen,
    brightGreen: colors.brightGreen,
    dullLightGreen: colors.dullLightGreen,
    yellow: colors.yellow,
    salmon: colors.salmon,
    radicalRed: colors.radicalRed,
    red: colors.red,
    lightBlack: colors.lightBlack,
    borderGrey: colors.borderGrey,
    lightCyan: colors.lightCyan,
    darkPurple: colors.darkPurple,
    iconGrey: colors.iconGrey,
    softPurple: colors.softPurple,
    lightBlack0: colors.lightBlack0,
    passwordGrey: colors.passwordGrey,
    backbtnGrey: colors.backbtnGrey,
    tabBottomGrey: colors.tabBottomGrey
  },

  spacing: (factor) => `${1 * factor}rem`,

  breakpoints: {
    values: {
      xs: 0,
      mL: 425,
      sm: 600,
      tB: 768,
      md: 900,
      Lp: 1024,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: '4rem',
      lineHeight: '4.75rem',
      letterSpacing: '-0.5px'
    },
    h2: {
      // form header
      fontWeight: 400,
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
      lineBreak: true
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem'
    },

    h31: {
      fontWeight: 400,
      fontSize: '2rem',
      lineHeight: '2.5rem'
    },
    h4: {
      fontWeight: 400,
      fontSize: '1.75rem',
      lineHeight: '3rem'
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    },
    body3: {
      // form subheading
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.5px'
    },
    caption2: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1rem'
    },
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  }
});

export default theme;
