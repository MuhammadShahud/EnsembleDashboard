import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import React from 'react';
import EmployeeGoalsStatus from '../../components/employee-data/employee-goals-status';
import EmployeeLayout from '../../components/employee-layout/employee-layout';
import EmployeeSpinner from '../../components/employee-spinner/employee-spinner';
import EmployeeTabLayout from '../../components/employee-tab-layout/employee-tab-layout';
import { getAllGoals } from '../../services/goals';
import { STATUSES } from '../../services/requests';

const GoalsPage = () => {
  const [status, setStatus] = useState();
  const [allGoals, setAllGoals] = useState(null);
  const [completedGoals, setCompletedGoals] = useState([]);
  const [incompleteGoals, setIncompleteGoals] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const getAllEmployeeGoals = async (id) => {
    setStatus(STATUSES.LOADING);
    try {
      let response = await getAllGoals(id);
      setAllGoals(response.data);
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  useEffect(() => {
    if (!allGoals) {
      return;
    }

    setCompletedGoals(() => {
      return allGoals.filter((goals) => {
        return goals.isCompleted && goals.employeeId !== null;
      });
    });
    setIncompleteGoals(() => {
      return allGoals.filter((goals) => {
        return !goals.isCompleted  && goals.employeeId !== null;
      });
    });
  }, [allGoals]);

  useEffect(() => {
    getAllEmployeeGoals(userInfo.id);
  }, []);
  return (
    <EmployeeLayout
      heading='Goals'
      subHeading='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum '
      isAddBtnPresent={false}
      isBackArrorPresent={false}
      content={
        <Grid container paddingX={{ xs: '0rem', sm: '3rem' }}>
          <Grid item xs={12}>
            <EmployeeTabLayout
              tabContent={[
                {
                  name: 'Ongoing',
                  node:
                    status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                      <EmployeeSpinner status={status} />
                    ) : (
                      <EmployeeGoalsStatus
                        isCompleted={false}
                        allEmployees={true}
                        rowData={incompleteGoals}
                      />
                    )
                },
                {
                  name: 'Completed',
                  node:
                    status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                      <EmployeeSpinner status={status} />
                    ) : (
                      <EmployeeGoalsStatus
                        isCompleted={true}
                        allEmployees={true}
                        rowData={completedGoals}
                      />
                    )
                }
              ]}
            />
          </Grid>
        </Grid>
      }
    />
  );
};

export default GoalsPage;
