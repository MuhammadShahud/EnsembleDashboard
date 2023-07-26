// import React from 'react';
import PropTypes from 'prop-types';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography } from '@mui/material';

const AuthAlert = (props) => {
  const { alertText } = props;
  return (
    <Box display='flex' color='red' alignItems='center' mt='2rem' gap='1rem'>
      <ErrorOutlineIcon fontSize='small' />
      <Typography variant='body2'>{alertText}</Typography>
    </Box>
  );
};

AuthAlert.propTypes = {
  alertText: PropTypes.string
};

export default AuthAlert;
