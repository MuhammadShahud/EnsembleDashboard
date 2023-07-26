import { Box, Card, CardContent, Rating, Typography } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { ReactComponent as Star } from '../../assets/icons/onboarding_start.svg';
// import React from 'react';
import Styles from './styles';

const OnBoarding = () => {
  return (
    <Box sx={Styles}>
      <Typography variant='h1'>Start your Onboarding with us</Typography>
      <br />
      <Box sx={{maxWidth: '23.4rem'}}>
        <Typography variant='body3' my='1rem' pr='5rem'>
          Discover the world’s best community of Employee and HR
        </Typography>
      </Box>
      <Card className='onboarding-review-container'>
        <CardContent>
          <Typography variant='body3'>
            “I am really happy how Ensemble helps to set goals for our teams. Love the product”.
          </Typography>
          <Typography align='right' variant='subtitle2'>
            -Maha Siddiqui
            <br />
            <small>HR Executive Plumtree Group</small>
            <br />
            <Rating
              value={4}
              readOnly
              // size='small'
              sx={{ color: 'inherit', fontSize: '15px' }}
              // emptyIcon={<StarBorderOutlinedIcon fontSize='inherit' sx={{ color: 'white' }} />}
              emptyIcon={<Star />}
            />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OnBoarding;
