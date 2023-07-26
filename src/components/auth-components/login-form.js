import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InputComp from '../input-comp/input-comp';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import { useNavigate } from 'react-router';
import AuthAlert from '../auth-alert/auth-alert';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';
import { STATUSES } from '../../services/requests';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser, setStatus } from '../../redux/slices/authSlice';
import { loginSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginForm = () => {
  const { status, serverErrMsg, userInfo, isAuth } = useSelector((state) => state.auth);
  const [autofilled, setAutofilled] = useState(false)
 
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(setStatus(STATUSES.IDLE));
    // if (!isAuth) return;
    // if (userInfo.firstTime) {
    //   navigate('/personal-information');
    // } else {
    //   navigate('/home');
    // }
  }, []);

  useEffect(() => {
    if (status !== STATUSES.SUCCESS) return;
    if (!isAuth) return;
    if (userInfo.firstTime) {
      navigate('/personal-information');
    } else {
      navigate('/');
    }
  }, [status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const submitForm = (data) => {
    dispatch(authenticateUser(data));
  };
  const handleInputChange = (event) => {
    if (status === STATUSES.ERROR) {
      dispatch(setStatus(STATUSES.IDLE));
    }

    if (event.target.id === 'email' && errors.email) {
      clearErrors('email');
    }
    if (event.target.id === 'password' && errors.password) {
      clearErrors('password');
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      <Typography variant='h2'>Welcome To Ensemble</Typography>
      <Typography variant='body3'>Please Login To Continue</Typography>
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}

      <Box
        component='form'
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ mt: '1rem', display: 'grid' }}
      >
        <InputComp
          error={status === STATUSES.ERROR || errors.email ? true : false}
          useAltColor={autofilled}
          type='email'
          name='email'
          id='email'
          htmlFor='email'
          label='Work Email'
          placeholder='xyz@plumtreegroup.net'
          errorMessage={errors.email?.message}
          handleChange={handleInputChange}
          otherProps={{
            ...register('email', {
              onChange: handleInputChange
            })
          }}
        />
        <br />
        <InputComp
          error={status === STATUSES.ERROR || errors.password ? true : false}
          type='password'
          name='password'
          id='password'
          htmlFor='password'
          label='Password'
          placeholder='*********'
          handleChange={handleInputChange}
          errorMessage={errors.password?.message}
          otherProps={{
            ...register('password', {
              onChange: handleInputChange
            })
          }}
        />
        <Link
          to='/password-recovery'
          style={{
            justifySelf: 'end',
            marginTop: '1rem',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.1px',
            textDecoration: 'none',
            color: `${theme.palette.passwordGrey}`
          }}
        >
          Forgot Password?
        </Link>

        <br />
        <br />
        <AuthButtonGroup
          isFilledBtnFirst={true}
          linkText='Sign Up'
          btnElement='Login'
          linkHref='/sign-up'
          btnType='submit'
          isLoading={status === STATUSES.LOADING}
        />
      </Box>
    </Box>
  );
};

export default LoginForm;
