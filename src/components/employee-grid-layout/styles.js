import theme from '../../theme/theme';
const Styles = {
  [theme.breakpoints.up('xs')]: {
    border: 'none',
    // height: '47rem',

    '&.MuiDataGrid-root .MuiDataGrid-virtualScroller': {
      '&::-webkit-scrollbar': {
        width: '0.6rem',
        height: '0.6rem'
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'white'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'softPurple',
        borderRadius: 2
      }
    },
    // '& .css-1rv2iy5-MuiDataGrid-root.MuiDataGrid-autoHeight': {
    //   height: '35rem !important'
    // },
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none'
    },
    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
      outline: 'none'
    },

    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within':
      {
        outline: 'none'
      },

    '& .MuiDataGrid-footerContainer': {
      borderTop: '0px'
    },

    '& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell': {
      whiteSpace: 'normal'
    },
    '& .MuiDataGrid-iconSeparator	': {
      display: 'none'
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {},
    '& .MuiDataGrid-columnsContainer': {},
    '& .MuiPaginationItem-root': {},
    '& .MuiTablePagination-root': {},
    '& .MuiTablePagination-root:last-child': {
      padding: '2rem 0rem 0rem 0rem'
    },
    '& .MuiDataGrid-columnHeaders': {
      borderBottom: 'none'
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.1px',
      color: 'textLightGrey'
    },
    '& .MuiDataGrid-row.Mui-selected': {
      // border: '1px solid #73A0FF',
      // backgroundColor: 'red',
    },
    '& .MuiDataGrid-cell': {
      padding: '1rem 1rem'
    }
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('tB')]: {
    // height: '35.5rem'
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {
    // height: '32.5rem'
  }
};
export default Styles;
