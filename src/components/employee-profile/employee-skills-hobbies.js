import { Typography, Box, Chip } from '@mui/material';
// import React from 'react';
import SkillsHobbiesStyles from './styles';

const EmployeeSkillsHobbies = (props) => {
  const { jobDescription, proudAchievement, rockstarSkills, hobbies } = props;
  return (
    <>
      <Box sx={SkillsHobbiesStyles}>
        <Box className='emp-skill-container'>
          <Typography sx={{ fontSize: '1.125rem', mb: '1rem' }}>Proud Achievement</Typography>
          <Typography variant='caption' sx={{ letterSpacing: '0.4px' }}>
            {proudAchievement?.split('.').map((sentence, index) => {
              return <div key={index}>{sentence}.</div>;
            })}
          </Typography>
        </Box>
        <Box className='emp-skill-container'>
          <Typography sx={{ fontSize: '1.125rem', mb: '1rem' }}>Job Description</Typography>
          <Typography variant='caption' sx={{ letterSpacing: '0.4px' }}>
            {jobDescription?.split('.').map((sentence, index) => {
              return <div key={index}>{sentence}.</div>;
            })}
          </Typography>
        </Box>
      </Box>
      <Box sx={SkillsHobbiesStyles}>
        <Box className='emp-skill-container'>
          <Typography sx={{ fontSize: '1.125rem' }} mb='0.5rem'>
            Rockstar Skills
          </Typography>
          {rockstarSkills?.map((skill, index) => {
            return (
              <Chip
                key={index}
                label={skill[0].toUpperCase() + skill.slice(1, skill.length).toLowerCase()}
                className='emp-chip'
              ></Chip>
            );
          })}
        </Box>
        <Box className='emp-skill-container'>
          <Typography variant='body2' sx={{ fontWeight: 500 }} mb='0.5rem'>
            When you’re not working, what do you enjoy doing the most?
          </Typography>
          {hobbies?.map((hobby, index) => {
            return (
              <Chip
                key={index}
                label={hobby[0].toUpperCase() + hobby.slice(1, hobby.length).toLowerCase()}
                className='emp-chip'
              ></Chip>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

// EmployeeSkillsHobbies.propTypes = {};

export default EmployeeSkillsHobbies;
