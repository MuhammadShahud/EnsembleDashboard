import { Box, Step, StepLabel, Stepper } from '@mui/material';
// import React from 'react';
import PropTypes from 'prop-types';
import { StepperStyles, StepperIconStyles } from './styles';
import Brightness1 from '@mui/icons-material/Brightness1';
import { RadioButtonCheckedRounded } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SelectICon = (props) => {
  const { active, completed } = props;

  return (
    <Box sx={StepperIconStyles}>
      {active ? (
        <RadioButtonCheckedRounded className='stepper-icon' />
      ) : completed ? (
        <CheckCircleIcon className='stepper-icon' />
      ) : (
        <Brightness1 className='inactive' />
      )}
    </Box>
  );
};

const EmployeeAddTeamStepper = ({ activeStep, labelNames }) => {
  return (
    <Box sx={StepperStyles}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {labelNames.map((labelName, index) => {
          return (
            <Step key={index}>
              <StepLabel StepIconComponent={SelectICon}>{labelName}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

SelectICon.propTypes = {
  icon: PropTypes.node,
  active: PropTypes.bool,
  completed: PropTypes.bool
};
EmployeeAddTeamStepper.propTypes = {
  activeStep: PropTypes.number,
  labelNames: PropTypes.array
};

export default EmployeeAddTeamStepper;
