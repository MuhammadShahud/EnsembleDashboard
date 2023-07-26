import { Stack } from '@mui/material';
import React from 'react';

const EmployeeNoDataSpinner = ({ component }) => {
  return (
    <Stack width={'100%'} height={'20vh'} alignItems='center' justifyContent={'center'}>
      {component}
    </Stack>
  );
};

export default EmployeeNoDataSpinner;
