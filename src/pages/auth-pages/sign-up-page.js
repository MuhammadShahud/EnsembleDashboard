// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
import OnBoarding from '../../components/auth-onboarding/auth-onboarding';
import SignUpForm from '../../components/auth-components/signup-form';

const SignUpPage = () => {
  return <LoginLayout leftContent={<SignUpForm />} rightContent={<OnBoarding />} />;
};

export default SignUpPage;
