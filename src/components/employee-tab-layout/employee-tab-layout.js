import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Styles from './styles';
// import { useMediaQuery } from '@mui/material';

const EmployeeTabLayout = (props) => {
  const [value, setValue] = React.useState(0);
  const { tabContent } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const smallscreen = useMediaQuery('(min-width: 600px)');
  return (
    <Box sx={Styles}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        textColor='secondary'
        indicatorColor='secondary'
        className='tab'
        // orientation={`${!smallscreen ? 'vertical' : 'horizontal'}`}
        orientation='horizontal'
      >
        {tabContent.map((tab, index) => {
          return <Tab key={index} value={index} label={tab.name} />;
        })}
      </Tabs>
      {tabContent.map((tab, index) => {
        return (
          value === index && (
            <div style={{ minHeight: '37rem' }} key={index}>
              {tab.node}
            </div>
          )
        );
      })}
    </Box>
  );
};

export default EmployeeTabLayout;

EmployeeTabLayout.propTypes = {
  tabContent: PropTypes.array
};
