import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Typography } from '@mui/material';
import React from 'react';
import InputComp from '../input-comp/input-comp';
import { style } from './styles';
// import ButtonPurple from '../button-purple/button-purple';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import MainCard from '../main-card.js/main-card';

const labels = [
  { name: 'label-1', label: 'Name', team: 'Tom Cruise' },
  { name: 'label-2', label: 'Designation', team: 'HR Manager' },
  { name: 'label-3', label: 'Phone No', team: '+92 340 1234567' },
  { name: 'label-4', label: 'Location', team: 'Chicago, Illinois' }
];

const passwords = [
  { name: 'label-1', label: 'Current Password', team: '********' },
  { name: 'label-2', label: 'New Password', team: '********' },
  { name: 'label-2', label: 'Confirm Password', team: '********' }
];
const OtherTab = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      cPassword: data.get('cpassword')
    });
  };
  return (
    <Box style={style}>
      <MainCard
        label={
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Typography variant='h4'>Admin Information</Typography>
          </Box>
        }
      >
        <Box component='form' onSubmit={handleSubmit} noValidate>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {labels.map((item, ind) => (
              <Box key={ind} sx={{ minWidth: '48%' }}>
                <InputComp
                  type='text'
                  name={item.name}
                  id={item.name}
                  htmlFor={item.name}
                  label={item.label}
                  placeholder={item.team}
                  iconButton={<EditOutlinedIcon sx={{ color: 'iconGrey' }} />}
                />
                <br />
              </Box>
            ))}
          </Box>
        </Box>
      </MainCard>

      <MainCard label='Change Password'>
        <Box className='mt-2 ml-0-5' sx={{ color: 'iconGrey' }}>
          {passwords.map((item, ind) => (
            <Box key={ind} sx={{ maxWidth: '48%' }}>
              <InputComp
                type='text'
                name={item.name}
                id={item.name}
                htmlFor={item.name}
                label={item.label}
                placeholder={item.team}
                iconButton={<VisibilityIcon sx={{ color: 'iconGrey' }} />}
              />
              <br />
            </Box>
          ))}
        </Box>
      </MainCard>
      <Box sx={{ width: { md: '30%', xs: '50%' }, mx: 'auto' }}>
        {/* <ButtonPurple inputType='submit'>Save</ButtonPurple> */}
        <AuthButtonGroup isLinkPresent={false} btnType='submit' btnElement='Save' />
      </Box>
    </Box>
  );
};

export default OtherTab;
