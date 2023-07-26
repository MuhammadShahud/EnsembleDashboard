import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material';
import { ReactComponent as Visibility } from '../../assets/icons/auth-visibility.svg';
import { ReactComponent as VisibilityOff } from '../../assets/icons/auth-visibilityoff.svg';
import Styles from './styles';

const InputComp = (props) => {
  const {
    id,
    name,
    type,
    placeholder,
    label,
    htmlFor,
    error,
    handleChange,
    iconButton,
    bgColor,
    errorMessage,
    otherProps,
    valueInput,
    style,
    useAltColor
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Box sx={Styles}>
      {label && (
        <InputLabel htmlFor={htmlFor} className='signup-input-label'>
          {label}
        </InputLabel>
      )}

      <OutlinedInput
        {...otherProps}
        className={`input-field ${error && 'input-error-state'}`}
        sx={{ backgroundColor: useAltColor ? '#E9F0FF' : `${bgColor}`, ...style }}
        fullWidth
        required
        value={valueInput}
        name={name}
        id={id}
        autoComplete='off'
        placeholder={placeholder}
        type={showPassword ? 'text' : `${type}`}
        endAdornment={
          <>
            {type === 'password' && (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
                  sx={{ padding: '1rem 1rem' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )}
            {iconButton}
          </>
        }
      />
      {error && errorMessage !== (null || '') && (
        <Typography variant='body1' color='red' pl='0.5rem' mt='1rem' textAlign='left'>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

InputComp.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  isRound: PropTypes.bool,
  error: PropTypes.bool,
  handleChange: PropTypes.func,
  iconButton: PropTypes.element,
  bgColor: PropTypes.string
};

InputComp.defaultProps = {
  isRound: true,
  error: false,
  bgColor: 'lightCyan',
  errorMessage: null
};

export default InputComp;
