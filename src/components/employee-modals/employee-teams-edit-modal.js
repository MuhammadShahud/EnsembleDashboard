import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import EmployeeGridLayout from '../employee-grid-layout/employee-grid-layout';
import ModalLayout from '../modal-layout/modal-layout';
import EmployeeManage from '../employee-grid-data-components/employee-manage';
import EmployeeNameAndAvatar from '../employee-grid-data-components/employee-name-and-avatar';
import SelectComp from '../select-comp/select-comp';
import AuthModal from '../auth-modal/auth-modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateTeam } from '../../services/teams';
import { STATUSES } from '../../services/requests';
import InputComp from '../input-comp/input-comp';
import ChooseTheColorSwatches from '../choose-color-swatches/choose-color-swatches';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
// import { Search } from '@mui/icons-material';
import EmployeeConfirmationModal from './employee-confirmation-modal/employee-confirmation-modal';
import { getCompanyInfo } from '../../redux/slices/companySlice';
import { ReactComponent as Search } from '../../assets/icons/employee-search-icon.svg';

const EmployeeTeamsEditModal = (props) => {
  let dispatch = useDispatch();
  const { openModal, handleCloseModal, teamData, setTeamData } = props;
  const { employees } = useSelector((state) => state.company);

  const [updateStatus, setUpdateStatus] = useState(STATUSES.IDLE);
  const [deleteStatus, setDeleteStatus] = useState(STATUSES.IDLE);

  const [selectedColor, setSelectedColor] = useState(null);
  const [employeeId, setEmployeeId] = useState([]);
  const [teamLead, setTeamLead] = useState(null);

  const [removedEmployeeId, setRemovedEmployeeId] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [startSearch, setStartSearch] = useState(false);

  const [openDelConfirmModal, setOpenDelConfirmModal] = useState(false);

  const handleCloseDeleteModal = () => {
    deleteStatus === STATUSES.SUCCESS && dispatch(getCompanyInfo());
    setDeleteStatus(STATUSES.IDLE);
  };
  const handleCloseUpdateModal = () => {
    updateStatus === STATUSES.SUCCESS && dispatch(getCompanyInfo());
    setUpdateStatus(STATUSES.IDLE);
  };
  const handleUpdate = () => {
    let teamName = document.getElementById('teamName').value;
    if (teamName.length === 0) {
      setError(true);
      return;
    }

    if (
      teamName === teamData.teamName &&
      selectedColor === teamData.teamColor &&
      teamData.teamLead === teamLead
    ) {
      handleCloseModal();
      return;
    }
    updateTeamData(
      teamData.id,
      { teamName, teamColor: selectedColor, teamLead: teamLead === 'member' ? '' : teamLead },
      setUpdateStatus
    );
  };

  const updateTeamData = async (id, data, setStatus) => {
    setStatus(STATUSES.LOADING);
    try {
      await updateTeam(id, data);
      setStatus(STATUSES.SUCCESS);
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
    }
  };

  useEffect(() => {
    return () => {
      setTeamData(null);
      setUpdateStatus(STATUSES.IDLE);
      setDeleteStatus(STATUSES.IDLE);
    };
  }, []);
  useEffect(() => {
    if (!teamData) {
      return;
    }
    setSelectedColor(teamData.teamColor);
    setTeamLead(teamData.teamLead);
    setEmployeeId(teamData.employeeId);
    setTeamMembers(() => {
      return employees.filter((employee) => {
        return teamData.employeeId.includes(employee.id);
      });
    });
  }, [teamData]);

  const columns = [
    {
      field: 'employeeName',
      headerName: 'Employee Name',
      sortable: false,
      flex: 0.5,
      minWidth: 200,
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
      field: 'role',
      headerName: 'Role',
      sortable: false,
      headerAlign: 'center',
      minWidth: 180,
      flex: 0.4,
      renderCell: (params) => {
        return (
          <Box width='100%'>
            <SelectComp
              name='team'
              id='team'
              htmlFor='team'
              roleValue={teamLead === params.row.id ? params.row.id : 'member'}
              setRoleValue={setTeamLead}
              isRoleComponent={true}
              getValue={(value) => {
                if (value === 'member') {
                  return;
                }
                setTeamLead(value);
              }}
              options={[
                { value: params.row.id, name: 'Team Lead' },
                { value: 'member', name: 'Team Member' }
              ]}
              style={{
                bgcolor: 'lightGrey'
              }}
            />
          </Box>
        );
      }
    },
    {
      field: 'manage',
      headerName: 'Manage',
      minWidth: 100,
      align: 'right',
      headerAlign: 'right',
      flex: 0.3,
      sortable: false,
      renderCell: (params) => {
        const handleDelete = () => {
          setRemovedEmployeeId(params.row.id);
          setEmployeeId((prev) => {
            return prev.filter((id) => {
              return id !== params.row.id;
            });
          });
          setOpenDelConfirmModal(true);
        };

        return (
          <EmployeeManage
            handleDelete={handleDelete}
            status={removedEmployeeId === params.row.id ? deleteStatus : STATUSES.IDLE}
          />
        );
      }
    }
  ];
  return (
    <>
      <ModalLayout
        openModal={openModal}
        handleCloseModal={() => {
          setTeamMembers([]);
          setTeamData(null);
          setUpdateStatus(STATUSES.IDLE);
          setDeleteStatus(STATUSES.IDLE);
          handleCloseModal();
        }}
        heading='Edit Team'
        footer={
          teamData ? (
            <AuthButtonGroup
              isLinkPresent={false}
              btnElement='Update'
              btnClick={handleUpdate}
              isLoading={updateStatus === STATUSES.LOADING}
            />
          ) : (
            <div></div>
          )
        }
      >
        <Stack
          className='container'
          sx={{
            minWidth: { xs: '85vw', md: '50rem', lg: '50rem' },
            padding: { xs: '1rem 0rem', mL: '1rem 1rem', lg: '0.7rem 2rem 0rem 2rem' }
          }}
        >
          <Grid container sx={{ textAlign: 'left' }} alignItems='center'>
            <Grid item xs={12} mL={4} sm={3}>
              <Typography>Edit Team Name: </Typography>
            </Grid>

            <Grid item xs={12} mL={8} sm={8} mb='1rem' px={'1rem'}>
              <InputComp
                error={error}
                errorMessage='This field is required'
                type='text'
                name='teamName'
                id='teamName'
                htmlFor='teamName'
                placeholder='Enter Team Name'
                bgColor='lightGrey'
                otherProps={{
                  defaultValue: teamData?.teamName,
                  onChange: () => {
                    setError(false);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} mL={4} sm={3}>
              <Typography>Edit Team Color: </Typography>
            </Grid>
            <Grid item xs={12} mL={8} sm={8}>
              <Box sx={{ maxWidth: '25rem' }}>
                <ChooseTheColorSwatches
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </Box>
            </Grid>
          </Grid>
          <Stack minWidth='100%' alignItems='start' mt='2rem'>
            <Typography sx={{ fontWeight: 600 }}>Members:</Typography>
            <Box sx={{ minWidth: { xs: '100%', md: '70%' } }}>
              <InputComp
                type='text'
                name='teamSearch'
                id='teamSearch'
                htmlFor='teamSearch'
                placeholder='Search a member'
                bgColor='lightGrey'
                style={{ zIndex: 10 }}
                otherProps={{
                  onChange: (event) => {
                    setStartSearch(true);
                    let query = event.target.value;
                    if (query.length === 0) {
                      setStartSearch(false);
                    }
                    setSearchResults(() => {
                      return teamMembers.filter((teamMember) => {
                        return (
                          teamMember.name.toLowerCase().substring(0, query.length) ===
                          query.toLowerCase()
                        );
                      });
                    });
                  }
                }}
                iconButton={
                  <Stack>
                    <Search />
                  </Stack>
                }
              />
            </Box>
          </Stack>

          {teamMembers.length === 0 && (
            <Stack alignItems='center' justifyContent='center' minHeight={'10rem'}>
              {teamData?.employeeId.length === 0 ? (
                <div>No employee data to show</div>
              ) : (
                <CircularProgress />
              )}
            </Stack>
          )}
          {startSearch && searchResults.length === 0 && (
            <Stack alignItems='center' justifyContent='center' minHeight={'10rem'}>
              <div>Employee not found</div>
            </Stack>
          )}
          {teamMembers.length !== 0 && !startSearch && (
            <Stack
              sx={{
                mt: { xs: '-4rem', tB: '-3rem', md: '-2rem' },
                height: {
                  xs:
                    teamMembers.length > 2
                      ? '32.85rem'
                      : teamMembers.length > 1
                      ? '25.85rem'
                      : '18.7rem',
                  tB:
                    teamMembers.length > 2 ? '26rem' : teamMembers.length > 1 ? '20rem' : '14.2rem',
                  xl: teamMembers.length > 2 ? '23rem' : teamMembers.length > 1 ? '18rem' : '13rem'
                }
              }}
            >
              <EmployeeGridLayout
                // rowData={teamData ? teamData.employeeId : []}
                rowData={teamMembers}
                columnData={columns}
                hideHeader={true}
                pageSize={3}
              />
            </Stack>
          )}
          {searchResults.length !== 0 && startSearch && (
            <Stack
              sx={{
                mt: { xs: '-4rem', tB: '-3rem', md: '-2rem' },
                height: {
                  xs:
                    teamMembers.length > 2
                      ? '32.85rem'
                      : teamMembers.length > 1
                      ? '25.85rem'
                      : '18.7rem',
                  tB:
                    teamMembers.length > 2 ? '26rem' : teamMembers.length > 1 ? '20rem' : '14.2rem',
                  xl: teamMembers.length > 2 ? '23rem' : teamMembers.length > 1 ? '18rem' : '13rem'
                }
              }}
            >
              <EmployeeGridLayout
                // rowData={teamData ? teamData.employeeId : []}
                rowData={searchResults}
                columnData={columns}
                hideHeader={true}
                pageSize={3}
              />
            </Stack>
          )}
        </Stack>
      </ModalLayout>
      <EmployeeConfirmationModal
        openModal={openDelConfirmModal}
        handleCloseModal={() => setOpenDelConfirmModal(false)}
        delBtnClick={() => {
          if (!employeeId.includes(teamLead)) {
            setTeamLead('');
            updateTeamData(teamData.id, { employeeId: employeeId, teamLead: '' }, setDeleteStatus);
          } else {
            updateTeamData(teamData.id, { employeeId: employeeId }, setDeleteStatus);
          }
          setOpenDelConfirmModal(false);
        }}
        keepBtnClick={() => {
          setEmployeeId(teamData.employeeId);
          setOpenDelConfirmModal(false);
        }}
        name='Member'
      />
      <AuthModal // delete team member
        buttonText={`${deleteStatus === STATUSES.ERROR ? 'Close' : 'Go Back To Employees'}`}
        heading={`${
          deleteStatus === STATUSES.ERROR ? 'Something Went Wrong!' : 'Member Removed Successfully'
        }`}
        caption={`${deleteStatus === STATUSES.ERROR ? 'Unable to process the request' : ''}`}
        openModal={deleteStatus === STATUSES.SUCCESS || deleteStatus === STATUSES.ERROR}
        handleCloseModal={handleCloseDeleteModal}
        btnClick={handleCloseDeleteModal}
        status={deleteStatus}
      />
      <AuthModal // update team
        buttonText={`${updateStatus === STATUSES.ERROR ? 'Close' : 'Go Back To Employees'}`}
        heading={`${
          updateStatus === STATUSES.ERROR ? 'Something Went Wrong!' : 'Team Updated Successfully'
        }`}
        caption={`${updateStatus === STATUSES.ERROR ? 'Unable to process the request' : ''}`}
        openModal={updateStatus === STATUSES.SUCCESS || updateStatus === STATUSES.ERROR}
        handleCloseModal={handleCloseUpdateModal}
        btnClick={handleCloseUpdateModal}
        status={updateStatus}
      />
    </>
  );
};

export default EmployeeTeamsEditModal;
