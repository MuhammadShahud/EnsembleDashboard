// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
import OnBoarding from '../../components/auth-onboarding/auth-onboarding';
import PasswordRecoveryForm from '../../components/auth-components/password-recovery-form';

const PasswordRecoveryPage = () => {
  return (
    <div>
      <LoginLayout leftContent={<PasswordRecoveryForm />} rightContent={<OnBoarding />} />
    </div>
  );
};

export default PasswordRecoveryPage;
