import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { style } from './style';
const CardWithSvgTextBtn = ({ svgImage, heading, text, btnLabel, btnLink = '' }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: '100%', ...style }}>
      <Box style={{ padding: '40px 0' }} className='cardwithsvgtextbtn-container' bgcolor='white'>
        <Box className='cardwithsvgtextbtn-img-container'>
          <img src={svgImage} />
        </Box>
        <Box>
          <Typography variant='h5' className='cardwithsvgtextbtn-heading'>
            {heading}
          </Typography>
          <Typography className='cardwithsvgtextbtn-text'>{text}</Typography>
        </Box>
        <Button
          variant='filled'
          className='cardwithsvgtextbtn-btn'
          onClick={() => {
            navigate(btnLink);
          }}
        >
          {btnLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default CardWithSvgTextBtn;
