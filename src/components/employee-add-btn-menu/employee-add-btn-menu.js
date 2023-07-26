import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Styles from './styles';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import Fade from '@mui/material/Fade';
import EmployeeAddEmployeeModal from '../employee-modals/employee-add-employee-modal/employee-add-employee-modal';
import EmployeeAddTeamModal from '../employee-modals/employee-add-team-modal/employee-add-team-modal';
import { useDispatch } from 'react-redux';
import { getCompanyInfo } from '../../redux/slices/companySlice';

const EmployeeAddBtnMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openTeamModal, setOpenTeamModal] = React.useState(false);
  const [openEmployeeModal, setOpenEmployeeModal] = React.useState(false);

  let dispatch = useDispatch();

  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleAddTeam = () => {
    setOpenTeamModal(true);
    handleCloseMenu();
  };
  const handleCloseTeamModal = () => {
    dispatch(getCompanyInfo());
    setOpenTeamModal(false);
  };

  const handleAddEmployee = () => {
    setOpenEmployeeModal(true);
    handleCloseMenu();
  };
  const handleCloseEmployeeModal = () => {
    dispatch(getCompanyInfo());
    setOpenEmployeeModal(false);
  };

  const menuItems = [
    { name: '+Add Employee', onclick: handleAddEmployee },
    { name: '+Add Team', onclick: handleAddTeam }
  ];
  return (
    <>
      <Box
        sx={{
          width: { xs: '14rem' }
        }}
      >
        <Button
          sx={Styles}
          onClick={handleOpenMenu}
          endIcon={openMenu ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
          aria-controls={openMenu ? 'fade-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openMenu ? 'true' : undefined}
        >
          Add +
        </Button>
        <Menu
          id='fade-menu'
          MenuListProps={{
            'aria-labelledby': 'fade-button'
          }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          TransitionComponent={Fade}
          sx={{ my: '1rem' }}
          PaperProps={{
            style: {
              borderRadius: '0.4rem'
            }
          }}
        >
          {menuItems.map((menu, index) => {
            return (
              <MenuItem
                key={index}
                sx={{
                  minWidth: { xs: '14rem' },
                  fontSize: '0.875rem'
                }}
                onClick={menu.onclick}
              >
                {menu.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
      <EmployeeAddTeamModal openModal={openTeamModal} handleCloseModal={handleCloseTeamModal} />
      <EmployeeAddEmployeeModal
        openModal={openEmployeeModal}
        handleCloseModal={handleCloseEmployeeModal}
      />
    </>
  );
};

export default EmployeeAddBtnMenu;
