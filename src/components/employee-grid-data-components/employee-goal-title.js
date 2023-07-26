// import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Stack, Typography } from '@mui/material';
import { ReactComponent as GoalCompleted } from '../../assets/icons/employee-goals-completed-icon.svg';
import { ReactComponent as GoalTitle } from '../../assets/icons/employe-goals-title-icon.svg';

const EmployeeGoalTitle = (props) => {
  const { isCompleted, title } = props;
  return (
    <Stack direction='row' spacing='1rem' alignItems='center'>
      <Avatar
        sx={{
          width: '1.875rem',
          height: '1.875rem',
          '& .MuiAvatar-img': { objectPosition: 'top' },
          bgcolor: isCompleted ? 'white' : 'softPurple'
        }}
      >
        {isCompleted ? <GoalCompleted /> : <GoalTitle />}
      </Avatar>
      <Typography fontSize={{ xs: '1rem' }} color='lightBlack0'>
        {title}
      </Typography>
    </Stack>
  );
};

EmployeeGoalTitle.propTypes = {
  isCompleted: PropTypes.bool,
  title: PropTypes.string
};

export default EmployeeGoalTitle;
