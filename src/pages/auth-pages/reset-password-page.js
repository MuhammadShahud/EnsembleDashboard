// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
import OnBoarding from '../../components/auth-onboarding/auth-onboarding';
import ResetPasswordForm from '../../components/auth-components/reset-password-form';

const ResetPasswordPage = () => {
  return <LoginLayout leftContent={<ResetPasswordForm />} rightContent={<OnBoarding />} />;
};

export default ResetPasswordPage;
