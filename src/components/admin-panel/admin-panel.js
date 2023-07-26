import React from 'react';
import CompanyProfile from './company-profile';
import PageLayout from '../page-layout/page-layout';

const  AdminPanel = () => {
  return (
    <PageLayout label='Company Profile'>
      <CompanyProfile />
    </PageLayout>
  );
};

export default AdminPanel;
