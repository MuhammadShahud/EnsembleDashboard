import { Box } from '@mui/material';
import React from 'react';

const GridDataWrapperOne = (props) => {
  return <Box sx={{ height: { xs: '47rem', tB: '35.9rem', xl: '32.5rem' } }}>{props.children}</Box>;
};

export default GridDataWrapperOne;
