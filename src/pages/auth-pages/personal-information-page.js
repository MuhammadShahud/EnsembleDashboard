// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
import PersonalInformationForm from '../../components/auth-components/personal-information-form';

const PersonalInformationPage = () => {
  return (
    <div>
      <LoginLayout leftContent={<PersonalInformationForm />} useRightBg={true} />
    </div>
  );
};

export default PersonalInformationPage;
