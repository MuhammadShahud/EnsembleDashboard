import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import ModalLayout from '../../modal-layout/modal-layout';
import BtnPrimary from '../../btn-primary/btn-primary';

const EmployeeConfirmationModal = (props) => {
  const { openModal, handleCloseModal, delBtnClick, keepBtnClick, name } = props;

  return (
    <>
      <ModalLayout openModal={openModal} handleCloseModal={handleCloseModal}>
        <Box sx={{ minWidth: { xs: '85vw', sm: '30rem' } }}>
          <Stack maxWidth='20rem' mt='1.5rem' gap={'1rem'} mx='auto'>
            <Typography sx={{ fontSize: '1.5rem' }} my='1rem'>
              <strong>Are Sure You Want To Remove This {name}?</strong>
            </Typography>
            <BtnPrimary
              btnText={` Yes, Remove This ${name}`}
              light={false}
              btnClick={delBtnClick}
            />
            <BtnPrimary btnText={` No, Keep this ${name}`} light={true} btnClick={keepBtnClick} />
          </Stack>
        </Box>
      </ModalLayout>
    </>
  );
};

EmployeeConfirmationModal.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

export default EmployeeConfirmationModal;
