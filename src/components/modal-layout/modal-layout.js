// import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import Styles from './styles';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/system';

const ModalLayout = (props) => {
  const { openModal, handleCloseModal, disable, heading, footer } = props;
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={Styles}>
        <Stack direction='row' justifyContent='space-between' minWidth='100%' pb='1rem'>
          <Typography sx={{ fontSize: '1.75rem', pl: '2.875rem' }}>{heading}</Typography>
          <IconButton className='modal-close-icon' onClick={handleCloseModal} disabled={disable}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box className='modal-content'>{props.children}</Box>
        <Box className='modal-footer'>{footer}</Box>
      </Box>
    </Modal>
  );
};

ModalLayout.propTypes = {
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  disable: PropTypes.bool
};
ModalLayout.defaultProps = {
  disable: false
};

export default ModalLayout;
