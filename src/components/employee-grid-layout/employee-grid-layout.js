// import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import Styles from './styles';

const EmployeeGridLayout = (props) => {
  const { rowData, columnData, hideHeader, pageSize, otherProps } = props;

  // console.log(rowData, columnData);

  return (
    <DataGrid
      {...otherProps}
      sx={{
        ...Styles,
        '& .MuiDataGrid-columnHeaders': {
          display: hideHeader ? 'none' : 'block'
        }
      }}
      rows={rowData}
      columns={columnData}
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      autoHeight={false}
      rowHeight={85}
      // rowHeight={'auto'}
      // getRowHeight={() => {
      //   'auto';
      // }}
      disableColumnMenu
      // onRowClick={handleRowEvent}
      disableSelectionOnClick
    />
  );
};

EmployeeGridLayout.propTypes = {
  rowData: PropTypes.array,
  columnData: PropTypes.array
};
EmployeeGridLayout.defaultProps = {
  hideHeader: false,
  pageSize: 5
};

export default EmployeeGridLayout;
