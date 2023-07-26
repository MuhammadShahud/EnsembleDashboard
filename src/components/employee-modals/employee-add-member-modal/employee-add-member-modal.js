import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { ModalFormStyle } from './styles';
import AuthButtonGroup from '../../auth-button-group/auth-button-group';
import ModalLayout from '../../modal-layout/modal-layout';
import { Stack } from '@mui/system';
import SearchEmployee from '../../input-search-employee/input-search-employee';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../../../services/requests';
import { updateTeam } from '../../../services/teams';
import AuthModal from '../../auth-modal/auth-modal';
import { getCompanyInfo } from '../../../redux/slices/companySlice';

const EmployeeAddMemberModal = (props) => {
  const { openModal, handleCloseModal, teamMemberIds, teamId } = props;

  let dispatch = useDispatch();
  const { employees } = useSelector((state) => state.company);
  const [newMembers, setNewMembers] = useState([]);
  const [status, setStatus] = useState(STATUSES.IDLE);

  const updateTeamData = async (id, data) => {
    setStatus(STATUSES.LOADING);
    try {
      await updateTeam(id, data);
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  const handleCloseAuthModal = () => {
    status === STATUSES.SUCCESS && dispatch(getCompanyInfo());
    setStatus(STATUSES.IDLE);
    setNewMembers([]);
    handleCloseModal();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newMemberIds = newMembers.map((newMember) => {
      return newMember.id;
    });
    let data = [...teamMemberIds, ...newMemberIds];
    updateTeamData(teamId, { employeeId: data });
  };

  return (
    <>
      <ModalLayout openModal={openModal} handleCloseModal={handleCloseModal}>
        <Stack
          sx={{
            minWidth: { xs: '85vw', md: '50rem', lg: '50rem' },
            padding: { xs: '1rem 0rem 0rem 0rem', lg: '2rem' }
          }}
        >
          <Box component='form' onSubmit={handleSubmit} noValidate sx={ModalFormStyle}>
            <Box className='modal-input-container'>
              <SearchEmployee
                otherProps={{ multiple: true }}
                multiple={true}
                placeholder='Select team members to add'
                options={employees.filter((employee) => {
                  return !teamMemberIds.includes(employee.id);
                })}
                value={newMembers}
                setValue={setNewMembers}
              />
              <Typography className='modal-add-member-link' variant='body2'>
                <strong>You can add multiple members</strong>
              </Typography>
            </Box>

            <Stack alignItems='center' mt='2rem'>
              <AuthButtonGroup
                isLinkPresent={false}
                btnElement={'Add new members'}
                btnType='submit'
                isLoading={status === STATUSES.LOADING}
                btnDisable={newMembers.length === 0}
              />
            </Stack>
          </Box>
        </Stack>
      </ModalLayout>

      <AuthModal
        buttonText={`${status === STATUSES.ERROR ? 'Close' : 'Go Back To Employees'}`}
        heading={`${
          status === STATUSES.ERROR ? 'Something Went Wrong!' : 'Member Added Successfully!'
        }`}
        caption={`${status === STATUSES.ERROR ? 'Unable to process the request' : ''}`}
        openModal={status === STATUSES.SUCCESS || status === STATUSES.ERROR}
        handleCloseModal={handleCloseAuthModal}
        btnClick={handleCloseAuthModal}
        status={status}
      />
    </>
  );
};

EmployeeAddMemberModal.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

export default EmployeeAddMemberModal;
