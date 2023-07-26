import { Box, Grid, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}));

export default function CustomizedLinearProgressBars({ value, color }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        style={{ color: color }}
        sx={{
          '& .MuiLinearProgress-bar1Determinate': {
            backgroundColor: color
          }
        }}
        variant='determinate'
        value={value}
      />
    </Box>
  );
}

export const LinearProgressCard = ({ question }) => {
  return (
    <Box mx={'auto'} width={{ xs: '300px', md: '440px', lg: '448px' }}>
      <Typography
        style={{
          fontSize: '1rem'
        }}
      >
        {question.question}
      </Typography>
      <Grid container style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <Grid item xs={3} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          Strongly Agree
        </Grid>
        <Grid item xs={8} pr={1}>
          <CustomizedLinearProgressBars value={question.score1} color={'#4AC14F'} />
        </Grid>
        <Grid item xs={1} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          {question.score1}%
        </Grid>
      </Grid>
      <Grid container style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <Grid item xs={3} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          Agree
        </Grid>
        <Grid item xs={8} pr={1}>
          <CustomizedLinearProgressBars value={question.score2} color={'#6FE375'} />
        </Grid>
        <Grid item xs={1} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          {question.score2}%
        </Grid>
      </Grid>
      <Grid container style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <Grid item xs={3} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          Neutral
        </Grid>
        <Grid item xs={8} pr={1}>
          <CustomizedLinearProgressBars value={question.score3} color={'#FFE250'} />
        </Grid>
        <Grid item xs={1} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          {question.score3}%
        </Grid>
      </Grid>
      <Grid container style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <Grid item xs={3} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          Disagree
        </Grid>
        <Grid item xs={8} pr={1}>
          <CustomizedLinearProgressBars value={question.score4} color={'#FF887E'} />
        </Grid>
        <Grid item xs={1} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          {question.score4}%
        </Grid>
      </Grid>
      <Grid container style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <Grid item xs={3} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          Strongly Disagree
        </Grid>
        <Grid item xs={8} pr={1}>
          <CustomizedLinearProgressBars value={question.score5} color={'#FF5648'} />
        </Grid>
        <Grid item xs={1} style={{ fontSize: '0.6875rem', color: '#000000' }}>
          {question.score5}%
        </Grid>
      </Grid>
    </Box>
  );
};
