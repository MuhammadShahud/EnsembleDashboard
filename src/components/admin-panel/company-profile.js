import { Box, Grid, Typography, Button, Divider, SvgIcon, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
// import InputComp from '../input-comp/input-comp';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { style } from './styles';
// import CircleIcon from '@mui/icons-material/Circle';
// import { CustomSwitch } from '../switch/switch';
// import ButtonPurple from '../button-purple/button-purple';
// import AddIcon from '@mui/icons-material/Add';
import MainCard from '../main-card.js/main-card';
import { ReactComponent as UserGroupSvg } from '../../assets/icons/user-group.svg';
import { ReactComponent as PhoneSvg } from '../../assets/icons/phone.svg';
import { ReactComponent as EmailSvg } from '../../assets/icons/email.svg';
import { ReactComponent as DesignationSvg } from '../../assets/icons/designation.svg';
import { ReactComponent as LocationSvg } from '../../assets/icons/location.svg';
import { ReactComponent as UserSvg } from '../../assets/icons/user.svg';
import { ReactComponent as EditSvg } from '../../assets/icons/edit.svg';
import { useSelector } from 'react-redux';
import requests from '../../services/requests';
import { useNavigate } from 'react-router-dom';

const CompanyProfile = () => {
  let navigate = useNavigate()
  const companySelector = useSelector((state) => {
    console.log(state.company.company, 'stateeee');
    return state.company.company;
  });
  const company = {
    name: companySelector.companyName,
    type: companySelector.organizationType,
    size: companySelector.sizeOfCompany,
    about: companySelector.aboutCompany
  };
  const employee = {
    name: companySelector.name,
    designation: companySelector.designation,
    email: companySelector.email,
    location: '-',
    phoneNo: '-'
  };
  const getImage = async (imageURL) => {
    let response = await fetch(imageURL);
    console.log(response.body);
    return response.body;
  };
  // useEffect(()=>{
  //   getImage()
  // },[])
  return (
    <Box>
      <MainCard divider={false} sx={{ p: 0.5, pb: 6, ...style }}>
        <Box className='bg-img-card' sx={{ position: 'relative' }}>
          {/* <Box className='logo-icon'></Box> */}
          <Avatar
            imgProps={{ crossOrigin: 'anonymous' }}
            src={requests.PICTURE_BASE_URL + companySelector.profilePic}
            sx={{
              bgColor: 'white',
              width: '12rem',
              height: '12rem',
              position: 'absolute',
              top: '4.5rem',
              left: '2rem'
            }}
          />
        </Box>
        <Grid container>
          <Grid item md={3} p={2} mt={8.5}>
            <Grid container>
              <ListItem xs={6} md={12} heading='Name' content={employee.name} Icon={UserIcon} />
              <ListItem
                xs={12}
                heading='Designation'
                content={employee.designation}
                Icon={DesignationIcon}
              />
              <ListItem xs={6} md={12} heading='Email' content={employee.email} contentColor='#0098E3' Icon={EmailIcon} contentFontSize='0.8rem !important' />
              <ListItem
                xs={12}
                heading='Location'
                content={employee.location}
                Icon={LocationIcon}
              />
              <ListItem xs={12} heading='Phone No' content={employee.phoneNo} Icon={PhoneIcon} />
            </Grid>
          </Grid>
          <Grid item md={9} p={2}>
            <Box className='right-top-side'>
              <Box>
                <Typography variant='h4' className='main-heading'>
                  {company.name}
                </Typography>
                <Typography className='sub-heading'>{company.type}</Typography>
              </Box>
              <Button
                sx={{ color: 'dullBlue', textTransform: 'none', height: 'fit-content' }}
                startIcon={<EditIcon fontSize='small' />}
                onClick={()=>{navigate('/settings')}}
              >
                Edit
              </Button>
            </Box>
            <Box sx={{ mt: '5.5rem' }}>
              <Typography variant='h5' className='main-sub-heading'>
                Company Information
              </Typography>
              <Divider />
              <Grid container>
                <ListItem
                  xs={12}
                  md={3}
                  heading='Company Type'
                  content={company.type}
                  Icon={UserGroupIcon}
                />
                <ListItem
                  xs={12}
                  md={3}
                  heading='Company Size'
                  content={company.size}
                  Icon={UserGroupIcon}
                />
                <ListItem
                  xs={12}
                  md={7}
                  heading='About Company'
                  content={company.about}
                  Icon={UserGroupIcon}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </MainCard>
    </Box>
  );
};

const ListItem = ({ xs, md, heading, content, Icon, contentColor='', contentFontSize='' }) => {
  return (
    <Grid item xs={xs} md={md} className='item'>
      <Icon fontSize='small' sx={{ color: 'iconGrey' }} />
      <div>
        <Typography className='heading'>{heading}</Typography>
        <Typography className='content' color={contentColor} fontSize={contentFontSize}>{content}</Typography>
      </div>
    </Grid>
  );
};
function UserGroupIcon(props) {
  return (
    <SvgIcon {...props}>
      <UserGroupSvg />
    </SvgIcon>
  );
}
function PhoneIcon(props) {
  return (
    <SvgIcon {...props}>
      <PhoneSvg />
    </SvgIcon>
  );
}
function EmailIcon(props) {
  return (
    <SvgIcon {...props}>
      <EmailSvg />
    </SvgIcon>
  );
}
function LocationIcon(props) {
  return (
    <SvgIcon {...props}>
      <LocationSvg />
    </SvgIcon>
  );
}
function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <UserSvg />
    </SvgIcon>
  );
}
function DesignationIcon(props) {
  return (
    <SvgIcon {...props}>
      <DesignationSvg />
    </SvgIcon>
  );
}
function EditIcon(props) {
  return (
    <SvgIcon {...props}>
      <EditSvg />
    </SvgIcon>
  );
}
export default CompanyProfile;
