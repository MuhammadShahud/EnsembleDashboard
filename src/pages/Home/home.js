import { Typography, Grid, CircularProgress, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DashboardMiniCard from '../../components/dashboard-mini-cards/dashboard-mini-card';
import { Greetings } from '../../components/greetings/greetings';
import moment from 'moment/moment';
import { style } from './style';
import CardWithSvgTextBtn from '../../components/svg-text-btn-card/CardWithSvgTextBtn';
import HandSvg from '../../assets/icons/create-announcement-hand.svg';
import dashboardMinicardIcon1 from '../../assets/icons/dashboard-minicard-icon1.svg';
import dashboardMinicardIcon2 from '../../assets/icons/dashboard-minicard-icon2.svg';
import dashboardMinicardIcon3 from '../../assets/icons/dashboard-minicard-icon3.svg';
import dashboardMinicardIcon4 from '../../assets/icons/dashboard-minicard-icon4.svg';
import HappyEmoji from '../../assets/icons/happy-emoji.svg';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatisticsData } from '../../services/homeDashboardService';
import { getSurveysDashboardData } from '../../services/surverysService';
import { getIconFromMetrics } from '../../utils/utils';
const Home = () => {
  const [latestSurvey, setLatestSurvey] = useState({})
  const { teams, employees, surveys, company } = useSelector((state) => state.company);
  const { userInfo } = useSelector((state) => state.auth);
  const companyId = useSelector((state) => state.company.company.id);
  const [statisticsData, setStatisticsData]= useState({
    totalTeams: '',
    totalEmployees: '',
    totalGoalsCompleted: ''
  })
  let navigate = useNavigate();
  useEffect(() => {
    if (userInfo.firstTime) {
      navigate('/personal-information');
    } else {
      navigate('/');
    }
  }, []);


  let getStatisticsDataApiHandler = async () => {
    let response = await getStatisticsData({companyId: companyId});
    if (response.status === 201) {
      console.log(response.data, "response dataaa");
      setStatisticsData(response.data);
    }
  };
  const getSurveyDataApiHandler = async () => {
    let response =await getSurveysDashboardData(companyId);
    if (response.status === 201) {
      console.log(response.data.result[0], "RESPONSE DATA")
      response.data.result.length > 0 ?  
      setLatestSurvey(response.data.result[0]) 
      : 
      setLatestSurvey(
        {
          metrics: '-',
          title: '-',
          createdAt: '-',
          score: '-',

        }
      )
  }
  };
  useEffect(()=>{
    if(companyId)
    {
      getStatisticsDataApiHandler();
      getSurveyDataApiHandler();
    }
  },[companyId])
  // console.log("home",teams, employees, surveys,company);
  return (
    <>
      {userInfo.firstTime ? (
        <Stack width={'100%'} minHeight={'100vh'} alignItems='center' justifyContent={'center'}>
          <CircularProgress />
        </Stack>
      ) : (
        <Box sx={style} bgcolor='#888888'>
          <Box className='home-page-container'>
            <Greetings userName={company?.name} />
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                margin: '2rem 0',
                gap: { xs: 1, sm: 1, lg: 1 }
              }}
            >
              <DashboardMiniCard
                heading='Teams'
                headingIcon={dashboardMinicardIcon3}
                //quantity={teams?.length}
                quantity= {statisticsData?.totalTeams}
                aTagHeading='+  Add New'
                color='#6750A4'
                btnClick={() => {
                  navigate('/employee-teams');
                }}
              />
              <DashboardMiniCard
                heading='Employees'
                headingIcon={dashboardMinicardIcon1}
                //quantity={employees?.length}
                quantity= {statisticsData?.totalEmployees}
                aTagHeading='+  Add New'
                color='#4CD07A'
                btnClick={() => {
                  navigate('/employee-teams');
                }}
              />
              <DashboardMiniCard
                heading='Goals Completed'
                headingIcon={dashboardMinicardIcon2}
                //quantity={256}
                quantity= {statisticsData?.totalGoalsCompleted}
                aTagHeading='+  View More'
                color='#E46962'
                btnClick={() => {
                  navigate('/goals');
                }}
              />
              <DashboardMiniCard
                heading='Surveys Completed'
                headingIcon={dashboardMinicardIcon4}
                quantity={'-'}
                aTagHeading='+  Add New'
                color='#454A9C'
                btnClick={() => {
                  navigate('/survey-key-metrics');
                }}
              />
            </Box>
            <Box>
              <Typography variant='h6' className='home-survey-heading'>
                Recent Survey Results
              </Typography>
              <Typography className='home-survey-text mt-0-5'>
                {moment().format('DD/MM/YYYY')}
              </Typography>
              <Typography className='home-survey-text'>
                Deep dive into pulse survey results with our powerful analytics and build your
                company culture.
              </Typography>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }} className='mt-2'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Box
                    className='d-flex home-happiness-survey-card-container'
                    sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}
                    bgcolor='white'
                  >
                    <Box
                      className='d-flex home-happiness-survey-card-leftside-container mr-0-5'
                      sx={{ width: { xs: '100%', sm: '70%' } }}
                    >
                      <Typography
                        variant='h5'
                        className='home-happiness-survey-card-leftside-heading'
                      >
                        {latestSurvey?.title}
                      </Typography>
                      <Box className='d-flex-align-center mt-1' sx={{ flexWrap: 'wrap' }}>
                        <Typography className='home-happiness-survey-card-leftside-keytext'>
                          Key Metric:
                        </Typography>
                        <Typography className='d-flex-align-center ml-0-5'>
                          <span className='mr-0-4 ml-0-4 mt-0-5'>
                            {latestSurvey?.metrics == '-'
                            ?
                            ''
                            :
                            (<img src={getIconFromMetrics(latestSurvey?.metrics)} />)
                            }
                            
                          </span>
                          <span>{latestSurvey?.metrics}</span>
                        </Typography>
                      </Box>
                      <Box className='d-flex' sx={{ flexWrap: 'wrap' }}>
                        <Typography className='home-happiness-survey-card-leftside-keytext'>
                          Launch Date:
                        </Typography>
                        <Typography className='d-flex-justify-center ml-0-5'>
                          {
                            latestSurvey?.createdAt != '-'?
                            moment(latestSurvey?.createdAt).format('DD/MM/YYYY')
                            :
                            latestSurvey?.createdAt
                          }
                        </Typography>
                      </Box>
                    </Box>
                    {/* right side */}
                    <Box width={'100%'}>
                      <Box className='home-survey-btn-container'>
                        <button className='home-survey-card-viewbtn' onClick={()=>{navigate('survey-dashboard')}}>View More</button>
                      </Box>
                      <Box
                        display='flex'
                        justifyContent={'space-around'}
                        alignItems='center'
                        gap={2}
                        flexWrap={{ xs: 'wrap', md: 'no-wrap' }}
                        marginTop={{ xs: '2rem', md: '0' }}
                      >
                        <Box
                          width={{ xs: '10rem', lg: '12rem' }}
                          height={{ xs: '10rem', lg: '12rem' }}
                        >
                          <CircularProgressbar
                            value={latestSurvey?.score == '-'? 0 : latestSurvey?.score}
                            counterClockwise
                            styles={buildStyles({
                              pathColor: '#4AC14F',
                              strokeLinecap: 'butt'
                            })}
                          />
                        </Box>
                        <Box>
                          <Typography className='home-happiness-survey-card-rightside-heading'>
                            <strong>Overall Score</strong>
                          </Typography>
                          <Typography
                            variant='h3'
                            className='home-happiness-survey-card-percentage'
                          >
                            {latestSurvey?.score == '-'? 0 : latestSurvey?.score}%
                          </Typography>
                          <Typography className='home-happiness-survey-card-rightside-text'>
                            <strong>Strongly Agree</strong>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className='home-cardwithsvgbtn-container'>
                    <CardWithSvgTextBtn
                      svgImage={HandSvg}
                      heading='Create Announcment'
                      text='Send an announcement for all your coworkers'
                      btnLabel='+ Create New'
                      btnLink= '/announcementPage'
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default Home;
