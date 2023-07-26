// import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, IconButton, Stack } from '@mui/material';
import { ReactComponent as DeleteIcon } from '../../assets/icons/record-delete-icon.svg';
import { STATUSES } from '../../services/requests';
// import { ReactComponent as EditIcon } from '../../assets/icons/record-edit-icon.svg';

const EmployeeManage = (props) => {
  // const { handleEdit, handleDelete } = props;
  const { handleDelete, status, width, strokeColor, spinnerSize } = props;
  return (
    <Stack direction='row' spacing='0.2rem'>
      {/* <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton> */}
      <IconButton
        onClick={handleDelete}
        sx={{ position: 'relative', 'svg>path': { stroke: strokeColor } }}
      >
        <DeleteIcon width={width} />
        {status === STATUSES.LOADING && (
          <CircularProgress sx={{ position: 'absolute', color: 'softPurple' }} size={spinnerSize} />
        )}
      </IconButton>
    </Stack>
  );
};

EmployeeManage.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  width: PropTypes.string,
  spinnerSize: PropTypes.string
};
EmployeeManage.defaultProps = {
  width: '20'
};

export default EmployeeManage;
