import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CardWithSvgTextBtn from '../../components/svg-text-btn-card/CardWithSvgTextBtn';
import { style } from './style';
//import { useTheme } from '@emotion/react';
import IosShareIcon from '@mui/icons-material/IosShare';
import { DataGrid, gridClasses, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import Happiness from '../../assets/icons/happiness-vector.svg';
// import Stats from '../../assets/icons/stats.svg';
// import Thumb from '../../assets/icons/thumb.svg';
// import Relation from '../../assets/icons/relation-with-peers.svg';
// import Recognition from '../../assets/icons/recognition.svg';
// import Blood from '../../assets/icons/blood.svg';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import HandSvg from '../../assets/images/hand.svg';
import MainCard from '../../components/main-card.js/main-card';
import CustomizedLinearProgressBars from '../../components/progress-bars/linear-progress';
import SelectComp from '../../components/select-comp/select-comp';
import { getIconFromMetrics, handleExportPdf } from '../../utils/utils';
import { getSurveysDashboardData } from '../../services/surverysService';
import { useSelector } from 'react-redux';
import EmployeeSpinner from '../../components/employee-spinner/employee-spinner';
import jsPDF from 'jspdf';
import { useRef } from 'react';


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
      return (
        <div style={{ width: '150px', textAlign: 'center' }}>
          <img src={params.row.icon} style={{ width: '20px', height: '20px' }} />
          <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{params.row.metrics}</div>
        </div>
      );
    }
  },
  {
    field: 'question',
    headerName: 'Question',
    headerAlign: 'center',
    align: 'center',
    headerClassName: 'datagrid-header-column-separator-remove',
    renderHeader: (params) => <strong>{'Question '}</strong>,
    width: 350
  },
  {
    field: '_date',
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
    width: 250,
    renderHeader: (params) => <strong>{'Score'}</strong>,
    renderCell: (params) => {
      const score = params.row.score;
      return (
        <div style={{ width: '270px' }}>
          <div style={{ width: '270px' }}>
            <CustomizedLinearProgressBars value={score} color='#4AC14F' />
          </div>
          <div style={{ fontSize: '0.75rem', marginTop: '10px' }}>
            {score}%{' '}
            {/* {selectedElem.score >= 80
              ? 'Strongly Agree'
              : selectedElem.score >= 50
                ? 'Agree'
                : selectedElem.score === 50
                  ? 'Neutral'
                  : selectedElem.score > 30
                    ? 'Disagree'
                    : 'Strongly Disagree'} */}
            Strongly Agree
          </div>
        </div>
      );
    }
  }
];

const Home = () => {
  //const theme= useTheme();
  const [filteredData, setFilteredData] = useState([]);
  const [isDataReceived, setIsDataReceived] = useState(false);
  const companyId = useSelector((state) => {
    return state.company.company.id;
  });
  useEffect(() => {
    if(companyId != undefined)
       getDashboardData();
  }, [companyId]);

  const getDashboardData = async () => {
    let response =await getSurveysDashboardData(companyId);
    if (response.status === 201) {
    setIsDataReceived(true);
    const filteredDataForTables = response.data?.result.map((row, idx) => {
      console.log(row.score, 'row.score');
      return {
        id: idx + 1,
        metrics: row.metrics,
        question: row.title,
        date: row.createdAt,
        score: row.score,
        _date: moment(row.createdAt).format('DD/MM/yyyy'),
        _id: row.id,
        icon: getIconFromMetrics(row.metrics)
      };
    });
    setFilteredData(filteredDataForTables);
  }
  };


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

                  {/* <Button
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
                  </Button> */}
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
                        - of the employees attempt the survey
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
                        - of the employees skipped the survey
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
                        value={0}
                        counterClockwise
                        styles={buildStyles({
                          pathColor: '#6750A4',
                          strokeLinecap: 'butt'
                        })}
                      >
                        <p
                          style={{ color: '#6750A4', fontSize: '1.5625rem', margin: '10px auto 0' }}
                        >
                          <span style={{ color: '#6750A4', fontSize: '3.125rem' }}> - </span>
                            {/* 0</span>/ 10 */}
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
                  text='Employees fill the survey and submit the survey by the given date.'
                  btnLabel='+ Launch Survey'
                  btnLink='/survey-key-metrics'
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 2 }} className='mt-2'>
          <AnnoucementsTable rowData={filteredData} isDataReceived={isDataReceived} />
        </Box>
      </Box>
    </Box>
  );
};

