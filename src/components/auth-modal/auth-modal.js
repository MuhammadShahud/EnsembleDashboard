// import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { ReactComponent as Completed } from '../../assets/icons/modal-completed-icon.svg';
import { ReactComponent as Process } from '../../assets/icons/moal-process-icon.svg';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import ModalLayout from '../modal-layout/modal-layout';
import { STATUSES } from '../../services/requests';
import { Error } from '@mui/icons-material';

const AuthModal = (props) => {
  const { buttonText, heading, caption, openModal, handleCloseModal, btnClick, status } = props;
  const loading = () => {
    return;
  };
  return (
    <ModalLayout
      openModal={openModal}
      handleCloseModal={status === STATUSES.LOADING ? loading : handleCloseModal}
      disable={status === STATUSES.LOADING}
    >
      {status === STATUSES.LOADING && <Process />}
      {status === STATUSES.ERROR && <Error sx={{ color: '#ff5447', fontSize: '3rem' }} />}
      {status === STATUSES.SUCCESS || status === STATUSES.IDLE ? <Completed /> : ''}
      <Typography variant='h6' my='1rem'>
        {heading}
      </Typography>
      <Typography variant='body2'>{caption}</Typography>
      <Box minWidth='50%' mt='1.5rem'>
        <AuthButtonGroup
          btnElement={buttonText}
          isLinkPresent={false}
          btnClick={btnClick}
          isLoading={status === STATUSES.LOADING}
        />
      </Box>
    </ModalLayout>
  );
};

AuthModal.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  status: PropTypes.string
};
AuthModal.defaultProps = {
  status: STATUSES.SUCCESS
};

export default AuthModal;
