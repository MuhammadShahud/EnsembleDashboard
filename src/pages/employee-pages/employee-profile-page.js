import { Grid } from '@mui/material';
// import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EmployeeLayout from '../../components/employee-layout/employee-layout';
import EmployeeProfile from '../../components/employee-profile/employee-profile';
import { setApiCall } from '../../redux/slices/companySlice';

const EmployeeDetailsPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <>
      <EmployeeLayout
        heading='Employee Profile'
        isAddBtnPresent={false}
        isBackArrorPresent={true}
        handleBackArrowClick={() => {
          dispatch(setApiCall(false));
          // console.log("api")
          navigate('/employee-teams');
        }}
        content={
          <Grid container paddingX={{ xs: '0rem', lg: '1rem' }}>
            <Grid item xs={12}>
              <EmployeeProfile />
            </Grid>
          </Grid>
        }
      />
    </>
  );
};

export default EmployeeDetailsPage;
