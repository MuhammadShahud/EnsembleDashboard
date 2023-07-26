import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ErrorPageNotFound() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'lightGrey' }}>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
          padding: '3rem',
          overflow: 'hidden'
        }}
      >
        <img src='404.png' style={{ objectFit: 'contain', width: '40rem' }} />
        <Typography variant='h3' sx={{ fontWeight: 400, lineHeight: '3rem', mt: 3 }}>
          Error 404: Page Not Found
        </Typography>
        <Typography sx={{ fontWeight: 400, fontSize: '1rem', lineHeight: '1.5rem' }}>
          It seems like the page you are looking for does not exist
        </Typography>
      </Box>
    </Box>
  );
}
