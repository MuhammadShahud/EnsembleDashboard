import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import InputComp from '../input-comp/input-comp';
import AuthModal from '../auth-modal/auth-modal';
import { useNavigate } from 'react-router-dom';
import { passwordSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { STATUSES } from '../../services/requests';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, setStatus } from '../../redux/slices/passwordRecoverySlice';
import AuthAlert from '../auth-alert/auth-alert';

const ResetPasswordForm = () => {
  let navigate = useNavigate();
  const [openSessionExpired, setOpenSessionExpired] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const { status, serverErrMsg } = useSelector((state) => state.passwordRecovery);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    if (status === STATUSES.ERROR) {
      dispatch(setStatus(STATUSES.IDLE));
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
    resolver: yupResolver(passwordSchema)
  });

  const submitForm = (data) => {
    const input = {
      email: userInfo ? userInfo.email : null,
      newPassword: data.password,
      confirmPassword: data.confirmPassword
    };
    if (input.email === null) {
      setOpenSessionExpired(true);
      return;
    }
    dispatch(resetPassword(input));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      <Typography variant='h2'>Reset Password</Typography>
      <Typography variant='body3'>Enter Your New Password</Typography>
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}
      <Box
        component='form'
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ mt: '1rem', display: 'grid' }}
      >
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
          btnElement='Reset'
          isLinkPresent={false}
          btnType='submit'
          isLoading={status === STATUSES.LOADING}
        />

        <AuthModal
          buttonText='Login'
          heading='Password Reset Successfully'
          caption=''
          openModal={status === STATUSES.SUCCESS}
          handleCloseModal={() => {
            dispatch(setStatus(STATUSES.IDLE));
            navigate('/login');
          }}
          btnClick={() => {
            dispatch(setStatus(STATUSES.IDLE));
            navigate('/login');
          }}
        />
        <AuthModal
          buttonText='Ok'
          heading='Session Expired'
          caption='The request you made is no longer available, please make another request.'
          openModal={openSessionExpired}
          handleCloseModal={() => {
            dispatch(setStatus(STATUSES.IDLE));
            navigate('/password-recovery');
          }}
          btnClick={() => {
            dispatch(setStatus(STATUSES.IDLE));
            navigate('/password-recovery');
          }}
        />
      </Box>
    </Box>
  );
};

export default ResetPasswordForm;
