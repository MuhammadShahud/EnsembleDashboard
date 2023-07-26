import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CardWithSvgTextBtn from '../../components/svg-text-btn-card/CardWithSvgTextBtn';
import { style } from './style';
//import { useTheme } from '@emotion/react';
import IosShareIcon from '@mui/icons-material/IosShare';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Happiness from '../../assets/icons/happiness-vector.svg';
import Stats from '../../assets/icons/stats.svg';
import Thumb from '../../assets/icons/thumb.svg';
import HandSvg from '../../assets/images/hand.svg';
import MainCard from '../../components/main-card.js/main-card';
import CustomizedLinearProgressBars from '../../components/progress-bars/linear-progress';
import SelectComp from '../../components/select-comp/select-comp';

const data = [
  {
    id: 1,
    icon: Happiness,
    metrics: 'Happiness',
    question: 'Happiness Survey For November 2022',
    date: '20 Nov, 2022',
    score: 80
  },
  {
    id: 2,
    icon: Stats,
    metrics: 'Recognition',
    question: 'Overall Recognition Survey for October 2022',
    date: '28/10/ 2022',
    score: 80
  },
  {
    id: 3,
    icon: Thumb,
    metrics: 'Happiness',
    question: 'Happiness Survey For November 2022',
    date: '15/10/2022',
    score: 50
  }
];
const columns = [
  {
    field: 'metrics',
    headerName: 'Metrics',
    headerClassName: 'datagrid-header-column-separator-remove',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    renderHeader: (params) => <strong>{'Metrics '}</strong>,
    renderCell: (params) => {
      let selectedElem = data.find((e) => {
        return e.id == params.id;
      });

      return (
        <div style={{ width: '150px', textAlign: 'center' }}>
          <img src={selectedElem.icon} style={{ width: '20px', height: '20px' }} />
          <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{selectedElem.metrics}</div>
        </div>
      );
    }
  },
  {
    field: 'question',
    headerName: 'Question',
    headerAlign: 'center',
    headerClassName: 'datagrid-header-column-separator-remove',
    renderHeader: (params) => <strong>{'Question '}</strong>,
    width: 400
  },
  {
    field: 'date',
    headerName: 'Date',
    headerAlign: 'center',
    align: 'center',
    headerClassName: 'datagrid-header-column-separator-remove',
    renderHeader: (params) => <strong>{'Date '}</strong>,
    width: 200
  },
  {
    field: 'score',
    headerName: 'Score',
    headerAlign: 'center',
    align: 'center',
    headerClassName: 'datagrid-header-column-separator-remove',
    width: 400,
    renderHeader: (params) => <strong>{'Score'}</strong>,
    renderCell: (params) => {
      let selectedElem = data.find((e) => {
        return e.id == params.id;
      });
      return (
        <div style={{ width: '270px' }}>
          <div style={{ width: '270px' }}>
            <CustomizedLinearProgressBars value={selectedElem.score} color='#4AC14F' />
          </div>
          <div style={{ fontSize: '0.75rem', marginTop: '10px' }}>
            {selectedElem.score}%{' '}
            {selectedElem.score >= 80
              ? 'Strongly Agree'
              : selectedElem.score >= 50
              ? 'Agree'
              : selectedElem.score === 50
              ? 'Neutral'
              : selectedElem.score > 30
              ? 'Disagree'
              : 'Strongly Disagree'}
          </div>
        </div>
      );
    }
  }
];

const Home = () => {
  //const theme= useTheme();
  return (
    <Box sx={style} bgcolor='#888888' height={'100%'}>
      <Box className='home-page-container'>
        <Box>
          <Typography className='home-survey-heading'>Survey Dashboard</Typography>
          <Typography className='home-survey-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book
          </Typography>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }} className='mt-2'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <div className='home-happiness-survey-card-container'>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  <Typography>Overall Engagement</Typography>

                  <Button
                    variant='outlined'
                    sx={{
                      color: 'lightPurple',
                      borderRadius: 12,
                      borderColor: 'lightPurple',
                      height: '3rem',
                      '&:hover': {
                        borderColor: 'lightPurple',
                        backgroundColor: 'lightPurple',
                        color: 'white'
                      }
                    }}
                    startIcon={<IosShareIcon fontSize='small' />}
                  >
                    Export
                  </Button>
                </div>
                <Box className='dashboard-header-wrapper'>
                  <div style={{ width: '100%' }}>
                    <Box className='d-flex mt-2' sx={{ flexWrap: 'wrap', color: '#605D62' }}>
                      <div
                        className='home-btn-text'
                        style={{
                          background: '#6750A4'
                        }}
                      ></div>
                      <small className='home-dashboard-text'>
                        70% of the employees attempt the survey
                      </small>
                    </Box>
                    <Box className='d-flex mt-2' sx={{ flexWrap: 'wrap', color: '#605D62' }}>
                      <div
                        className='home-btn-text'
                        style={{
                          background: '#F1F2F4'
                        }}
                      ></div>

                      <small className='home-dashboard-text'>
                        30% of the employees skipped the survey
                      </small>
                    </Box>
                  </div>
                  <div>
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <CircularProgressbarWithChildren
                        value={70}
                        counterClockwise
                        styles={buildStyles({
                          pathColor: '#6750A4',
                          strokeLinecap: 'butt'
                        })}
                      >
                        <p
                          style={{ color: '#6750A4', fontSize: '1.5625rem', margin: '10px auto 0' }}
                        >
                          <span style={{ color: '#6750A4', fontSize: '3.125rem' }}>7</span>/ 10
                        </p>
                        <p style={{ margin: '5px auto 0', fontWeight: '500' }}>Great!</p>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className='home-cardwithsvgbtn-container'>
                <CardWithSvgTextBtn
                  svgImage={HandSvg}
                  heading='Create Announcment'
                  text='Employees fill the survey and submit the survey by the given date.
                                    '
                  btnLabel='+ Launch Survey'
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 2 }} className='mt-2'>
          <AnnoucementsTable setSelectedRow={null} />
        </Box>
      </Box>
    </Box>
  );
};

const AnnoucementsTable = ({ setSelectedRow }) => {
  return (
    <MainCard
      label={
        <Grid container spacing={{ xs: 0, md: 2 }} pb={2} pl={1} justifyContent='space-between'>
          <Grid item>
            <Typography variant='h4'>Survey Result</Typography>
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
                options={[
                  { value: 0, name: 'All' },
                  { value: 1, name: 'Last 6 months' }
                ]}
              />
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
                options={[
                  { value: 0, name: 'Last 3 months' },
                  { value: 1, name: 'Last 6 months' }
                ]}
              />
              <Button
                variant='outlined'
                sx={{
                  color: 'lightPurple',
                  borderRadius: 12,
                  borderColor: 'lightPurple',
                  height: '3rem',
                  width: 'fit-content',
                  '&:hover': {
                    borderColor: 'lightPurple'
                  }
                }}
                startIcon={<IosShareIcon fontSize='small' />}
              >
                Export
              </Button>
            </Box>
          </Grid>
        </Grid>
      }
      sx={{ border: '1px solid #C9C5CA' }}
      divider={false}
    >
      <Box className='survey-dashboard-table' style={{ height: 950, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={8}
          rowHeight={100}
          onRowClick={(e) => {
            setSelectedRow(e.row);
            console.log(e.row);
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
      </Box>
    </MainCard>
  );
};
export default Home;
