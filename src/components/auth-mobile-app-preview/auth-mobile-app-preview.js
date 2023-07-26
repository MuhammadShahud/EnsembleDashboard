import { Avatar, Badge, Box, Typography } from '@mui/material';
// import React from 'react';
import rightBg from '../../assets/images/preview-app-mobile.svg';
// import { ReactComponent as Mobile } from '../../assets/images/preview-app-mobile.svg';
import { Briefcase } from './mobile';
const AuthMobileAppPreview = (props) => {
  const url =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s';
  const {
    name,
    companyName,
    designation,
    employeeUrl,
    brandColor,
    logoUrl,
    textColor,
    iconColor,
    empCompanyName
  } = props;
  return (
    <Box
      className='mobile-container'
      sx={{
        backgroundImage: `url(${rightBg})`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        padding: '0',
        fontSize: '16px !important'
      }}
    >
      {/* <Mobile /> */}
      <Box height='40em' width='17em' sx={{ position: 'relative' }}>
        <Box
          className='text'
          sx={{
            position: 'absolute',
            top: '6.45em',
            left: '2.3em',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Avatar
            src={logoUrl === null ? url : logoUrl}
            sx={{
              boxShadow: '0px 0px 3px rgb(0 0 0 / 25%)',
              height: '2.5em',
              width: '2.5em',
              '& .MuiAvatar-img': { objectPosition: 'top' }
            }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '0.6em',
                lineHeight: '1.3em',
                paddingLeft: '0.7em'
              }}
            >
              {companyName}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', top: '25.6em', left: '2.1em' }} className='scg'>
          <Briefcase main={brandColor} text={textColor} icon={iconColor} />
        </Box>
        <Box
          className='text'
          sx={{
            position: 'absolute',
            top: '10em',
            left: '2.3em',
            right: '1.5em',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 300, fontSize: '1.2em', lineHeight: '1.5em' }}>
              Greeting,
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '1.2em', lineHeight: '1.3em' }}>
              {name}
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '0.6em', lineHeight: '1.3em' }}>
              {designation} | {empCompanyName}
            </Typography>
          </Box>
          <Box>
            <Badge
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant='dot'
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#44b700',
                  color: '#44b700',
                  //   boxShadow: `0 0 0 2px red`,
                  '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: 'ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""'
                  }
                }
                // '@keyframes ripple': {
                //   '0%': {
                //     transform: 'scale(.8)',
                //     opacity: 1
                //   },
                //   '100%': {
                //     transform: 'scale(2.4)',
                //     opacity: 0
                //   }
                // }
              }}
            >
              <Avatar
                src={employeeUrl}
                sx={{
                  boxShadow: '0px 2px 13px rgb(0 0 0 / 25%)',
                  height: '2.5em',
                  width: '2.5em',
                  '& .MuiAvatar-img': { objectPosition: 'top' }
                }}
              />
            </Badge>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthMobileAppPreview;
