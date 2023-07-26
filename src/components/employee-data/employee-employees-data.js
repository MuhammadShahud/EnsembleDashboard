// import React, { useEffect, useState } from 'react';
import EmployeeManage from '../employee-grid-data-components/employee-manage';
import EmployeeTeamName from '../employee-grid-data-components/employee-team-name';
import EmployeeGridLayout from '../employee-grid-layout/employee-grid-layout';
import { Box, Typography } from '@mui/material';
import EmployeeNameAndAvatar from '../employee-grid-data-components/employee-name-and-avatar';
import { useDispatch, useSelector } from 'react-redux';
import {
  dynamicEmployeeNameColWidth,
  dynamicTeamNameColWidth,
  getTeamData
} from '../../utils/utils';
import { deleteCompanyEmployee } from '../../redux/slices/employeeSlice';
import EmployeeDeleteModal from '../employee-modals/employee-delete-modal';
import EmployeeNoDataSpinner from '../employee-spinner/employee-no-data-spinner';
import GridDataWrapperOne from './grid-data-wrapper-one';

const EmployeeEmployeesData = () => {
  const { employees } = useSelector((state) => state.company);
  const { status, id } = useSelector((state) => state.employee);
  let dispatch = useDispatch();
  console.log('w', dynamicEmployeeNameColWidth());
  // console.log('w', dynamicTeamNameColWidth());

  const columns = [
    {
      field: 'employeeName',
      headerName: 'Employee Name',
      sortable: false,
      flex: 1,
      // flex: 0.5,
      minWidth: dynamicEmployeeNameColWidth(),
      align: 'left',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <EmployeeNameAndAvatar
            employee={params.row}
            avatarUrl={params.row.profilePic}
            name={params.row.name}
            designation={params.row.jobTitle}
          />
        );
      }
    },
    {
      field: 'goalsCompleted',
      headerName: 'Goals Completed',
      sortable: false,
      flex: 1,

      // flex: 0.5,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        return (
          <Typography variant='body1'>
            {params.row.goalsCompleted}{' '}
            {/* 25{' '} */}
            <Typography variant='caption2' color='#505050'>
              Goals
            </Typography>
          </Typography>
        );
      }
    },
    {
      field: 'teamName',
      headerName: 'Team',
      sortable: false,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      minWidth: dynamicTeamNameColWidth(),
      // flex: 0.2,
      renderCell: (params) => {
        let team = getTeamData(params.row.teamId);
        return (
          <EmployeeTeamName
            colorCode={team.length === 0 ? 'white' : team[0].teamColor}
            teamName={team.length === 0 ? '-' : team[0].teamName}
          />
        );
      }
    },
    {
      field: 'manage',
      headerName: 'Manage',
      minWidth: 80,
      align: 'right',
      flex: 0.5,

      headerAlign: 'right',
      // flex: 0.2,
      sortable: false,
      // description: 'This column has a value getter and is not sortable.',
      renderCell: (params) => {
        return (
          <EmployeeManage
            handleDelete={() => {
              dispatch(deleteCompanyEmployee(params.row.id));
            }}
            status={id === params.row.id ? status : ''}
          />
        );
      }
    }
  ];
  return (
    <>
      {employees.length !== 0 ? (
        <GridDataWrapperOne>
          <EmployeeGridLayout rowData={employees} columnData={columns} />
        </GridDataWrapperOne>
      ) : (
        // <Box sx={{ height: { xs: '47rem', tB: '35.5rem', xl: '32.5rem' } }}>
        // </Box>
        <EmployeeNoDataSpinner component={<div>No employee data available</div>} />
      )}
      <EmployeeDeleteModal />
    </>
  );
};

export default EmployeeEmployeesData;
