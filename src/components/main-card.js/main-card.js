import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const MainCard = ({ label, children, sx, divider = true, reff}) => {
  return (
    <Box
      className='p-1 mb-2'
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        p: { md: '2rem 4rem', xs: '0' },
        ...sx
      }}
      ref={reff}
    >
      {label && <Typography variant='h4'>{label}</Typography>}
      {divider && <Divider />}
      {children}
    </Box>
  );
};

export default MainCard;
