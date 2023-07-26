import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPersonalInfo } from '../../redux/slices/companyInfoSlice';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import InputComp from '../input-comp/input-comp';
import { personalInfoSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const PersonalInformationForm = () => {
  const { name, designation } = useSelector((state) => state.companyInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(name);
  const [userDesignation, setUserDesignation] = useState(designation);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(personalInfoSchema)
  });

  const submitForm = (data) => {
    dispatch(setPersonalInfo(data));
    navigate('/company-information');
  };
  const handleInputChange = (event) => {
    if (event.target.id === 'name' && errors.name) {
      clearErrors('name');
    }
    if (event.target.id === 'name') {
      setUserName(event.target.value);
    }
    if (event.target.id === 'designation' && errors.designation) {
      clearErrors('designation');
    }
    if (event.target.id === 'designation') {
      setUserDesignation(event.target.value);
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto 0' }}>
      <Typography variant='h2'>Enter Your Information</Typography>
      <Typography variant='body3'>Please Fill All The Fields</Typography>
      <Box component='form' onSubmit={handleSubmit(submitForm)} noValidate>
        <br />
        <InputComp
          valueInput={userName}
          errorMessage={errors.name?.message}
          error={errors.name ? true : false}
          type='text'
          name='name'
          id='name'
          htmlFor='name'
          label='Name'
          placeholder='Tom Cruise'
          otherProps={{
            ...register('name', {
              onChange: handleInputChange
            })
          }}
          handleChange={handleInputChange}
        />
        <InputComp
          error={errors.designation ? true : false}
          errorMessage={errors.designation?.message}
          valueInput={userDesignation}
          type='text'
          name='designation'
          id='designation'
          htmlFor='designation'
          label='Designation'
          placeholder='HR Manager'
          otherProps={{
            ...register('designation', {
              onChange: handleInputChange
            })
          }}
          handleChange={handleInputChange}
        />
        <br />
        <br />

        <AuthButtonGroup btnElement='Save & Next' isLinkPresent={false} btnType='submit' />
      </Box>
    </Box>
  );
};

export default PersonalInformationForm;
