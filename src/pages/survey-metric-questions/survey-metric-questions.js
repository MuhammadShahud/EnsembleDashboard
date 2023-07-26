import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { style } from './style';
//import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import HappinessVector from '../../assets/icons/happiness-vector.svg';
import VectorSend from '../../assets/icons/vector-send.svg';
import { getMetricsData, postMetric } from '../../services/surverysService';
import { setData } from '../../redux/slices/surveyResultSlice';
import { getIconFromMetrics } from '../../utils/utils';
import AuthModal from '../../components/auth-modal/auth-modal';

function MediaCard({ description }) {
  return (
    <Card
      elevation={0}
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        border: ' 0.5px solid #C9C5CA'
        // padding: '0 10px'
      }}
    >
      <CardContent style={{ textAlign: 'left', margin: '20px 0' }}>
        <Typography style={{ marginTop: '20px', color: 'black', fontSize: '15px' }}>
          {description}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
          <div
            style={{ fontSize: '10px', textAlign: 'center', margin: '0 2px' }}
            className='home-survey-grid-container'
          >
            <div
              style={{
                backgroundColor: '#EADDFF',
                height: '28px',
                borderRadius: '14.5px 0px 0px 14.5px'
              }}
            ></div>
            Strongly Disagree
          </div>
          <div
            style={{ fontSize: '10px', textAlign: 'center', fontWeight: '500', margin: '0 2px' }}
            className='home-survey-grid-container'
          >
            <div style={{ backgroundColor: '#EADDFF', height: '28px' }}></div>
            Disagree
          </div>
          <div
            style={{ fontSize: '10px', textAlign: 'center', margin: '0 2px' }}
            className='home-survey-grid-container'
          >
            <div style={{ backgroundColor: '#EADDFF', height: '28px' }}></div>
            Neutral
          </div>
          <div
            style={{ fontSize: '10px', textAlign: 'center', margin: '0 2px' }}
            className='home-survey-grid-container'
          >
            <div style={{ backgroundColor: '#EADDFF', height: '28px' }}></div>
            Agree
          </div>
          <div
            style={{ fontSize: '10px', textAlign: 'center', margin: '0 2px' }}
            className='home-survey-grid-container'
          >
            <div
              style={{
                backgroundColor: '#EADDFF',
                height: '28px',
                borderRadius: '0px 14.5px 14.5px 0px'
              }}
            ></div>
            Strongly Agree
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const Home = () => {
  const response = useSelector((state) => state.surveyResult);
  const [surveyData, setSurveyData] = useState([]);
  const [metricTitle, setMetricTitle] = useState('');
  const [isMetricCreated, setIsMetricCreated] = useState(false);
  const navigate = useNavigate();
  const companyId = useSelector((state) => {
    return state.company.company.id;
  });
  const { search } = useLocation();
  let decoded = decodeURIComponent(search);

  const dispatch = useDispatch();

  async function getSurveyDataApiHandler() {
    const response = await getMetricsData();
    console.log('response:', response);
    //const data = response.data.result.JSON();

    if (response.status == '201') {
      dispatch(setData({ data: response.data.result }));
    } else {
      console.log('Survey metric question api failed');
    }
  }

  useEffect(() => {
    getSurveyDataApiHandler();
  }, []);

  useEffect(() => {
    //console.log(response.data, "data survey")
    let filteredData = response.data.filter(({ metrics }) => `?q=${metrics}` === decoded);
    setSurveyData(filteredData);
  }, [response]);
  const postMetricApiHandler = async () => {
    let surveyQuestionsPayload = surveyData.map((item) => {
      return {
        question: item.question
      };
    });
    let finalPayload = {
      title: metricTitle,
      metrics: decoded.slice(3),
      companyId: companyId,
      surveys: surveyQuestionsPayload
    };
    //console.log(finalPayload,"final payload")
    const response = await postMetric(finalPayload);
    if (response.status == '201') {
      setIsMetricCreated(true);
    } else {
      console.log('metric creation failed');
    }
  };
  //const theme= useTheme();
  return (
    <Box sx={style} bgcolor='#888888' height={'100%'}>
      <Box className='home-page-container'>
        <Box>
          <TextField
            id='standard-basic'
            label='Enter Survey Title'
            variant='standard'
            value={metricTitle}
            onChange={(e) => {
              setMetricTitle(e.target.value);
            }}
          />
          <small
            style={{ marginTop: '1rem', color: 'black', display: 'flex', alignItems: 'center' }}
          >
            <img src={getIconFromMetrics(decoded.slice(3))} style={{ marginRight: '10px' }} />
            {/* <span>{search.slice(3)}</span> */}
            <span>{decoded.slice(3)}</span>
          </small>
          <Typography className='home-survey-text mt-0-5'>
            Send happiness survey to team members and find out the pulse of your employees.
          </Typography>
        </Box>
        <Grid container spacing={2} mt={2} style={{ display: 'flex', justifyContent: 'center' }}>
          {surveyData.map((item) => {
            return (
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <MediaCard
                  title={item.title}
                  description={item.question}
                  imageSrc={item.imageSrc}
                />
              </Grid>
            );
          })}
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          >
            {isMetricCreated && (
              <Typography variant='p' color={'green'}>
                Metric has been created
              </Typography>
            )}
            <button
              style={{
                width: '250px',
                padding: '10px 24px',
                background: '#5055AD',
                borderRadius: '100px',
                border: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={() => {
                postMetricApiHandler();
              }}
            >
              Send
              <img src={VectorSend} style={{ marginLeft: '4px' }} />
            </button>
          </Grid>
        </Grid>
        <AuthModal
          buttonText='Go Back To Surveys'
          heading='Survey Sent Successfully'
          openModal={isMetricCreated}
          handleCloseModal={() => {
            navigate('/survey-key-metrics');
          }}
          btnClick={() => {
            navigate('/survey-dashboard');
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
