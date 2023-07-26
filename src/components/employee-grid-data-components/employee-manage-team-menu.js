import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { STATUSES } from '../../services/requests';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
// import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import { CircularProgress } from '@mui/material';
// import { STATUSES } from '../../services/requests';

// const ITEM_HEIGHT = 48;

export default function EmployeeManageTeamMenu(props) {
  const { status, handleEdit, handleDelete, handleAdd, closeMenu } = props;
  // const { handleEdit, handleDelete, handleAdd } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // if (!closeMenu) {
    //   return;
    // }

    setAnchorEl(null);
  }, [closeMenu]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    {
      name: 'Edit Team',
      onClick: () => {
        handleEdit();
        handleClose();
      }
    },
    {
      name: 'Remove Team',
      onClick: () => {
        handleDelete();
        // handleClose();
      }
    },
    {
      name: 'Add a new member',
      onClick: () => {
        handleAdd();
        handleClose();
      }
    }
  ];

  return (
    <div>
      <IconButton onClick={handleClick}>
        {/* {!anchorEl ? <MoreVertIcon /> : <CancelOutlinedIcon />} */}
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={{ margin: '-1.5rem 0rem 0rem 0rem' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            minWidth: '18ch'
          }
        }}
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right'
        // }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={option.onClick}
            sx={{
              // borderBottom: options.length - 1 === index ? '0px' : '1px solid #B3B3B3',
              fontSize: '0.875rem',
              fontWeight: 500,
              pr: { sm: '0.2rem', md: '0rem' }
            }}
          >
            {option.name}
            {index === 1 && status === STATUSES.LOADING && (
              <CircularProgress sx={{ ml: '0.5rem', color: '#8b8b8b' }} size='1rem' />
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
