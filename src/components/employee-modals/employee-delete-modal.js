// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCompanyInfo } from '../../redux/slices/companySlice';
import { setStatus } from '../../redux/slices/employeeSlice';
import { STATUSES } from '../../services/requests';
import AuthModal from '../auth-modal/auth-modal';

const EmployeeDeleteModal = () => {
  const { status } = useSelector((state) => state.employee);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleCloseDeleteModal = () => {
    dispatch(setStatus(STATUSES.IDLE));
    dispatch(getCompanyInfo());
    if (status === STATUSES.SUCCESS) {
      navigate('/employee-teams');
    }
  };
  return (
    <AuthModal
      buttonText={`${status === STATUSES.ERROR ? 'Close' : 'Go Back To Employees'}`}
      heading={`${
        status === STATUSES.ERROR ? 'Something Went Wrong!' : 'File Deleted Successfully'
      }`}
      caption={`${status === STATUSES.ERROR ? 'Unable to process the request' : ''}`}
      openModal={status === STATUSES.SUCCESS || status === STATUSES.ERROR}
      handleCloseModal={handleCloseDeleteModal}
      btnClick={handleCloseDeleteModal}
      status={status}
    />
  );
};

export default EmployeeDeleteModal;
