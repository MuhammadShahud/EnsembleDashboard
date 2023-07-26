// import React from 'react';
import LoginForm from '../../components/auth-components/login-form';
import LoginLayout from '../../components/auth-layout/auth-layout';
import OnBoarding from '../../components/auth-onboarding/auth-onboarding';

const LoginPage = () => {
  return <LoginLayout leftContent={<LoginForm />} rightContent={<OnBoarding />} />;
};

export default LoginPage;
