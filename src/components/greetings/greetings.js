import { Typography } from '@mui/material';
import moment from 'moment/moment';
import React from 'react';
import { style } from './styles';
import GreetingsIcons from '../../assets/icons/greetings-icon.svg';
import { Box } from '@mui/system';

export const Greetings = ({ userName }) => {
  let date = moment().format('dddd, MMMM D');
  return (
    <Box sx={style}>
      <Typography className='greeting-date'>{date}</Typography>
      <Typography variant='h4' className='greeting-msg'>
        Good Morning, <span>{userName}</span>
        <img src={GreetingsIcons} className='ml-1' />
      </Typography>
    </Box>
  );
};
