// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
// import { ReactComponent as Mobile } from '../../assets/images/preview-app-mobile.svg';
import PreviewTheAppForm from '../../components/auth-components/preview-the-app-form';
import AuthMobileAppPreview from '../../components/auth-mobile-app-preview/auth-mobile-app-preview';
import { useSelector } from 'react-redux';
const PreviewTheAppPage = () => {
  const { companyName, brandColor, companyLogo } = useSelector((state) => state.companyInfo);

  return (
    <div>
      <LoginLayout
        displayRightXs={true}
        leftContent={<PreviewTheAppForm />}
        rightContent={
          <AuthMobileAppPreview
            name='User Name'
            companyName={companyName ? companyName : 'Your Company Name Here'}
            designation='Designtion'
            employeeUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s'
            brandColor={brandColor ? brandColor : 'white'}
            logoUrl={companyLogo}
            textColor={brandColor ? 'white' : 'black'}
            iconColor={brandColor ? brandColor : 'black'}
            empCompanyName='Company Name'
          />
        }
      />
    </div>
  );
};

export default PreviewTheAppPage;
