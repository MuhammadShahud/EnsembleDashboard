import { Box } from '@mui/material';
// import React from 'react';
import PropTypes from 'prop-types';
import EmployeeTabLayout from '../../components/employee-tab-layout/employee-tab-layout';
import EmployeeDetails from './employee-details';
import EmployeeGoals from './employee-goals';
import EmployeeSkillsHobbies from './employee-skills-hobbies';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamData } from '../../utils/utils';
import EmmployeeProfileHeader from './employee-profile-header';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setCurrentEmployee } from '../../redux/slices/companySlice';
import { getEmployee } from '../../services/employee';
import { STATUSES } from '../../services/requests';
import EmployeeSpinner from '../employee-spinner/employee-spinner';
import EmployeeNoDataSpinner from '../employee-spinner/employee-no-data-spinner';

const EmployeeProfile = () => {
  const { search } = useLocation();
  let decoded = decodeURIComponent(search);
  let params = new URLSearchParams(decoded);
  let employeeId = params.get('id');

  const { currentEmployee } = useSelector((state) => state.company);
  let team = getTeamData(currentEmployee.teamId);
  const [status, setStatus] = useState(STATUSES.IDLE);

  let dispatch = useDispatch();

  const getEmployeeDetails = async (id) => {
    setStatus(STATUSES.LOADING);
    try {
      let response = await getEmployee(id);
      dispatch(setCurrentEmployee(response.data));
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  useEffect(() => {
    getEmployeeDetails(employeeId);
  }, []);

  return (
    <Box>
      <EmmployeeProfileHeader
        currentEmployee={currentEmployee}
        updateEmployeeInfo={() => {
          getEmployeeDetails(employeeId);
        }}
      />
      <EmployeeTabLayout
        tabContent={[
          {
            name: 'Employee Details',
            node:
              status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                <EmployeeSpinner status={status} />
              ) : (
                <EmployeeDetails
                  colorCode={team.length > 0 ? team[0].teamColor : 'white'}
                  teamName={team.length > 0 ? team[0].teamName : null}
                  email={currentEmployee.email}
                  designation={currentEmployee.jobTitle}
                  location={currentEmployee.profileData?.location}
                  contactNo={currentEmployee.profileData?.number}
                />
              )
          },
          {
            name: 'Skills & Hobbies',
            node:
              status === STATUSES.LOADING || status === STATUSES.ERROR ? (
                <EmployeeSpinner status={status} />
              ) : !currentEmployee.questions ? (
                <EmployeeNoDataSpinner component={'Employee not onboard yet'}/>
              ) : (
                <EmployeeSkillsHobbies
                  jobDescription={currentEmployee.questions?.descKid}
                  proudAchievement={currentEmployee.questions?.achievment}
                  rockstarSkills={currentEmployee.questions?.rockstarSkills}
                  hobbies={currentEmployee.questions?.Hobbies}
                />
              )
          },
          { name: 'Goals', node: <EmployeeGoals /> }
        ]}
      />
    </Box>
  );
};

EmployeeProfile.propTypes = {
  avatarUrl: PropTypes.string,
  employeeName: PropTypes.string,
  employeeDesignation: PropTypes.string,
  employeeTraits: PropTypes.string
};

export default EmployeeProfile;
