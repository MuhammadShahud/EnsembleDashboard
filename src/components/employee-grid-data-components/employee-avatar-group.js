// import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, AvatarGroup } from '@mui/material';
import requests from '../../services/requests';
import { stringToColor } from '../../utils/utils';

const EmployeeAvatarGroup = (props) => {
  const { avatarUrls } = props;
  let avatarUrlsApi = avatarUrls;
  // console.log(avatarUrlsApi);
  return (
    <AvatarGroup
      max={6}
      sx={{
        '& .MuiAvatar-root': {
          width: '2rem',
          height: '2rem',
          fontSize: '0.875rem',
          marginLeft: '-12px',
          border: '1px solid #ffffff'
        }
      }}
    >
      {avatarUrlsApi !== undefined ? (
        avatarUrlsApi.map((avatarUrl, index) => {
          return (
            <Avatar
              alt={avatarUrl.name}
              key={index}
              src={requests.PICTURE_BASE_URL + avatarUrl.profilePic}
              imgProps={{
                crossOrigin: 'anonymous'
              }}
              // src='https://mui.com/static/images/avatar/1.jpg'
              sx={{
                backgroundColor: stringToColor(avatarUrl.name),
                '& .MuiAvatar-img': {
                  objectPosition: 'top'
                  // border: '1px solid black',
                  // borderRadius: '50%'
                },
                zIndex: `${-1000 + index}`
              }}
            />
          );
        })
      ) : (
        <div>-</div>
      )}
    </AvatarGroup>
  );
};

EmployeeAvatarGroup.propTypes = {
  avatarUrls: PropTypes.array // array of objects
};

export default EmployeeAvatarGroup;
