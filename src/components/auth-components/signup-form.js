import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import InputComp from '../input-comp/input-comp';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import { useNavigate } from 'react-router';
import { registerUser, setStatus } from '../../redux/slices/registerSlice';
import { useDispatch, useSelector } from 'react-redux';
import AuthModal from '../auth-modal/auth-modal';
import AuthAlert from '../auth-alert/auth-alert';
import { registerSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { STATUSES } from '../../services/requests';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { status, serverErrMsg } = useSelector((state) => state.register);
  // const { isAuth, userInfo } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setStatus(STATUSES.IDLE));
    };
  }, []);

  const handleCloseModal = () => {
    dispatch(setStatus(STATUSES.IDLE));
    navigate('/');
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
    if (event.target.id === 'confirmPassword' && errors.confirmPassword) {
      clearErrors('confirmPassword');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const submitForm = (data) => {
    const input = {
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword
    };
    dispatch(registerUser(input));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      <Typography variant='h2'>Welcome To Ensemble</Typography>
      <Typography variant='body3'>Please Login To Continue</Typography>
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}

      <Box component='form' noValidate onSubmit={handleSubmit(submitForm)} sx={{ marginTop: 1 }}>
        <InputComp
          error={errors.email ? true : false}
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

        <InputComp
          error={errors.password ? true : false}
          type='password'
          name='password'
          id='password'
          htmlFor='password'
          label='Password'
          placeholder='*********'
          errorMessage={errors.password?.message}
          handleChange={handleInputChange}
          otherProps={{
            ...register('password', {
              onChange: handleInputChange
            })
          }}
        />
        <InputComp
          error={errors.confirmPassword ? true : false}
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          htmlFor='confirmPassword'
          label='Confirm Password'
          placeholder='*********'
          errorMessage={errors.confirmPassword?.message}
          handleChange={handleInputChange}
          otherProps={{
            ...register('confirmPassword', {
              onChange: handleInputChange
            })
          }}
        />
        <br />
        <br />
        <AuthButtonGroup
          isFilledBtnFirst={true}
          linkText='Login'
          btnElement='Sign Up'
          linkHref='/'
          btnType='submit'
          isLoading={status === STATUSES.LOADING}
        />
      </Box>
      <AuthModal
        buttonText='OK'
        heading='Account created successfully!'
        openModal={status === STATUSES.SUCCESS}
        handleCloseModal={handleCloseModal}
        btnClick={handleCloseModal}
      />
    </Box>
  );
};

export default SignUpForm;
