import { useState } from 'react';
import PropTypes from 'prop-types';
import EmployeeAddEmployeeForm from './employee-add-employee-form';
import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as Completed } from '../../../assets/icons/modal-completed-icon.svg';
// import { useDispatch } from 'react-redux';
// import { getCompanyInfo } from '../../../redux/slices/companySlice';
import AuthButtonGroup from '../../auth-button-group/auth-button-group';
import ModalLayout from '../../modal-layout/modal-layout';

const EmployeeAddEmployeeModal = (props) => {
  const { openModal, handleCloseModal, editModal } = props;
  const [sentStatus, setSentStatus] = useState(false);
  // let dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const handleInviteSent = (email) => {
    setSentStatus(true);
    setEmail(email);
  };
  // const handleSaveEmployee = () => {
  //   handleCloseModal();
  // };

  return (
    <ModalLayout openModal={openModal} handleCloseModal={handleCloseModal}>
      <Stack
        sx={{
          minWidth: { xs: '85vw', sm: '40rem', lg: '50rem' },
          padding: { xs: '1rem 0.5rem', lg: '2rem' }
        }}
      >
        {!sentStatus && (
          <EmployeeAddEmployeeForm
            handleModalBtn={editModal ? handleCloseModal : handleInviteSent}
            editModal={editModal}
          />
        )}
        {!editModal && sentStatus && (
          <Box padding={{ xs: '0.2rem', md: '2rem' }}>
            <Completed />
            <Typography variant='h6' my='1rem'>
              Invite Sent Successfully To:
            </Typography>
            <Typography variant='body2' color='textLightGrey'>
              {email}
            </Typography>
            <Box minWidth='16rem' mt='1.5rem'>
              <AuthButtonGroup
                btnElement='Go Back To Employees'
                isLinkPresent={false}
                btnClick={() => {
                  setSentStatus(false);
                  handleCloseModal();
                }}
              />
            </Box>
          </Box>
        )}
      </Stack>
    </ModalLayout>
  );
};

EmployeeAddEmployeeModal.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};
EmployeeAddEmployeeModal.defaultProps = {
  editModal: false
};

export default EmployeeAddEmployeeModal;
