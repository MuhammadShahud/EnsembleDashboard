// import React from 'react';
import CompanyInformationForm from '../../components/auth-components/company-information-form';
import LoginLayout from '../../components/auth-layout/auth-layout';
// import { ReactComponent as Mobile } from '../../assets/images/company-info-mobile.svg';
import AuthMobileAppPreview from '../../components/auth-mobile-app-preview/auth-mobile-app-preview';
const CompanyInformationPage = () => {
  return (
    <div>
      <LoginLayout
        displayRightXs={true}
        leftContent={<CompanyInformationForm />}
        rightContent={
          <AuthMobileAppPreview
            name='User Name'
            companyName='Your Company Name here'
            designation='Designtion'
            employeeUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s'
            brandColor='white'
            logoUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s'
            textColor='black'
            iconColor='black'
            empCompanyName='Company Name'
          />
        }
      />
    </div>
  );
};

export default CompanyInformationPage;
