import { useState } from 'react';
import EmployeeTeamName from '../employee-grid-data-components/employee-team-name';
import EmployeeGridLayout from '../employee-grid-layout/employee-grid-layout';
import EmployeeAvatarGroup from '../employee-grid-data-components/employee-avatar-group';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeam } from '../../services/teams';
import { STATUSES } from '../../services/requests';
import AuthModal from '../auth-modal/auth-modal';
import { getCompanyInfo } from '../../redux/slices/companySlice';
import EmployeeTeamsEditModal from '../employee-modals/employee-teams-edit-modal';
import EmployeeManageTeamMenu from '../employee-grid-data-components/employee-manage-team-menu';
import EmployeeAddMemberModal from '../employee-modals/employee-add-member-modal/employee-add-member-modal';
import EmployeeConfirmationModal from '../employee-modals/employee-confirmation-modal/employee-confirmation-modal';
import EmployeeNoDataSpinner from '../employee-spinner/employee-no-data-spinner';
import GridDataWrapperOne from './grid-data-wrapper-one';
import { dynamicTeamNameColWidth } from '../../utils/utils';

const EmployeeTeamsData = () => {
  const [openEditTeamModal, setOpenEditTeamModal] = useState(false);
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  const [openDeleteTeamModal, setOpenDeleteTeamModal] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [teamId, setTeamId] = useState('');
  const [teamMemberIds, setTeamMemberIds] = useState([]);
  const [teamData, setTeamData] = useState(null);
  const [status, setStatus] = useState(STATUSES.IDLE);

  const { teams, employees } = useSelector((state) => state.company);


  let dispatch = useDispatch();
  const employeesData = (employeesId) => {
    return employees.filter((employee) => {
      return employeesId.includes(employee.id);
    });
  };
  const handleCloseDeleteModal = () => {
    status === STATUSES.SUCCESS && dispatch(getCompanyInfo());
    setCloseMenu((prev) => {
      return !prev;
    });
    setStatus(STATUSES.IDLE);
  };
  const handleDeleteTeam = async (id) => {
    setStatus(STATUSES.LOADING);
    try {
      await deleteTeam(id);
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  const columns = [
    {
      field: 'teamName',
      headerName: 'Team Name',
      sortable: false,
      headerAlign: 'left',
      flex: 1,
      minWidth: dynamicTeamNameColWidth(),
      renderCell: (params) => {
        return <EmployeeTeamName colorCode={params.row.teamColor} teamName={params.row.teamName} />;
      }
    },
    {
      field: 'teamMembers',
      headerName: 'Team Members',
      sortable: false,
      flex: 1,
      minWidth: 180,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => {
        let employees = employeesData(params.row.employeeId);

        const photoUrl = (employeesDataArray) => {
          let pics = employeesDataArray.map((employeeData) => {
            return { profilePic: employeeData.profilePic, name: employeeData.name };
          });
          // console.log(pics)
          return pics;
        };
        return <EmployeeAvatarGroup avatarUrls={photoUrl(employees)} />;
      }
    },
    {
      field: 'manage',
      headerName: 'Manage',
      minWidth: 100,
      align: 'right',
      headerAlign: 'right',
      flex: 0.7,
      sortable: false,
      // description: 'This column has a value getter and is not sortable.',
      renderCell: (params) => {
        return (
          <EmployeeManageTeamMenu
            status={status}
            closeMenu={closeMenu}
            handleEdit={() => {
              // setTeamId(params.row.id);
              // setTeamMemberIds(params.row.employeeId);
              setTeamData(params.row);
              setOpenEditTeamModal(true);
            }}
            handleDelete={() => {
              setOpenDeleteTeamModal(true);
              setTeamId(params.row.id);
            }}
            handleAdd={() => {
              setTeamId(params.row.id);
              setTeamMemberIds(params.row.employeeId);
              setOpenAddMemberModal(true);
            }}
          />
        );
      }
    }
  ];

  return (
    <>
      {teams.length !== 0 ? (
        <GridDataWrapperOne>
          <EmployeeGridLayout rowData={teams} columnData={columns} />
        </GridDataWrapperOne>
      ) : (
        <EmployeeNoDataSpinner component={<div>No team data available</div>} />
      )}
      <EmployeeTeamsEditModal
        openModal={openEditTeamModal}
        handleCloseModal={() => setOpenEditTeamModal(false)}
        // teamId={teamId}
        // teamMemberIds={teamMemberIds}
        teamData={teamData}
        setTeamData={setTeamData}
      />
      <EmployeeAddMemberModal
        openModal={openAddMemberModal}
        handleCloseModal={() => setOpenAddMemberModal(false)}
        teamMemberIds={teamMemberIds}
        teamId={teamId}
      />
      <EmployeeConfirmationModal
        openModal={openDeleteTeamModal}
        handleCloseModal={() => setOpenDeleteTeamModal(false)}
        delBtnClick={() => {
          setOpenDeleteTeamModal(false);
          handleDeleteTeam(teamId);
        }}
        keepBtnClick={() => {
          setOpenDeleteTeamModal(false);
          setCloseMenu((prev) => {
            return !prev;
          });
        }}
        name='Team'
      />
      <AuthModal // delete team
        buttonText={`${status === STATUSES.ERROR ? 'Close' : 'Go Back To Employees'}`}
        heading={`${
          status === STATUSES.ERROR ? 'Something Went Wrong!' : 'Team Deleted Successfully'
        }`}
        caption={`${status === STATUSES.ERROR ? 'Unable to process the request' : ''}`}
        openModal={status === STATUSES.SUCCESS || status === STATUSES.ERROR}
        handleCloseModal={handleCloseDeleteModal}
        btnClick={handleCloseDeleteModal}
        status={status}
      />
    </>
  );
};

export default EmployeeTeamsData;
