import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import { useNavigate } from 'react-router-dom';
import { STATUSES } from '../../services/requests';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus, verifyCode } from '../../redux/slices/passwordRecoverySlice';
import AuthAlert from '../auth-alert/auth-alert';
import AuthModal from '../auth-modal/auth-modal';
import RICIBs from 'react-individual-character-input-boxes';
import theme from '../../theme/theme';

const NewPasswordForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSessionExpired, setOpenSessionExpired] = useState(false);
  const [digitCode, setDigitCode] = useState(null);
  const [error, setError] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const { status, serverErrMsg } = useSelector((state) => state.passwordRecovery);

  useEffect(() => {
    if (status !== STATUSES.SUCCESS) return;
    navigate('/reset-password');

    return () => {
      dispatch(setStatus(STATUSES.IDLE));
    };
  }, [status]);

  useEffect(() => {
    if (digitCode === null) return;
    setError(false);
  }, [digitCode]);

  const handleCloseModal = () => {
    dispatch(setStatus(STATUSES.IDLE));
    navigate('/password-recovery');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (digitCode === null) {
      setError(true);
      return;
    }
    if (digitCode.length !== 4) {
      setError(true);
      return;
    }
    setError(false);
    const input = {
      code: Number(digitCode),
      email: userInfo ? userInfo.email : null
    };
    if (input.email === null) {
      setOpenSessionExpired(true);
      return;
    }
    dispatch(verifyCode(input));
  };
  const handleOutput = (string) => {
    setDigitCode(string);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}

      <Typography variant='h2' mt='2rem'>
        Hey {userInfo ? userInfo.name : 'User'}!
      </Typography>
      <br />
      <Typography variant='body3'>
        A request has been made to reset your password. Enter the four digit code to proceed with
        the request.
      </Typography>
      <br />

      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: '1rem', display: 'grid' }}>
        <Stack direction='row' gap='1rem' alignItems='center' justifyContent='center'>
          <RICIBs
            amount={4}
            autoFocus
            handleOutputString={handleOutput}
            inputProps={{
              style: {
                color: 'black',
                border: `${error ? '1px solid red' : '0px'}`,
                backgroundColor: `${theme.palette.lightCyan}`
              }
            }}
            inputRegExp={/^[0-9]$/}
          />
        </Stack>
        {error && (
          <Typography
            variant='body1'
            color='red'
            pl='0.5rem'
            mt='1rem'
            sx={{ textAlign: 'center' }}
          >
            This field is required
          </Typography>
        )}
        <br />
        <br />
        <br />

        <AuthButtonGroup
          isFilledBtnFirst={true}
          btnElement='Set New Password'
          btnType='submit'
          isLinkPresent={false}
          isLoading={status === STATUSES.LOADING}
        />
        <AuthModal
          buttonText='Ok'
          heading='Session Expired'
          caption='The request you made is no longer available, please make another request.'
          openModal={openSessionExpired}
          handleCloseModal={handleCloseModal}
          btnClick={handleCloseModal}
        />
      </Box>
    </Box>
  );
};

NewPasswordForm.propTypes = {
  name: PropTypes.string
};

export default NewPasswordForm;
