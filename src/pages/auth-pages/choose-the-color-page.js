// import React from 'react';
import LoginLayout from '../../components/auth-layout/auth-layout';
// import { ReactComponent as Mobile } from '../../assets/images/company-info-mobile.svg';
import ChooseTheColorForm from '../../components/auth-components/choose-the-color-form';
import AuthMobileAppPreview from '../../components/auth-mobile-app-preview/auth-mobile-app-preview';
import { useSelector } from 'react-redux';
const ChooseTheColorPage = () => {
  const { companyName, companyLogo } = useSelector((state) => state.companyInfo);

  return (
    <div>
      {/* <img src={img ? img.profilePic : ''} />  -- testing*/}
      <LoginLayout
        displayRightXs={true}
        leftContent={<ChooseTheColorForm />}
        rightContent={
          <AuthMobileAppPreview
            name='User Name'
            companyName={companyName ? companyName : 'Your Company Name Here'}
            designation='Designtion'
            employeeUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs7MF1lF7A_ZJnuOlwkvz5WXy7SGJiHdtMVNhf-Kn&s'
            brandColor='white'
            logoUrl={companyLogo}
            textColor='black'
            iconColor='black'
            empCompanyName='Company Name'
          />
        }
      />
    </div>
  );
};

export default ChooseTheColorPage;
