// import React from 'react';
import PropTypes from 'prop-types';
import Brightness1 from '@mui/icons-material/Brightness1';
import {  Stack, Typography } from '@mui/material';
import { maxTeamNameChar } from '../../utils/utils';
const EmployeeTeamName = (props) => {
  // const { colorCode, teamName, handleClick } = props;
  const { colorCode, teamName } = props;
  let b = maxTeamNameChar()
  return (
    <>
      {teamName !== '-' ? (
        <Stack direction='row' spacing='1rem' alignItems='center'>
          <Brightness1 sx={{ color: `${colorCode}`, fontSize: '0.875rem' }} />
          <Typography variant='body1' color='lightBlack0' sx={{minWidth: `${b}ch`}}>
            {teamName}
          </Typography>
        </Stack>
      ) : (
        // <Button onClick={handleClick} sx={{ textTransform: 'none', cursor: 'auto' }}>
        // </Button>
        <div></div>
      )}
    </>
  );
};

EmployeeTeamName.propTypes = {
  color: PropTypes.string,
  teamName: PropTypes.string
};

export default EmployeeTeamName;
