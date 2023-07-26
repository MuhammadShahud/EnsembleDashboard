import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { style } from './style';
//import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alignment from '../../assets/icons/alignment.svg';
import Blood from '../../assets/icons/blood.svg';
import Flag from '../../assets/icons/flag.svg';
import HappinessVector from '../../assets/icons/happiness-vector.svg';
import Stats from '../../assets/icons/stats.svg';
import Thumb from '../../assets/icons/thumb.svg';
import Trophy from '../../assets/icons/trophy.svg';
import Exchange from '../../assets/icons/exchange.svg';
import { setData } from '../../redux/slices/surveyResultSlice';
import { getMetricsData } from '../../services/surverysService';

const data = [
  {
    id: 1,
    title: 'Happiness',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: HappinessVector
  },
  {
    id: 2,
    title: 'Recognition',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Trophy
  },
  {
    id: 3,
    title: 'Personal Growth',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Stats
  },
  {
    id: 4,
    title: 'Ambassadorship',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Flag
  },
  {
    id: 5,
    title: 'Alignment',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Alignment
  },
  {
    id: 6,
    title: 'Feedback',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Exchange
  },
  {
    id: 7,
    title: 'Wellness',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Blood
  },
  {
    id: 8,
    title: 'Satisfaction',
    description: 'Lorem Ipsum is simply dummy text of the printing',
    imageSrc: Thumb
  }
];

function MediaCard({ imageSrc, title, description }) {
  const navigate = useNavigate();

  return (
    <Card elevation={0} style={{ border: '0.5px solid #C9C5CA', borderRadius: '4px' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            backgroundColor: '#F6EDFF',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px auto'
          }}
        >
          <img src={imageSrc || HappinessVector} alt='' />
        </div>

        <Typography gutterBottom sx={{ fontSize: '16px', fontWeight: 'bold' }} component='div'>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '15px', fontWeight: '500' }} color='text.secondary'>
          {description}
        </Typography>
        <button
          onClick={() => navigate(`/survey-metric-questions?q=${title}`)}
          className='home-survey-card-viewbtn'
          style={{
            textAlign: 'center',
            margin: '30px auto',
            backgroundColor: '#5055AD',
            color: 'white'
          }}
        >
          Launch
        </button>
      </CardContent>
    </Card>
  );
}

const Home = () => {
  return (
    <Box sx={style} bgcolor='#888888' height={'100%'}>
      <Box className='home-page-container'>
        <Box>
          <Typography className='home-survey-heading'>Key Metrics</Typography>
          <Typography className='home-survey-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book
          </Typography>
        </Box>
        <Grid container spacing={2} mt={2}>
          {data.map((item) => {
            return (
              <Grid item lg={3} md={4} sm={12}>
                <MediaCard
                  title={item.title}
                  description={item.description}
                  imageSrc={item.imageSrc}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
