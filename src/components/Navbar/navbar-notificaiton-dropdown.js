import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Badge, Box, Button, Grid, Typography } from '@mui/material';
import { ReactComponent as Notification } from '../../assets/icons/navbar-notification.svg';
import { ReactComponent as SurveyIcon } from '../../assets/icons/navbar-notification-dropdown-icon1.svg';
import { Brightness1 } from '@mui/icons-material';
import moment from 'moment';
import requests from '../../services/requests';
import { getIconFromMetrics } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { updateCompanyInfo } from '../../services/notifications';

export default function NavbarNotificationDropdown({notificationsData,isNewNoti}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { company } = useSelector((state) => state.company);
  const [newNoti, setNewNoti]= React.useState(company.webNoti)
  const navigate= useNavigate();
  const open = Boolean(anchorEl);
  // updateCompanyInfo
  const updateCompanyInfoApiHandler=async ()=>{
    let response = await updateCompanyInfo({webNoti: false},company.id);
    if (response.status == '201') {
      console.log('webnoti changed');
    }
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    updateCompanyInfoApiHandler();
    setNewNoti(false);
    console.log("closing")
  };
  React.useEffect(()=>{
    setNewNoti(company.webNoti)
  },[company.webNoti])
  return (
    <Box>
       {
        newNoti? 
        (<Badge color='info' badgeContent={""} onClick={handleClick}>
          <Notification />
        </Badge>):
        (<Badge color='info' onClick={handleClick}>
        <Notification />
        </Badge>)
       }
      

      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '25rem',
            borderRadius: '1.2rem'
          }
        }}
        sx={{
          mt: '1.5rem',
          '& .MuiMenu-paper': {
            '&::-webkit-scrollbar': {
              width: '0.6rem'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'white',
              marginTop: '5rem',
              marginBottom: '1rem'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'softPurple',
              borderRadius: 2
            }
          }
        }}
      >
        <Grid container sx={{ py: '1rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Typography variant='h6'>Notifications</Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>

        {
          notificationsData.length>0?
          notificationsData?.map((noti, index) => {
          return (
            <MenuItem
              key={index}
              sx={{
                padding: '1rem 2rem',
                maxWidth: '25rem'
              }}
            >
             
              <Box alignSelf='start'>
                {/* <Brightness1
                  sx={{
                    color: `${index === 0 ? 'darkPurple' : 'white'}`,
                    fontSize: '0.5rem',
                    mr: '0.5rem',
                    verticalAlign: 'text-top'
                  }}
                /> */}


                {
                  noti.type=='survey'
                  ?
                  <Avatar 
                    src= {getIconFromMetrics(noti.placeholder)}
                    sx={{
                      bgColor: 'transparent',
                      width: '2rem',
                      height: '2rem',
                      // position: 'absolute',
                      
                    }}
                    variant="square"
                  />
                :
                <Avatar
                  imgProps={{ crossOrigin: 'anonymous' }}
                  src={requests.PICTURE_BASE_URL + noti.placeholder}
                  // src="data:image/jpeg;base64,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"
                  sx={{
                    bgColor: 'white',
                    width: '2rem',
                    height: '2rem',
                  }}
                />
                
                }
                
              </Box>
              <Typography variant='caption' sx={{ whiteSpace: 'pre-line', pl: '0.75rem' }}>
                {
                  noti.type=='survey'
                  ?
                  <strong>&lsquo;&lsquo;{noti.title}&lsquo;&lsquo;</strong>
                  :
                  <strong>{noti.title}</strong>
                }
                <span>{' '+noti.text}</span>
                <br />
                <small>{moment(noti.createdAt).format('D MMM YYYY ')+'at '+moment(noti.createdAt, 'HH:mm:ss').format('LT') }</small>
                <br />
                {noti.type=='survey'
                  ?
                <Button
                  width='20ch'
                  sx={{
                    bgcolor: 'darkPurple',
                    color: 'white',
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontSize: '0.7rem',
                    mt: '0.5rem'
                  }}
                  onClick={()=>{
                    navigate('/survey-dashboard');
                    handleClose();
                  }}
                >
                  View Result
                </Button>
                :
                ''  
              }
              </Typography>
            </MenuItem>
            
          );
          })
          :
          <Typography
          sx={{
            padding: '1rem 2rem',
          }}>
            No notifications
          </Typography>
          
        
        
        }
        
       

      </Menu>
    </Box>
  );
}
