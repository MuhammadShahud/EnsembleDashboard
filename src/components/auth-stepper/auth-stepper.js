import { Step, StepLabel, Stepper } from '@mui/material';
// import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';
import { Briefcase, Completed, Switch } from './stepper-icons-svgs';
import theme from '../../theme/theme';

const SelectICon = (props) => {
  const { active, completed } = props;

  const iconsActive = {
    1: <Briefcase stroke={`${theme.palette.darkPurple}`} fill='white' />,
    2: (
      <Switch
        stroke={`${theme.palette.darkPurple}`}
        fill='white'
        innerStroke={theme.palette.darkPurple}
      />
    ),
    3: (
      <Completed
        stroke={`${theme.palette.darkPurple}`}
        fill='white'
        innerStroke={theme.palette.darkPurple}
      />
    )
  };
  const icons = {
    1: <Briefcase stroke={`${theme.palette.borderGrey}`} fill='white' />,
    2: (
      <Switch
        stroke={`${theme.palette.borderGrey}`}
        fill='white'
        innerStroke={theme.palette.secondary.main}
      />
    ),
    3: (
      <Completed
        stroke={`${theme.palette.borderGrey}`}
        fill='white'
        innerStroke={theme.palette.secondary.main}
      />
    )
  };
  const iconsCompleted = {
    1: <Briefcase fill={`${theme.palette.darkPurple}`} stroke='white' />,
    2: <Switch fill={`${theme.palette.darkPurple}`} stroke='white' innerStroke='white' />,
    3: <Completed fill={`${theme.palette.darkPurple}`} stroke='white' innerStroke='white' />
  };

  return (
    <>
      {active ? (
        <div>{iconsActive[String(props.icon)]}</div>
      ) : completed ? (
        <div>{iconsCompleted[String(props.icon)]}</div>
      ) : (
        <div>{icons[String(props.icon)]}</div>
      )}
    </>
  );
};

const LoginLayoutLeftStepper = ({ activeStep }) => {
  return (
    <>
      <Stepper activeStep={activeStep} sx={Styles}>
        <Step>
          <StepLabel StepIconComponent={SelectICon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={SelectICon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={SelectICon}></StepLabel>
        </Step>
      </Stepper>
    </>
  );
};

SelectICon.propTypes = {
  icon: PropTypes.node,
  active: PropTypes.bool,
  completed: PropTypes.bool
};
LoginLayoutLeftStepper.propTypes = {
  activeStep: PropTypes.number
};

export default LoginLayoutLeftStepper;
