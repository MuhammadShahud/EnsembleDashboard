import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Style } from './styles';
// import React from 'react';

const DashboardMiniCard = ({ heading, headingIcon, quantity, aTagHeading, color, btnClick }) => {
  return (
    <Box sx={Style}>
      <Box className='dashboard-mini-card-container' bgcolor='white'>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography className='dashboard-heading'>{heading}</Typography>
          <img src={headingIcon} />
        </Box>
        <Typography className='dashboard-quantity'>{quantity}</Typography>
        <Button sx={{ alignSelf: 'start', textTransform: 'none' }} onClick={btnClick}>
          <Typography className='dashboard-atag-text' style={{ color: color }}>
            {aTagHeading}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardMiniCard;
