// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
import NewPasswordForm from '../../components/auth-components/new-password-form';
import OnBoarding from '../../components/auth-onboarding/auth-onboarding';

const NewPasswordPage = () => {
  return <LoginLayout leftContent={<NewPasswordForm name='Tom' />} rightContent={<OnBoarding />} />;
};

export default NewPasswordPage;
