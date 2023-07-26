import React from 'react';
import CreateAnnouncements from './create-annoucements';
import ViewAnnoucements from './view-annoucements';
import TabLayout from '../tab-layout/tab-layout';
import PageLayout from '../page-layout/page-layout';

//import { useTheme } from '@emotion/react';
const Announcements = () => {
  return (
    <PageLayout
      label='Announcements'
      content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book`}
    >
      <TabLayout
        tabs={[
          { name: 'Create Announcements', element: <CreateAnnouncements /> },
          { name: 'View Annoucements', element: <ViewAnnoucements /> }
        ]}
      />
    </PageLayout>
  );
};

export default Announcements;
