import React from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import Styles from './styles';

const InputBox = (props) => {
  const { id, name, placeholder, label, htmlFor, iconButton, handleChange=()=>{}, valueInput='' } = props;
  return (
    <Box sx={Styles}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: '2rem'
        }}
      >
        <InputLabel htmlFor={htmlFor} className='signup-input-label'>
          {label}
        </InputLabel>
        {iconButton}
      </Box>

      <OutlinedInput
        className='text-box'
        fullWidth
        multiline={true}
        minRows={10}
        required
        name={name}
        id={id}
        placeholder={placeholder}
        value={valueInput}
        onChange={handleChange}
      />
    </Box>
  );
};

InputBox.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  iconButton: PropTypes.element
};

export default InputBox;
