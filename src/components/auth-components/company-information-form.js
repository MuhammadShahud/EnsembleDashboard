import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCompanyInfo, setCompanyLogo } from '../../redux/slices/companyInfoSlice';
import { companyLogoReducer } from '../../services/company';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import LoginLayoutLeftStepper from '../auth-stepper/auth-stepper';
import InputComp from '../input-comp/input-comp';
import InputDragUploadFileComp from '../input-drag-upload-file-comp/input-drag-upload-file-comp';
import { companyInfoSchema } from '../../field-validation-schema/field-validation-schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CompanyInformationForm = () => {
  let navigate = useNavigate();
  const { companyName, sizeOfCompany, companyLogo } = useSelector((state) => state.companyInfo);
  const [logo, setLogo] = useState(null);
  const [logoBitmap, setLogoBitmap] = useState(companyLogo);
  const [logoError, setLogoError] = useState(false);

  const [companyNamefield, setCompanyNamefield] = useState(companyName);
  const [companySize, setCompanySize] = useState(sizeOfCompany);

  const dispatch = useDispatch();

  const companyLogoApiHandler = async (payload) => {
    try {
      await companyLogoReducer(payload);
    } catch (error) {
      // console.log(error);
    }
  };
  const handleInputChange = (event) => {
    if (event.target.id === 'companyName' && errors.companyName) {
      clearErrors('companyName');
    }
    if (event.target.id === 'companySize' && errors.companySize) {
      clearErrors('companySize');
    }

    if (event.target.id === 'companyName') {
      setCompanyNamefield(event.target.value);
    }
    if (event.target.id === 'companySize') {
      setCompanySize(event.target.value);
    }
  };

  const handleBtnClick = () => {
    if (companyLogo === null) {
      setLogoError(true);
      return;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({
    resolver: yupResolver(companyInfoSchema)
  });

  const submitForm = (data) => {
    const formData = new FormData();
    formData.append('file', logo);
    if (logoBitmap === null) {
      setLogoError(true);
      return;
    }
    dispatch(setCompanyLogo(logoBitmap));

    if (logo !== null) {
      companyLogoApiHandler(formData);
    }
    dispatch(setCompanyInfo(data)); // name, size
    navigate('/choose-color');
  };
  return (
    <Box>
      <Box sx={{ width: { xs: '100%', sm: '60%' }, margin: '0 auto' }}>
        <LoginLayoutLeftStepper activeStep={0} />
      </Box>
      <br />
      <Typography variant='h4'>Share Company Info</Typography>
      <Box component='form' onSubmit={handleSubmit(submitForm)} noValidate>
        <br />
        <InputComp
          errorMessage={errors.companyName?.message}
          error={errors.companyName ? true : false}
          valueInput={companyNamefield}
          type='text'
          name='companyName'
          id='companyName'
          htmlFor='companyName'
          label='Company Name'
          placeholder='The Plum Tree Group'
          handleChange={handleInputChange}
          otherProps={{
            ...register('companyName', {
              onChange: handleInputChange
            })
          }}
        />
        <InputComp
          errorMessage={errors.companySize?.message}
          error={errors.companySize ? true : false}
          valueInput={companySize}
          type='number'
          name='companySize'
          id='companySize'
          htmlFor='companySize'
          label='Size of Company'
          placeholder='51'
          handleChange={handleInputChange}
          otherProps={{
            ...register('companySize', {
              onChange: handleInputChange
            })
          }}
        />
        <InputDragUploadFileComp
          logo={logo}
          setLogo={setLogo}
          logoBitmap={logoBitmap}
          setLogoBitmap={setLogoBitmap}
          errorMessage='File is required'
          error={logoError}
          setError={setLogoError}
        />
        <br />
        <br />
        <AuthButtonGroup
          isFilledBtnFirst={false}
          linkText='< Back'
          btnElement='Save & Next'
          linkHref='/personal-information'
          btnType='submit'
          btnClick={handleBtnClick}
        />
      </Box>
    </Box>
  );
};

export default CompanyInformationForm;
