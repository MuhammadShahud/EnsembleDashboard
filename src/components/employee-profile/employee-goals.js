// import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getEmployeeGoals } from '../../services/goals';
import { STATUSES } from '../../services/requests';
import EmployeeGoalsStatus from '../employee-data/employee-goals-status';
import EmployeeSpinner from '../employee-spinner/employee-spinner';
import EmployeeTabLayout from '../employee-tab-layout/employee-tab-layout';

const EmployeeGoals = () => {
  const { search } = useLocation();
  let decoded = decodeURIComponent(search);
  let params = new URLSearchParams(decoded);
  let employeeId = params.get('id');

  const [status, setStatus] = useState(STATUSES.LOADING);
  const [allGoals, setAllGoals] = useState(null);
  const [completedGoals, setCompletedGoals] = useState([]);
  const [incompleteGoals, setIncompleteGoals] = useState([]);

  const getAllEmployeeGoals = async (id) => {
    setStatus(STATUSES.LOADING);
    try {
      let response = await getEmployeeGoals(id);
      setAllGoals(response.data);
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  useEffect(() => {
    if (!allGoals) {
      return;
    }

    setCompletedGoals(() => {
      return allGoals.filter((goals) => {
        return goals.isCompleted;
      });
    });
    setIncompleteGoals(() => {
      return allGoals.filter((goals) => {
        return !goals.isCompleted;
      });
    });
  }, [allGoals]);

  useEffect(() => {
    getAllEmployeeGoals(employeeId);
  }, []);
  return (
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
                allEmployees={false}
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
                allEmployees={false}
                rowData={completedGoals}
              />
            )
        }
      ]}
    />
  );
};

export default EmployeeGoals;
