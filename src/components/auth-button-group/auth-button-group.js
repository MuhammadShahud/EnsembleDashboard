import { Box, Button } from '@mui/material';
// import React from 'react';
import PropTypes from 'prop-types';
import { Styles, EmployeeBtnGroupStyles } from './styles';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const AuthButtonGroup = (props) => {
  const {
    isFilledBtnFirst,
    btnElement,
    btnType,
    btnClick,
    isLinkPresent,
    isAddEmployeeBtn,
    isLoading,
    btnDisable,
    linkText,
    linkClickFunc,
    linkHref,
    linkTextColor
  } = props;

  return (
    <Box sx={!isAddEmployeeBtn ? Styles : EmployeeBtnGroupStyles}>
      {!isFilledBtnFirst && isLinkPresent && (
        <LinkBox
          linkText={linkText}
          linkClickFunc={linkClickFunc}
          linkHref={linkHref}
          linkTextColor={linkTextColor}
          isLoading={isLoading}
        />
      )}

      <Button
        className='auth-btn-filled'
        disabled={isLoading || btnDisable}
        type={btnType}
        variant='filled'
        onClick={btnClick}
        sx={{ maxWidth: !isLinkPresent ? '100%' : '16.437rem' }}
      >
        {btnElement}
        {isLoading && <CircularProgress size='1rem' sx={{ ml: '1rem', color: 'white' }} />}
      </Button>

      {isFilledBtnFirst && isLinkPresent && (
        <LinkBox
          linkText={linkText}
          linkClickFunc={linkClickFunc}
          linkHref={linkHref}
          linkTextColor={linkTextColor}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
};

AuthButtonGroup.propTypes = {
  isFilledBtnFirst: PropTypes.bool,
  isLinkPresent: PropTypes.bool,
  linkText: PropTypes.string,
  btnElement: PropTypes.string,
  btnType: PropTypes.string,
  linkHref: PropTypes.string,
  btnClick: PropTypes.func,
  linkClickFunc: PropTypes.func
};
AuthButtonGroup.defaultProps = {
  btnType: 'button',
  isFilledBtnFirst: true,
  linkHref: '#',
  linkText: '',
  btnElement: '',
  isLinkPresent: true,
  isAddEmployeeBtn: false,
  isLoading: false,
  btnDisable: false,
  linkTextColor: 'darkPurple'
};

export default AuthButtonGroup;

function LinkBox(props) {
  const { linkText, linkClickFunc, linkHref, linkTextColor, isLoading } = props;
  return (
    <Link
      to={linkHref}
      className={`auth-link ${isLoading ? 'link-disable' : ''}`}
      onClick={linkClickFunc}
      style={{ color: `${linkTextColor}` }}
    >
      {linkText}
    </Link>
  );
}
