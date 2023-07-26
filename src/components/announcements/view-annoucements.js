import IosShareIcon from '@mui/icons-material/IosShare';
import { Box, Button, Grid, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAnnouncementsData } from '../../services/surverysService';
import { handleExportPdf } from '../../utils/utils';
import EmployeeSpinner from '../employee-spinner/employee-spinner';
import MainCard from '../main-card.js/main-card';
import SelectComp from '../select-comp/select-comp';
import { Announcement } from './announcement-card';
import { style } from './styles';

const columns = [
  {
    field: 'title',
    headerName: 'Announcement Title',
    width: 400,
    headerAlign: 'center',
    align: 'center',
    renderHeader: (params) => <strong>Announcement Title</strong>
  },
  {
    field: 'text',
    headerName: 'Description',
    headerAlign: 'center',
    align: 'center',
    width: 450,
    renderHeader: (params) => <strong>Description</strong>
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    width: 200,
    headerAlign: 'center',
    align: 'center',
    renderHeader: (params) => <strong>Date</strong>
  }
];


const ViewAnnoucements = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [announcementsData, setAnnouncementsData] = useState([]);
  const [isDataReceived, setIsDataReceived] = useState(false);
  const companyId = useSelector((state) => {
    return state.company.company.id;
  });

  let fetchAnnouncementsData = async () => {
    let response = await getAnnouncementsData({ companyId: companyId, type: 'Hr Announcement' });
    if (response.status === 201) {
      //console.log(response.data.result);
      setIsDataReceived(true);
      setAnnouncementsData(response.data.result.results);
    }
  };

  useEffect(() => {
    fetchAnnouncementsData();
  }, []);

  return (
    <Box style={style}>
      {selectedRow ? (
        <Announcement
          title={selectedRow.title}
          desc={selectedRow.text}
          date={selectedRow.createdAt}
          setSelectedRow={setSelectedRow}
        />
      ) : (
        <AnnoucementsTable
          setSelectedRow={setSelectedRow}
          announcementsData={announcementsData}
          isDataReceived={isDataReceived}
        />
      )}
    </Box>
  );
};

const AnnoucementsTable = ({ setSelectedRow, announcementsData, isDataReceived }) => {
  const [filteredData, setFilteredData] = useState([]);
  const gridRef = useRef();
  const exampleRows = [
    {
      id: 1,
      title: 'test announcement 2',
      text: 'hello its another announcement',
      createdAt: '2023-02-18T13:37:36.725Z',
      _id: '63f0d4a0bf4cdb0e63cf7ab1'
    },
    {
      id: 2,
      title: 'test announcement 2',
      text: 'hello its another announcement',
      createdAt: '2022-12-18T13:37:36.725Z',
      _id: '63f0d4a0bf4cdb0e63cf7ab1'
    },
    {
      id: 3,
      title: 'test announcement 2',
      text: 'hello its another announcement',
      createdAt: '2022-10-18T13:37:36.725Z',
      _id: '63f0d4a0bf4cdb0e63cf7ab1'
    },
    {
      id: 4,
      title: 'test announcement 2',
      text: 'hello its another announcement',
      createdAt: '2022-02-18T13:37:36.725Z',
      _id: '63f0d4a0bf4cdb0e63cf7ab1'
    }
  ];
  const dataFormatForTable = (dataProp) => {
    //console.log('data format');
    let formattedData = dataProp?.map((item, idx) => {
      return {
        id: idx + 1,
        title: item.title,
        text: item.text,
        createdAt: moment(item.createdAt).format('DD/MM/YYYY'),
        _id: item.id
      };
    });
    setFilteredData(formattedData);
  };

  useEffect(() => {
    dataFormatForTable(announcementsData);
  }, [announcementsData]);

  const getSelectedData = (value) => {
    if(value != '0')
    {let filteredDataOfLastMonths = filteredData.filter((item) => {
      let currentDate = moment();
      let MonthsAgo = moment().subtract(value === 1 ? 3 : 6, 'months');
      let dataDate = moment(item.createdAt);
      return dataDate.isBetween(MonthsAgo, currentDate);
    });
    //console.log(filteredDataOfLastMonths,"filtered data of last monthssssss")
    setFilteredData(filteredData);}
    else{
      //console.log("all filter working")
      setFilteredData(filteredData)
    }
  };

  return (
    <MainCard
    sx={{padding:'0 !important'}} 
      divider={false}
      label={
        <Grid container spacing={{ xs: 0, md: 2 }} pb={2} justifyContent='space-between' pr={'3rem'} pl={'3rem'} >
          <Grid item>
            <Typography variant='h4' marginLeft={'2rem'}>
              View Annoucements
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: { xs: 'wrap', md: 'nowrap' }
              }}
            >
              <SelectComp
                name='dated'
                id='dated'
                htmlFor='dated'
                style={{
                  backgroundColor: 'white !important',
                  border: '1px solid lightGrey !important',
                  width: { xs: '100%', md: '15rem' },
                  margin: '0px'
                }}
                getValue={(value) => {
                  getSelectedData(value)
                }}
                options={[
                  { value: 0, name: 'All' },
                  { value: 1, name: 'Last 3 months' },
                  { value: 2, name: 'Last 6 months' }
                ]}
              />
              <Button
                variant='outlined'
                sx={{
                  color: 'lightPurple',
                  borderRadius: 12,
                  borderColor: 'lightPurple',
                  height: '3rem',
                  '&:hover': {
                    borderColor: 'lightPurple'
                  }
                }}
                startIcon={<IosShareIcon fontSize='small' />}
                onClick={()=>{handleExportPdf(gridRef) }}
              >
                Export
              </Button>
            </Box>
          </Grid>
        </Grid>
      }
    >
      <Box style={{ maxHeight: 900, height: 500, width: '100%' }} ref={gridRef}>
        {isDataReceived ? (
          <DataGrid
             //rows={filteredData}
            rows={filteredData}
            columns={columns}
            pageSize={10}
            rowHeight={100}
            onRowClick={(e) => {
              setSelectedRow(e.row);
              //console.log(e.row);
            }}
            disableColumnSelector={false}
            disableColumnFilter={false}
            sx={{
              border: 'none !important',
              [`& .${gridClasses.row}.even`]: {
                backgroundColor: '#F6F6F6',
                [`& .MuiDataGrid-cell`]: {
                  borderBottom: 'none !important'
                },
                '&:hover': {
                  backgroundColor: '#F6F6F6',
                  cursor: 'pointer'
                }
              },
              [`& .${gridClasses.row}.odd`]: {
                [`& .MuiDataGrid-cell`]: {
                  borderBottom: 'none !important'
                },
                '&:hover': {
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }
              },
              [`& .MuiDataGrid-footerContainer`]: {
                borderTop: 'none !important'
              },
              [`& .MuiDataGrid-columnHeaders`]: {
                border: ' none !important'
              },
              [`& .MuiDataGrid-columnSeparator`]: {
                visibility: 'none !important',
                display: 'none !important'
              }
            }}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
          />
        ) : (
          <EmployeeSpinner status={'loading'} />
        )}
      </Box>
    </MainCard>
  );
};
export default ViewAnnoucements;
