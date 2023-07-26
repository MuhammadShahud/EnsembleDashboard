// import React from 'react';
// import PropTypes from 'prop-types'
import EmployeeGridLayout from '../employee-grid-layout/employee-grid-layout';
import EmployeeGoalTitle from '../employee-grid-data-components/employee-goal-title';
import EmployeeNameAndAvatar from '../employee-grid-data-components/employee-name-and-avatar';
import EmployeeGoalProgress from '../employee-grid-data-components/employee-goal-progress';
import moment from 'moment/moment';
import EmployeeNoDataSpinner from '../employee-spinner/employee-no-data-spinner';
import GridDataWrapperOne from './grid-data-wrapper-one';
import { dynamicEmployeeNameColWidth } from '../../utils/utils';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const EmployeeGoalsStatus = ({ isCompleted, allEmployees, rowData }) => {
  // console.log('w', dynamicEmployeeNameColWidth());
  const dynamicGoalWidth = () => {
    const theme = useTheme();
    const tablet = useMediaQuery(theme.breakpoints.up('tB'));
    let root = tablet ? 16 : 10;
    let lengths = rowData.map((data) => {
      return Number(data.goal.length);
    });
    // console.log('length', lengths);
    let sorted = lengths.sort(function (a, b) {
      return b - a;
    });
    let returnWidth = sorted[0] * root;

    return returnWidth < 350 ? returnWidth : 350;
  };
  const columns = [
    {
      field: 'goal',
      headerName: 'Goal Title',
      sortable: false,
      headerAlign: 'center',
      minWidth: dynamicGoalWidth(),
      flex: 1.2,
      renderCell: (params) => {
        return <EmployeeGoalTitle isCompleted={isCompleted} title={params.row.goal} />;
      }
    },
    {
      field: 'owner',
      headerName: 'Owner',
      sortable: false,
      minWidth: dynamicEmployeeNameColWidth(),
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <EmployeeNameAndAvatar
            employee={params.row.employeeId}
            avatarUrl={params.row.employeeId?.profilePic}
            name={params.row.employeeId?.name}
            designation={params.row.employeeId?.jobTitle}
          />
        );
      }
    },
    {
      field: 'dueDate',
      headerName: 'Due Date',
      minWidth: 200,
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <Box sx={{ minWidth: '16ch' }}> {moment(params.row.dueDate).format('DD MMMM, YYYY')}</Box>
        );
      }
    },
    {
      field: 'progress',
      headerName: 'Progress',
      minWidth: 200,
      align: 'right',
      headerAlign: 'center',
      flex: 1,
      sortable: false,
      // description: 'This column has a value getter and is not sortable.',
      renderCell: (params) => {
        return (
          <EmployeeGoalProgress
            progress={params.row.progress}
            isCompleted={isCompleted}
            allEmployees={allEmployees}
          />
        );
      }
    }
  ];
  return (
    <>
      {rowData.length === 0 ? (
        <EmployeeNoDataSpinner
          component={isCompleted ? 'No completed goals available' : 'No ongoing goals available'}
        />
      ) : (
        <GridDataWrapperOne>
          <EmployeeGridLayout rowData={rowData} columnData={columns} />
        </GridDataWrapperOne>
      )}
    </>
  );
};

// EmployeeGoalsStatus.propTypes = {};

export default EmployeeGoalsStatus;
