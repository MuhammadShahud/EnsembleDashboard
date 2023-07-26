import React from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, Select, MenuItem } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Styles from './styles';

const SelectComp = (props) => {
  const {
    id,
    name,
    label,
    htmlFor,
    options,
    style,
    menuProps,
    menuItemProps,
    getValue,
    initialOptionIndex,
    isRoleComponent,
    roleValue,
    setRoleValue
  } = props;
  const [value, setValue] = React.useState(options[initialOptionIndex].value);

  const handleChange = (event) => {
    setValue(event.target.value);
    getValue(event.target.value);
    isRoleComponent && setRoleValue(event.target.value);
  };
  return (
    <Box sx={Styles}>
      {label && (
        <InputLabel htmlFor={htmlFor} className='input-label'>
          {label}
        </InputLabel>
      )}

      <Select
        id={id}
        value={isRoleComponent ? roleValue : value}
        label={label}
        name={name}
        fullWidth
        IconComponent={KeyboardArrowDownOutlinedIcon}
        onChange={handleChange}
        className='select-comp'
        sx={style}
        MenuProps={{ PaperProps: { sx: { maxHeight: '12rem' } } }}
        {...menuProps}
      >
        {options.map((option, ind) => (
          <MenuItem key={ind} value={option.value} {...menuItemProps}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

SelectComp.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  htmlFor: PropTypes.string
};
SelectComp.defaultProps = {
  style: { backgroundColor: 'lightCyan' },
  initialOptionIndex: 0
};

export default SelectComp;
