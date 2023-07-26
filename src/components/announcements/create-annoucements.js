import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import InputBox from '../input-box/input-box';
import InputComp from '../input-comp/input-comp';
import { style } from './styles';
// import ButtonPurple from '../button-purple/button-purple';
import { useSelector } from 'react-redux';
import { postAnnouncement } from '../../services/surverysService';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import MainCard from '../main-card.js/main-card';
import AuthModal from '../auth-modal/auth-modal';
import { useNavigate } from 'react-router-dom';

const CompanyInformation = () => {
  const [isAnnouncementCreated, setIsAnnouncementCreated] = useState(false);
  const [aboutCompany, setAboutCompany] = useState('')
  const navigate = useNavigate();
  const companyId = useSelector((state) => {
    return state.company.company.id;
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('hello');
    const data = new FormData(event.currentTarget);
    let title = data.get('announcement-title');
    let text = data.get('about-company');
    let dataToPass = {
      title: title,
      text: text,
      navigate: 'notification',
      companyId: companyId,
      type: 'Hr Announcement'
    };
    let response = await postAnnouncement(dataToPass);
    if (response.status == '201') {
      console.log('announcement created');
      setIsAnnouncementCreated(true);
    }
    console.log(dataToPass, response);
  };
  return (
    <Box style={style}>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <MainCard sx={{padding:'4rem !important'}} label={'Create Annoucement'}>
          <Grid container spacing={{ xs: 0, md: 2 }}>
            <Grid item md={6} xs={12}>
              <InputComp
                type='text'
                name='announcement-title'
                id='announcement-title'
                htmlFor='announcement-title'
                label='Announcement Title'
                placeholder='Christmas Holidays 2022'
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <InputComp type='date' name='date' id='date' htmlFor='date' label='Date' />
            </Grid> */}
          </Grid>
          <Box sx={{ mt: '3rem' }}>
            <InputBox
              type='text'
              valueInput={aboutCompany}
              handleChange= {(e)=>{setAboutCompany(e.target.value)}}
              name='about-company'
              id='about-company'
              htmlFor='about-company'
              label='Description'
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book \n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. ly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
          </Box>
        </MainCard>
        <Box sx={{ width: { md: '30%', xs: '100%' }, mx: 'auto' }}>
          {/* <ButtonPurple inputType='submit'>Create Announcement</ButtonPurple> */}
          <AuthButtonGroup
            isLinkPresent={false}
            btnType='submit'
            btnElement='Create Announcement'
          />
        </Box>
        <AuthModal
          buttonText='Go Back To Homepage'
          heading='Announcement Created Successfully'
          openModal={isAnnouncementCreated}
          handleCloseModal={() => {
            navigate('/AnnouncementPage');
          }}
          btnClick={() => {
            navigate('/home');
          }}
        />
      </Box>
    </Box>
  );
};

export default CompanyInformation;
