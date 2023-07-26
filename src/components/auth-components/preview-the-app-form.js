import { Box, Typography, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setUserInfo } from '../../redux/slices/authSlice';
import { resetInfo } from '../../redux/slices/companyInfoSlice';
// import { getCompanyInfo } from '../../redux/slices/companySlice';
import { companyInfoReducer } from '../../services/company';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import LoginLayoutLeftStepper from '../auth-stepper/auth-stepper';

const PreviewTheAppForm = () => {
  let navigate = useNavigate();
  let history = useLocation();
  const [activeStep, setActiveStep] = useState(2);
  const [btnText, setBtnText] = useState('Save & Next');
  const [linkHref, setlinkHref] = useState('/choose-color');
  const dispatch = useDispatch();
  const companyInfoFromRedux = useSelector((state) => {
    return state.companyInfo;
  });

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (history.pathname === '/preview-app' && activeStep === 3) {
      setlinkHref(() => {
        return '/choose-color';
      });
      setActiveStep(() => {
        return 2;
      });
      setBtnText(() => {
        return 'Save & Next';
      });
    }
  }, [history]);
  const companyInfoApiHandler = async (payload) => {
    try {
      await companyInfoReducer(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBtn = () => {
    if (activeStep === 2 && btnText === 'Save & Next') {
      setActiveStep(() => {
        return 3;
      });
      setBtnText(() => {
        return 'Go to Dashboard';
      });
      setlinkHref(() => {
        return '/preview-app';
      });
    }
    if (activeStep === 3) {
      companyInfoApiHandler(companyInfoFromRedux);
      let updatedUserInfo = {
        id: userInfo.id,
        createdAt: userInfo.createdAt,
        firstTime: false
      };
      localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
      dispatch(setUserInfo(updatedUserInfo));
      // dispatch(getCompanyInfo());
      dispatch(resetInfo());
      navigate('/');
    }
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
          <LoginLayoutLeftStepper activeStep={activeStep} />
        </Box>
        <Typography variant='h2' margin='1rem 0 0.2rem 0'>
          Preview The App
        </Typography>
        <Typography variant='body3' color='#939393'>
          Review your brand name, logo and also the color and continue it.{' '}
        </Typography>
      </Box>

      <AuthButtonGroup
        isFilledBtnFirst={false}
        linkText='< Back'
        btnElement={btnText}
        btnClick={handleBtn}
        linkHref={linkHref}
      />
    </Stack>
  );
};

export default PreviewTheAppForm;
