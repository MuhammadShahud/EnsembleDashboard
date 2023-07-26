import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography } from '@mui/material';
import Styles from './styles';

const SearchEmployee = (props) => {
  const {
    otherInputProps,
    placeholder,
    options,
    otherProps,
    multiple,
    value,
    setValue,
    errorMessage,
    error,
    setError
  } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <Box sx={Styles}>
      <Autocomplete
        {...otherProps}
        // freeSolo
        ListboxProps={{ style: { maxHeight: '10rem' } }}
        sx={{ width: '100%' }}
        noOptionsText='Not found'
        disableClearable
        value={value}
        onChange={(event, newValue) => {
          !multiple && setError(false);
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // console.log('input', newInputValue);
          !multiple && setError(false);
          if (newInputValue.length === 0 && multiple === false) {
            setValue(null);
          }
          setInputValue(newInputValue);
        }}
        options={options}
        getOptionLabel={(employees) =>
          `${employees.name === undefined ? inputValue : employees.name}`
        }
        renderOption={(props, option) => (
          <Box component='li' sx={{ mr: 2, flexShrink: 0 }} {...props} key={option.id}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className={`input-field ${error && 'input-error-state'}`}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              ...otherInputProps
            }}
          />
        )}
      />
      {error && (
        <Typography variant='body1' color='red' pl='0.5rem' mt='1rem'>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};
export default SearchEmployee;
SearchEmployee.defaultProps = {
  multiple: false
};
