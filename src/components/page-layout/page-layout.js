import { Typography, Box, IconButton } from '@mui/material';
import React from 'react';
import { style } from './styles';
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from 'react-router-dom';

//import { useTheme } from '@emotion/react';
const PageLayout = ({ children, label, content }) => {
  const navigate= useNavigate();
  return (
    <Box sx={style}>
      <Box className='page-container'>
        <div className='main-heading'>
          <IconButton sx={{ mr: 1 }}>
            <WestIcon sx={{ color: 'navyBlue', fontSize: '2rem' }} onClick={()=>{navigate(-1)}}/>
          </IconButton>
          <Typography variant='h3' className='heading-text'>
            {label}
          </Typography>
        </div>
        <Typography className='content' sx={{ mt: 1 }}>
          {content}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
