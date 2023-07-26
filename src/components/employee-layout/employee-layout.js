import { Box, Grid, IconButton, Typography } from '@mui/material';
// import React from 'react';
import Styles from './styles';
import WestIcon from '@mui/icons-material/West';
import EmployeeAddBtnMenu from '../employee-add-btn-menu/employee-add-btn-menu';
import PropTypes from 'prop-types';

const EmployeeLayout = (props) => {
  const {
    heading,
    subHeading,
    isAddBtnPresent,
    isBackArrorPresent,
    content,
    handleBackArrowClick
  } = props;

  return (
    <>
      <Grid container sx={Styles}>
        <Grid item xs={1}></Grid>
        <Grid item container xs={10} gap={3} className='emp-layout-main-container'>
          <Grid item container className='emp-layout-header'>
            <Grid
              item
              className={`${
                isAddBtnPresent ? 'header-left-container' : 'header-left-container-without-btn'
              }`}
            >
              {isBackArrorPresent && (
                <Box className='header-left-arrow'>
                  <IconButton onClick={handleBackArrowClick}>
                    <WestIcon sx={{ color: 'navyBlue', fontSize: '2rem' }} />
                  </IconButton>
                </Box>
              )}
              <Box>
                <Typography variant='h31'>{heading}</Typography>
                <br />
                <Typography variant='body3' color='textDarkGrey'>
                  {subHeading}
                </Typography>
              </Box>
            </Grid>
            {isAddBtnPresent && (
              <Grid item className='header-right-container'>
                <EmployeeAddBtnMenu />
              </Grid>
            )}
          </Grid>
          <Grid item className='emp-layout-content'>
            {/* <Grid item xs={1}></Grid> */}
            {/* <Grid item xs={10}> */}
            {content}
            {/* </Grid> */}
            {/* <Grid item xs={1}></Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default EmployeeLayout;
EmployeeLayout.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  isAddBtnPresent: PropTypes.bool,
  isBackArrorPresent: PropTypes.bool,
  content: PropTypes.node
};
