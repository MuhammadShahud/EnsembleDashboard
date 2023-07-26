import { Button } from '@mui/material';
import React from 'react';
import theme from '../../theme/theme';

const BtnPrimary = (props) => {
  const { btnText, btnClick, light } = props;
  return (
    <Button
      onClick={btnClick}
      sx={{
        bgcolor: light ? 'white' : 'darkPurple',
        color: light ? 'darkPurple' : 'white',
        textTransform: 'none',
        borderRadius: '3rem',
        border: `1px solid ${theme.palette.darkPurple}`,
        padding: '0.5rem 2rem',
        fontSize: '1rem',
        width: '100%',
        '&:hover': {
          backgroundColor: light ? 'white' : 'darkPurple'
        }
      }}
    >
      {btnText}
    </Button>
  );
};

export default BtnPrimary;
