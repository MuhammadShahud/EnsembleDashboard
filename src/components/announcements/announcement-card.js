import { Typography, Grid, IconButton } from '@mui/material';
import React from 'react';
import MainCard from '../main-card.js/main-card';
import WestIcon from '@mui/icons-material/West';
import moment from 'moment/moment';

export const Announcement = ({ title, desc, date, setSelectedRow }) => {
  return (
    <MainCard divider={false} sx={{ minHeight: '70vh' }}>
      <Grid container alignItems={'flex-start'} spacing='2'>
        <Grid item xs={1}>
          <IconButton onClick={() => setSelectedRow(null)}>
            <WestIcon sx={{ color: 'navyBlue', fontSize: '1.875rem' }} />
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <Typography sx={{ fontSize: 24, fontWeight: 400 }}>{title}</Typography>
          <Typography sx={{ color: 'iconGrey' }}>{date}</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: '1rem', my: '2rem' }}>
            Description
          </Typography>
          <Typography sx={{ color: 'iconGrey', whiteSpace: 'pre-line' }}>{desc}</Typography>
        </Grid>
      </Grid>
    </MainCard>
  );
};
