import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBrandColor } from '../../redux/slices/companyInfoSlice';
import { colors } from '../../utils/colorArray';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import LoginLayoutLeftStepper from '../auth-stepper/auth-stepper';
import ChooseTheColorSwatches from '../choose-color-swatches/choose-color-swatches';

const ChooseTheColorForm = () => {
  let navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(setBrandColor(selectedColor));
    navigate('/preview-app');
  };

  return (
    <Stack
      justifyContent='space-between'
      sx={{
        flex: 'auto'
      }}
    >
      <Box>
        <Box sx={{ width: { xs: '100%', sm: '60%' }, margin: '0 auto' }}>
          <LoginLayoutLeftStepper activeStep={1} />
        </Box>
        <Typography variant='h2' margin='1rem 0 0.2rem 0'>
          Choose The Color Of Your Brand
        </Typography>
        <Typography variant='body3' color='#939393'>
          Choose your brand color and customize the color of the app according to your brand color
        </Typography>

        <Box sx={{ maxWidth: '23rem', margin: '2rem auto' }}>
          <ChooseTheColorSwatches
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </Box>
      </Box>
      <AuthButtonGroup
        btnType='submit'
        isFilledBtnFirst={false}
        linkText='< Back'
        btnElement='Save & Next'
        linkHref='/company-information'
        btnClick={handleNext}
      />
    </Stack>
  );
};

export default ChooseTheColorForm;
