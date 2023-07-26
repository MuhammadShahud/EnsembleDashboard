import { Box, Grid, Stack, Typography } from '@mui/material';
// import React from 'react';
import PropTypes from 'prop-types';
// import { VerifiedUser } from '@mui/icons-material';
import EmployeeTeamName from '../employee-grid-data-components/employee-team-name';
import { ReactComponent as Team } from '../../assets/icons/profile-team-icon.svg';
import { ReactComponent as Email } from '../../assets/icons/profile-email-icon.svg';
import { ReactComponent as Phone } from '../../assets/icons/profile-phone-icon.svg';
import { ReactComponent as Designation } from '../../assets/icons/profile-designation-icon.svg';
import { ReactComponent as Location } from '../../assets/icons/profile-location-icon.svg';

const ComponentLayout = (props) => {
  const { icon, title } = props;
  return (
    <Stack direction='row' spacing='1rem' margin='1rem 1rem 1rem 0rem'>
      <Box sx={{paddingTop: '4.5px', width:'1rem'}}>{icon}</Box>
      <Box>
        <Typography sx={{ fontSize: '1.125rem' }} color='lightBlack'>
          {title}
        </Typography>
        {props.children}
      </Box>
    </Stack>
  );
};

ComponentLayout.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string
};

const EmployeeDetails = (props) => {
  const { teamName, email, designation, location, contactNo, colorCode } = props;
  return (
    <Grid container padding={{ xs: '0.2rem' }}>
      <Grid item xs={12} md='auto' minWidth='22rem'>
        <ComponentLayout icon={<Team />} title='Team'>
          {!teamName ? (
            <Box ml='0.5rem'>-</Box>
          ) : (
            <EmployeeTeamName colorCode={colorCode} teamName={teamName} />
          )}
        </ComponentLayout>
      </Grid>
      <Grid item xs={12} md={6} xl={7}>
        <ComponentLayout icon={<Designation />} title='Designation'>
          <Typography variant='body1' sx={{ fontWeight: 500 }}>
            {designation}
          </Typography>
        </ComponentLayout>
      </Grid>
      <Grid item xs={12} md='auto' minWidth='22rem'>
        <ComponentLayout icon={<Email />} title='Email:'>
          <Typography
            color='skyBlue'
            variant='body1'
            sx={{ overflowWrap: 'anywhere', fontWeight: 500 }}
          >
            {email}
          </Typography>
        </ComponentLayout>
      </Grid>
      <Grid item xs={12} md='auto'>
        <ComponentLayout icon={<Location />} title='Location'>
          <Typography variant='body1' sx={{ fontWeight: 500 }}>
            {location ? location : <Box ml='0.5rem'>-</Box>}
          </Typography>
        </ComponentLayout>
      </Grid>
      <Grid item xs={12}>
        <ComponentLayout icon={<Phone />} title='Phone No'>
          <Typography variant='body1' sx={{ fontWeight: 500 }}>
            {contactNo ? contactNo : <Box ml='0.5rem'>-</Box>}
          </Typography>
        </ComponentLayout>
      </Grid>
    </Grid>
  );
};

EmployeeDetails.propTypes = {
  teamName: PropTypes.string,
  email: PropTypes.string,
  designation: PropTypes.string,
  location: PropTypes.string,
  contactNo: PropTypes.string
};

export default EmployeeDetails;
