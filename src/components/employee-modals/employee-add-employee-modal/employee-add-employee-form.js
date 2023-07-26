// import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import AuthButtonGroup from '../../auth-button-group/auth-button-group';
import InputComp from '../../input-comp/input-comp';
import SelectComp from '../../select-comp/select-comp';
import { signUpEmployeeSchema } from '../../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { STATUSES } from '../../../services/requests';
import AuthAlert from '../../auth-alert/auth-alert';
import { useSelector } from 'react-redux';
import { registerEmployee } from '../../../services/auth';
import { updateEmployee } from '../../../services/employee';
import { useState } from 'react';

const EmployeeAddEmployeeForm = ({ handleModalBtn, editModal }) => {
  const { teams, currentEmployee } = useSelector((state) => state.company);
  const { userInfo } = useSelector((state) => state.auth);

  // Clicking on any employee name and avatar, updates global state currentEmployee with the said employee information
  const defaultValues = [
    { defaultValue: !editModal ? '' : currentEmployee.name?.split(' ')[0] }, // firstName
    {
      defaultValue: !editModal ? '' : currentEmployee.name?.split(' ').splice(1).join(' ')
    }, // lastName
    { defaultValue: !editModal ? '' : currentEmployee.email }, // email
    { defaultValue: !editModal ? '' : currentEmployee.jobTitle }, // jobTitle
    { defaultValue: !editModal ? '' : currentEmployee.teamId } // teamId
  ];

  const [status, setStatus] = useState(STATUSES.IDLE);
  const [serverErrMsg, setServerErrMsg] = useState('');
  const [teamId, setTeamId] = useState(defaultValues[4].defaultValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(signUpEmployeeSchema)
  });

  const submitForm = async (data) => {
    let input = {
      teamId,
      companyId: userInfo.id,
      name: data.firstName + ' ' + data.lastName,
      email: data.email,
      jobTitle: data.jobTitle
    };
    setStatus(STATUSES.LOADING);
    try {
      // let response;
      editModal ? await updateEmployee(currentEmployee.id, input) : await registerEmployee(input);
      setStatus(STATUSES.IDLE);
      editModal ? handleModalBtn() : handleModalBtn(data.email);
      // if (response.data.success) {
      // }
    } catch (err) {
      // console.log(err);
      setStatus(STATUSES.ERROR);
      setServerErrMsg(
        err.response?.data.errors ? err.response.data.errors[0].message : 'Something Went Wrong'
      );
    }
  };
  const handleInputChange = (event) => {
    if (status === STATUSES.ERROR) {
      setStatus(STATUSES.IDLE);
    }

    if (event.target.id === 'firstName' && errors.firstName) {
      clearErrors('firstName');
    }
    if (event.target.id === 'lastName' && errors.lastName) {
      clearErrors('lastName');
    }
    if (event.target.id === 'email' && errors.email) {
      clearErrors('email');
    }
    if (event.target.id === 'jobTitle' && errors.jobTitle) {
      clearErrors('jobTitle');
    }
  };
  return (
    <Stack
      component='form'
      onSubmit={handleSubmit(submitForm)}
      noValidate
      sx={{ minWidth: '19rem' }}
      spacing='0.5rem'
      padding={{ xs: '', lg: '1rem 2rem' }}
    >
      {status === STATUSES.ERROR && <AuthAlert alertText={serverErrMsg} />}
      <br />
      <Stack direction={{ xs: 'column', tB: 'row' }} spacing='1rem'>
        <InputComp
          type='text'
          name='firstName'
          id='firstName'
          htmlFor='firstName'
          placeholder='Enter First Name'
          bgColor='lightGrey'
          otherProps={{
            ...register('firstName', {
              onChange: handleInputChange
            }),
            ...defaultValues[0]
          }}
          error={errors.firstName ? true : false}
          handleChange={handleInputChange}
          errorMessage={errors.firstName?.message}
        />
        <InputComp
          type='text'
          name='lastName'
          id='lastName'
          htmlFor='lastName'
          placeholder='Enter Last Name'
          bgColor='lightGrey'
          otherProps={{
            ...register('lastName', {
              onChange: handleInputChange
            }),
            ...defaultValues[1]
          }}
          error={errors.lastName ? true : false}
          handleChange={handleInputChange}
          errorMessage={errors.lastName?.message}
        />
      </Stack>
      <InputComp
        type='email'
        name='email'
        id='email'
        htmlFor='email'
        placeholder='Enter Employee Email'
        bgColor='lightGrey'
        otherProps={{
          ...register('email', {
            onChange: handleInputChange
          }),
          ...defaultValues[2]
          // disabled: editModal ? true : false,
        }}
        style={{ display: `${editModal ? 'none' : ''}` }}
        error={errors.email ? true : false}
        handleChange={handleInputChange}
        errorMessage={errors.email?.message}
      />
      <InputComp
        type='text'
        name='jobTitle'
        id='jobTitle'
        htmlFor='jobTitle'
        placeholder='Enter Employee Job Title'
        bgColor='lightGrey'
        otherProps={{
          ...register('jobTitle', {
            onChange: handleInputChange
          }),
          ...defaultValues[3]
        }}
        error={errors.jobTitle ? true : false}
        handleChange={handleInputChange}
        errorMessage={errors.jobTitle?.message}
      />
      <SelectComp
        name='teamId'
        id='teamId'
        htmlFor='teamId'
        getValue={(value) => {
          setTeamId(value);
        }}
        initialOptionIndex={
          editModal
            ? 1 +
              teams
                .map((team) => {
                  return team.id;
                })
                .indexOf(currentEmployee.teamId)
            : 0
        }
        options={[
          { value: '', name: 'Select Team' },
          ...teams.map((team) => {
            return { value: team.id, name: team.teamName };
          })
        ]}
        style={{
          bgcolor: 'lightGrey'
        }}
        menuProps={{
          displayEmpty: true
        }}
      />

      <br />
      <Box width='15rem' alignSelf='center'>
        <AuthButtonGroup
          isFilledBtnFirst={false}
          linkText='< Back'
          btnElement={`${editModal ? 'Save' : 'Send Invite'}`}
          btnType='submit'
          isLinkPresent={false}
          isAddEmployeeBtn={false}
          isLoading={status === STATUSES.LOADING}
        />
      </Box>
    </Stack>
  );
};

export default EmployeeAddEmployeeForm;
