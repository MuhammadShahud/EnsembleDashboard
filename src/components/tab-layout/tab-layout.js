import { Typography, Tabs, Tab, Box } from '@mui/material';
import React, { useState } from 'react';

const TabLayout = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={tabIndex}
          variant='scrollable'
          scrollButtons='auto'
          onChange={handleTabChange}
          textColor='secondary'
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'lightPurple'
            }
          }}
        >
          {tabs.map((tab, ind) => (
            <Tab
              sx={{ textTransform: 'none', fontWeight: 500 }}
              key={ind}
              label={tab.name}
              value={ind}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, ind) => (
        <TabPanel key={ind} value={tabIndex} index={ind}>
          {tab.element}
        </TabPanel>
      ))}
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TabLayout;
