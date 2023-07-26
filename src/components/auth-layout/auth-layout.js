// import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import { Box, Grid } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/logos/signup-ensemble-logo.svg';
import { useNavigate } from 'react-router-dom';

const LoginLayout = (props) => {
  const { leftContent, rightContent, useRightBg, displayRightXs } = props;
  let navigate = useNavigate();
  return (
    <Grid container sx={Styles}>
      <Grid item container className='login-layout-left'>
        <Grid item xs={1} sm={2} md={1} lg={1}></Grid>
        <Grid item xs={10} sm={8} md={10} lg={10} className='layout-panel-grid'>
          <Box className='login-logo-container'>
            <Box sx={{width: '100%'}}>
              <Logo
                onClick={() => {
                  navigate('/');
                }}
                className='login-layout-logo'
              />
            </Box>
          </Box>

          <Box className='left-layout-form'>{leftContent}</Box>
        </Grid>
        <Grid item xs={1} sm={2} md={1} lg={1}></Grid>
      </Grid>

      <Grid
        item
        container
        className={`${!displayRightXs ? 'login-layout-Right' : 'login-layout-Right-display-xs'} ${
          useRightBg ? 'login-layout-bg' : 'login-layout-no-bg'
        }`}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className='layout-panel-grid'>
          <div></div>
          <Box justifySelf='center'>{rightContent}</Box>
        </Grid>
        <Grid item xs={1}></Grid>
        {/* <Grid item container className={`${useRightBg ? 'login-layout-bg-overly' : ''}`}> */}
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

LoginLayout.propTypes = {
  leftContent: PropTypes.element,
  rightContent: PropTypes.element,
  useRightBg: PropTypes.bool
};

LoginLayout.defaultProps = {
  useRightBg: false,
  displayRightXs: false
};

export default LoginLayout;
