import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import InputComp from '../input-comp/input-comp';
import AuthModal from '../auth-modal/auth-modal';
import { useNavigate } from 'react-router-dom';
import { emailSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { STATUSES } from '../../services/requests';
import { useDispatch, useSelector } from 'react-redux';
import {
  forgetPassword,
  setServerErrMsg,
  setStatus
} from '../../redux/slices/passwordRecoverySlice';
import AuthAlert from '../auth-alert/auth-alert';

const PasswordRecoveryForm = () => {
  let navigate = useNavigate();

  const { status, serverErrMsg } = useSelector((state) => state.passwordRecovery);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStatus(STATUSES.IDLE));
      dispatch(setServerErrMsg(''));
    };
  }, []);

  const handleCloseModal = () => {
    dispatch(setStatus(STATUSES.IDLE));
    navigate('/set-new-password');
  };
  const handleInputChange = (event) => {
    if (status === STATUSES.ERROR) {
      dispatch(setStatus(STATUSES.IDLE));
    }
    if (event.target.id === 'email' && errors.email) {
      clearErrors('email');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(emailSchema)
  });

  const submitForm = (data) => {
    dispatch(forgetPassword(data));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      <Typography variant='h2'>Password Recovery</Typography>
      <Typography variant='body3' mt={{ xs: '1rem', sm: '0rem' }}>
        Please Enter Your Email
      </Typography>
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}
      <Box component='form' onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: '1rem' }}>
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
        <br />
        <br />
        <AuthButtonGroup
          btnElement='Next'
          isLinkPresent={false}
          btnType='submit'
          isLoading={status === STATUSES.LOADING}
        />

        <AuthModal
          buttonText='OK'
          heading='Code Sent'
          caption='We have sent the code to reset your password on your registered email address.'
          openModal={status === STATUSES.SUCCESS}
          handleCloseModal={handleCloseModal}
          btnClick={handleCloseModal}
        />
      </Box>
    </Box>
  );
};

export default PasswordRecoveryForm;
