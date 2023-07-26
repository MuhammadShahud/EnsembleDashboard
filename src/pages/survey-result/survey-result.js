import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import CardWithSvgTextBtn from '../../components/svg-text-btn-card/CardWithSvgTextBtn';
import { style } from './style';
import IosShareIcon from '@mui/icons-material/IosShare';
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HandSvg from '../../assets/images/hand.svg';
import MainCard from '../../components/main-card.js/main-card';
import { LinearProgressCard } from '../../components/progress-bars/linear-progress';
import { useLocation } from 'react-router-dom';
import moment from 'moment/moment';
import { capitalizeFirstLetter, getIconFromMetrics, handleExportPdf } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { getSurveysDashboardData } from '../../services/surverysService';

const Home = () => {
  //const theme= useTheme();

  const { search } = useLocation();
  let decoded = decodeURIComponent(search);
  let params = new URLSearchParams(decoded);
  let surveyId = params.get('id');
  let surveyDate = params.get('createdAt');
  const [filteredItem, setFilteredItem] = useState({});
  const companyId = useSelector((state) => {
    return state.company.company.id;
  });
  useEffect(() => {
    if(companyId != undefined)
      getDashboardData();
  }, [companyId]);

  const getDashboardData = async () => {
    
    let response =await getSurveysDashboardData(companyId);
    const filteredItem = response.data?.result.filter((item) => {
      if (item.id === surveyId && item.createdAt === surveyDate) {
        return item;
      }
    })[0];
    // console.log({ filteredItem }, "in api handler");
    setFilteredItem(filteredItem);
  };


  return (
    <Box sx={style} bgcolor='#888888' height={'100%'}>
      <Box className='home-page-container'>
        <Box sx={{ padding: '10px' }}>
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
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ mb: 3 }}>Overall Engagement</Typography>
                </div>
                <div className='dashboard-header-wrapper'>
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
                          <span style={{ color: '#6750A4', fontSize: '3.125rem' }}>-</span>
                        </p>
                        <p style={{ margin: '10px auto 0', fontWeight: '500' }}>Great!</p>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                </div>
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
          {filteredItem && Object.keys(filteredItem).length > 0 && (
            <AnnoucementsTable setSelectedRow={null} filteredItem={filteredItem} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

const questions = [
  '1 . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
  '2 . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
  '3 . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
  '4 . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
  '5 . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
];

const AnnoucementsTable = ({ setSelectedRow, filteredItem }) => {
  // console.log({ filteredItem },'in announcementable');

  const dateToShow = moment(filteredItem?.createdAt).format('DD MMM, YYYY');
  const surveyResultRef= useRef()
  return (
    <MainCard
      reff={surveyResultRef}
      label={
        <Grid
          container
          spacing={{ xs: 0, md: 2 }}
          pb={2}
          pt={1}
          px={1}
          justifyContent='space-between'
          alignItems='flex-start'
        >
          <Grid item>
            <Typography variant='h4' style={{ fontSize: '24px' }}>
              {filteredItem?.title}
            </Typography>
            <div className='home-survey-text' style={{ marginBottom: '0', paddingBottom: '0' }}>
              <p style={{ fontSize: '16px' }}>Key Metric:</p>
              <small
                style={{
                  marginLeft: '10px',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src={getIconFromMetrics(filteredItem.metrics)}
                  style={{ marginRight: '13px' }}
                />
                {filteredItem?.metrics && capitalizeFirstLetter(filteredItem.metrics)}
              </small>
            </div>
            <div className='home-survey-text' style={{ marginTop: '6px', paddingTop: '0' }}>
              <p style={{ fontSize: '16px' }}>Launch Date:</p>
              <small style={{ marginLeft: '5px', color: 'black' }}>{dateToShow}</small>
            </div>
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
              {/* <SelectComp
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
                            /> */}
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
                onClick={()=>{handleExportPdf(surveyResultRef) }}
                startIcon={<IosShareIcon fontSize='small' />}
              >
                Export
              </Button>
            </Box>
          </Grid>
        </Grid>
      }
    >
      <Box style={{ width: '100%', padding: '10px' }}>
        <Grid spacing={2} my={2} container style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item width={{ xs: '10rem', lg: '12rem' }} height={{ xs: '10rem', lg: '12rem' }}>
            <CircularProgressbar
              value={filteredItem?.score}
              counterClockwise
              styles={buildStyles({
                pathColor: '#4AC14F',
                strokeLinecap: 'butt'
              })}
            />
          </Grid>

          <Grid item>
            <Typography>Overall Score</Typography>
            <Typography sx={{ fontSize: '40px' }}>{filteredItem?.score}%</Typography>
            <Typography>Strongly Agree</Typography>
            <Typography sx={{ color: 'grey', fontSize: '0.9375rem' }}>10% Disagree</Typography>
            <Typography sx={{ color: 'grey', fontSize: '0.9375rem' }}>10% Neutral</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ sm: 1, md: 2 }} pb={2} justifyContent='space-between'>
          {filteredItem?.surveyId &&
            filteredItem.surveyId.map((question) => {
              return (
                <Grid item md={5} xs={12} sm={6} my={1}>
                  <LinearProgressCard value={10} question={question} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </MainCard>
  );
};
export default Home;
