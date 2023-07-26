// import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { STATUSES } from '../../services/requests';

const EmployeeSpinner = ({ status }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '20vh',
        display: 'flex',
        alignItems: ' center',
        justifyContent: 'center'
      }}
    >
      {status === STATUSES.ERROR && <Typography>Unable to load Data</Typography>}
      {status === STATUSES.LOADING && (
        <CircularProgress size='3rem' sx={{ ml: '1rem', color: '#8b8b8b' }} />
      )}
    </Box>
  );
};

export default EmployeeSpinner;
