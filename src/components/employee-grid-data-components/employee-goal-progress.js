// import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function EmployeeGoalProgress({ progress, allEmployees, isCompleted }) {
  return (
    <Box sx={{ width: '12rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'end', width:'12rem' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant='determinate'
            value={isCompleted ? 100 : progress}
            sx={{
              height: '0.4rem',
              borderRadius: '1rem',
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: 'softPurple'
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: '1rem',
                backgroundColor: 'brightGreen'
              }
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='caption'>{isCompleted ? 100 : progress}%</Typography>
        </Box>
      </Box>
      
      {isCompleted && allEmployees && <Typography variant='caption'>Completed</Typography>}
    </Box>
  );
}

EmployeeGoalProgress.propTypes = {
  progress: PropTypes.number.isRequired
};
