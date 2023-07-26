import { useState } from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { ReactComponent as EditIcon } from '../../assets/icons/profile-edit-icon.svg';
import requests from '../../services/requests';
import { stringToColor } from '../../utils/utils';
import EmployeeManage from '../employee-grid-data-components/employee-manage';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompanyEmployee } from '../../redux/slices/employeeSlice';
import EmployeeDeleteModal from '../employee-modals/employee-delete-modal';
import EmployeeAddEmployeeModal from '../employee-modals/employee-add-employee-modal/employee-add-employee-modal';
import { getCompanyInfo } from '../../redux/slices/companySlice';

const EmmployeeProfileHeader = (props) => {
  const { currentEmployee, updateEmployeeInfo } = props;
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const { status, id } = useSelector((state) => state.employee);
  let dispatch = useDispatch();

  return (
    <>
      <Stack
        direction={{ xs: 'column-reverse', Lp: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'center', Lp: 'start' }}
        padding='1rem'
      >
        <Stack
          direction={{ xs: 'column', Lp: 'row' }}
          spacing={{ xs: '2rem', lg: '4rem' }}
          alignItems='center'
        >
          <Avatar
            alt={currentEmployee.name}
            src={requests.PICTURE_BASE_URL + currentEmployee.profilePic}
            sx={{
              width: '11rem',
              height: '11rem',
              fontSize: '6rem',
              backgroundColor: stringToColor(currentEmployee.name),
              '& .MuiAvatar-img': { objectPosition: 'top' }
            }}
            imgProps={{
              crossOrigin: 'anonymous'
            }}
          />
          <Box textAlign={{ xs: 'center', Lp: 'left' }}>
            <Typography variant='h31'>{currentEmployee.name}</Typography>
            <Typography sx={{ fontSize: '1.125rem' }} color='darkPurple'>
              {currentEmployee.jobTitle}
            </Typography>
            <br />
            <Typography variant='body1' sx={{ fontWeight: 500 }}>
              {currentEmployee.profileData?.publicBio}
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems='center'
          gap={{ xs: '0rem', md: '1rem' }}
          mb='1rem'
        >
          <Stack direction='row' alignItems='center'>
            <IconButton
              onClick={() => {
                setOpenEmployeeModal(true);
              }}
            >
              <EditIcon />
            </IconButton>
            <Typography color='#2B2F86' variant='body2' sx={{ fontWeight: 500, ml: '0.1rem' }}>
              Edit Profile
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <EmployeeManage
              handleDelete={() => {
                dispatch(deleteCompanyEmployee(currentEmployee?.id));
              }}
              status={id === currentEmployee?.id ? status : ''}
              width='18'
              strokeColor='red'
              spinnerSize='2.1rem'
            />

            <Typography color='red' variant='body2' sx={{ fontWeight: 500, ml: '0.1rem' }}>
              Delete Profile
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <EmployeeAddEmployeeModal
        openModal={openEmployeeModal}
        handleCloseModal={() => {
          setOpenEmployeeModal(false);
          dispatch(getCompanyInfo());
          updateEmployeeInfo();
        }}
        editModal={true}
      />
      <EmployeeDeleteModal />
    </>
  );
};

export default EmmployeeProfileHeader;