const AnnoucementsTable = ({ rowData, isDataReceived }) => {
  const [selectedRow, setSelectedRow] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMetric, setSelectedMetric] = useState('All');
  const [selectedDateRange, setSelectedDateRange] = useState('All');
  const gridRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedMetric === 'All') {
      setFilteredData(rowData);
    } else {
      setFilteredData(rowData.filter((data) => data.metrics === selectedMetric));
    }
  }, [rowData, selectedMetric, selectedDateRange]);

  useEffect(() => {
    if (selectedDateRange === 'All') {
      setFilteredData(rowData);
    } else if (selectedDateRange === 0) {
      let filteredDataOfLastThreeMonths = rowData.filter((d) => {
        let currentDate = moment();
        let threeMonthsAgo = moment().subtract(3, 'months');
        let dataDate = moment(d.date);
        return dataDate.isBetween(threeMonthsAgo, currentDate);
      });
      setFilteredData(filteredDataOfLastThreeMonths);
    } else {
      let filteredDataOfLastSixMonths = rowData.filter((d) => {
        let currentDate = moment();
        let threeMonthsAgo = moment().subtract(6, 'months');
        let dataDate = moment(d.date);
        return dataDate.isBetween(threeMonthsAgo, currentDate);
      });
      setFilteredData(filteredDataOfLastSixMonths);
    }
  }, [rowData, selectedDateRange]);
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts
    doc.setFont("Anton-Regular", "normal");

    doc.html(certificateTemplateRef.current, {
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save("Memes");
      }
    });
  };
  
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
                getValue={(value) => {
                  setSelectedMetric(value);
                }}
                style={{
                  backgroundColor: 'white !important',
                  border: '1px solid lightGrey !important',
                  width: { xs: '100%', md: '15rem' },
                  margin: '0px'
                }}
                options={[
                  { value: 'All', name: 'All' },
                  { value: 'Happiness', name: 'Happiness' },
                  { value: 'Recognition', name: 'Recognition' },
                  { value: 'Personal Growth', name: 'Personal Growth' },
                  { value: 'Ambassadorship', name: 'Ambassadorship' },
                  { value: 'Alignment', name: 'Alignment' },
                  { value: 'Feedback', name: 'Feedback' },
                  { value: 'Wellness', name: 'Wellness' },
                  { value: 'Relationship with Peer', name: 'Relationship with Peer' },
                  { value: 'Satisfaction', name: 'Satisfaction' }
                ]}

                // initialOptionIndex={teamData?.teamLead === params.row.name ? 0 : 1}
              />
              <SelectComp
                name='dated'
                id='dated'
                htmlFor='dated'
                getValue={(value) => {
                  console.log('date', value);
                  setSelectedDateRange(value);
                }}
                style={{
                  backgroundColor: 'white !important',
                  border: '1px solid lightGrey !important',
                  width: { xs: '100%', md: '15rem' },
                  margin: '0px'
                }}
                options={[
                  { value: 'All', name: 'All' },
                  { value: 0, name: 'Last 3 months' },
                  { value: 1, name: 'Last 6 months' }
                ]}
              />
              {/* <Button
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
                onClick={()=>{handleExportPdf(gridRef) }}
                startIcon={<IosShareIcon fontSize='small' />}
              >
                Export
              </Button> */}
            </Box>
          </Grid>
        </Grid>
      }
      sx={{ border: '1px solid #C9C5CA' }}
      divider={false}
    >
      <Box className='survey-dashboard-table' style={{ height: 950, width: '100%' }} ref={gridRef}>
        {isDataReceived ?
          (<DataGrid
            rows={filteredData}
            columns={columns}
            pageSize={8}
            rowHeight={100}
            onRowClick={(e) => {
              setSelectedRow(e.row);
              navigate(`/survey-result?id=${e.row._id}&createdAt=${e.row.date}`);
              console.log(e.row, 'row printing');
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
          />)
         : (
          <EmployeeSpinner status={'loading'} />
        )}
      </Box>
    </MainCard>
  );
};
export default Home;
