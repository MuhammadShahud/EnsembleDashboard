// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Stack, Typography } from '@mui/material';
import requests from '../../services/requests';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentEmployee } from '../../redux/slices/companySlice';
import { dynamicEmployeeNameColWidth, stringToColor } from '../../utils/utils';

const EmployeeNameAndAvatar = (props) => {
  const { avatarUrl, name, designation, employee } = props;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setCurrentEmployee(employee));
    navigate(`/employee-details?id=${employee.id}`);
    // navigate(`/employee-details`);
  };

  const url = requests.PICTURE_BASE_URL + avatarUrl;

  return (
    // <IconButton onClick={handleClick}>
    <Stack
      direction='row'
      spacing='1rem'
      onClick={handleClick}
      alignItems='center'
      sx={{ cursor: 'pointer', width: `${dynamicEmployeeNameColWidth()}px` }}
    >
      <Avatar
        alt={name}
        src={url}
        imgProps={{
          crossOrigin: 'anonymous'
        }}
        sx={{
          backgroundColor: stringToColor(name),
          '& .MuiAvatar-img': { objectPosition: 'top' },
          border: '1px solid #505050'
        }}
      />
      <Stack sx={{ textAlign: 'left' }}>
        <Typography variant='body1' color='lightBlack0'>
          {name}
        </Typography>
        <Typography variant='caption2' color='lightBlack'>
          {designation}
        </Typography>
      </Stack>
    </Stack>
    // </IconButton>
  );
};

EmployeeNameAndAvatar.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string
};

export default EmployeeNameAndAvatar;
