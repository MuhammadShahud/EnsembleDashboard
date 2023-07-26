import { Grid } from '@mui/material';
import { useEffect } from 'react';
import EmployeeEmployeesData from '../../components/employee-data/employee-employees-data';
import EmployeeLayout from '../../components/employee-layout/employee-layout';
import EmployeeTabLayout from '../../components/employee-tab-layout/employee-tab-layout';
import { getCompanyInfo, setApiCall } from '../../redux/slices/companySlice';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeSpinner from '../../components/employee-spinner/employee-spinner';
import { STATUSES } from '../../services/requests';
import EmployeeTeamsData from '../../components/employee-data/employee-teams-data';

const EmployeeTeamsPage = () => {
  let dispatch = useDispatch();
  const { status, apiCall } = useSelector((state) => state.company);

  useEffect(() => {
    if (apiCall === true) {
      dispatch(getCompanyInfo());
    }
    dispatch(setApiCall(true));
  }, []);
  return (
    <>
      <EmployeeLayout
        heading='Employee Profile'
        subHeading='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum '
        isAddBtnPresent={true}
        isBackArrorPresent={false}
        content={
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <EmployeeTabLayout
                tabContent={[
                  {
                    name: 'Teams',
                    node:
                      status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                        <EmployeeSpinner status={status} />
                      ) : (
                        <EmployeeTeamsData />
                      )
                  },
                  {
                    name: 'All Employees',
                    node:
                      status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                        <EmployeeSpinner status={status} />
                      ) : (
                        <EmployeeEmployeesData />
                      )
                  }
                ]}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        }
      />
    </>
  );
};

export default EmployeeTeamsPage;
