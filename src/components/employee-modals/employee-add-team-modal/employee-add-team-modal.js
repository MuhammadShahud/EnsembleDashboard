import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import { ModalFormStyle } from './styles';
import AuthButtonGroup from '../../auth-button-group/auth-button-group';
import EmployeeAddTeamStepper from './employee-add-team-stepper';
import InputComp from '../../input-comp/input-comp';
import ModalLayout from '../../modal-layout/modal-layout';
import ChooseTheColorSwatches from '../../choose-color-swatches/choose-color-swatches';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import SearchEmployee from '../../input-search-employee/input-search-employee';
import { colors } from '../../../utils/colorArray';
// import { Search } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { createTeam } from '../../../services/teams';
import { STATUSES } from '../../../services/requests';

const EmployeeAddTeamModal = (props) => {
  const totalSteps = 4;
  const { openModal, handleCloseModal } = props;

  let navigate = useNavigate();
  const { employees } = useSelector((state) => state.company);
  const { userInfo } = useSelector((state) => state.auth);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState(false);
  const [teamLead, setTeamLead] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [status, setStatus] = useState(STATUSES.IDLE);

  // console.log(teamMembers);

  const resetFields = () => {
    setError(false);
    setTeamName('');
    setTeamLead(null);
    setSelectedColor(colors[0]);
    setTeamMembers([]);
    setStatus(STATUSES.IDLE);
    setActiveStep(0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (teamName.length === 0 && activeStep === 0) {
      setError(true);
      return;
    }
    if (teamMembers.length === 0 && activeStep === 1) {
      setError(true);
      return;
    }
    setActiveStep((prev) => {
      return prev >= totalSteps ? totalSteps : prev + 1;
    });

    if (activeStep === 3) {
      let input = {
        teamName: teamName,
        employeeId: [
          ...teamMembers.map((member) => {
            return member.id;
          })
        ],
        teamColor: selectedColor,
        teamLead: teamLead ? teamLead.id : '',
        companyId: userInfo.id
      };
      // console.log(input);
      // console.log('activeStep', activeStep);
      // console.log('Apicall');
      setStatus(STATUSES.LOADING);
      try {
        await createTeam(input);
        setStatus(STATUSES.SUCCESS);
      } catch (err) {
        console.log(err);
        setStatus(STATUSES.ERROR);
      }
    }

    if (activeStep === 4) {
      resetFields();
      navigate('/');
      handleCloseModal();
    }
  };

  const handleBackBtn = () => {
    setActiveStep((prev) => {
      return prev <= 0 ? 0 : prev - 1;
    });
  };

  const handleNextBtn = () => {};

  return (
    <ModalLayout
      openModal={openModal}
      handleCloseModal={() => {
        resetFields();
        handleCloseModal();
      }}
    >
      <Stack
        sx={{
          minWidth: { xs: '85vw', md: '50rem', lg: '50rem' },
          padding: { xs: '1rem 0rem 0rem 0rem', lg: '2rem' }
        }}
      >
        <EmployeeAddTeamStepper
          activeStep={activeStep}
          labelNames={['Team Name', 'Team Members', 'Team Color', 'Team Lead', 'Success']}
        />
        <Box component='form' onSubmit={handleSubmit} noValidate sx={ModalFormStyle}>
          {activeStep === 0 && (
            <Box className='modal-input-container'>
              <InputComp
                error={error && teamName.length === 0}
                errorMessage='This field is required'
                valueInput={teamName}
                type='text'
                name='teamName'
                id='teamName'
                htmlFor='teamName'
                placeholder='Enter the team name'
                bgColor='lightGrey'
                otherProps={{
                  onChange: (event) => {
                    setError(false);
                    setTeamName(event.target.value);
                  }
                }}
              />
            </Box>
          )}
          {activeStep === 3 && (
            <Box className='modal-input-container'>
              <SearchEmployee
                placeholder='Select the team lead'
                options={teamMembers}
                value={teamLead}
                setValue={setTeamLead}
                error={error}
                setError={setError}
                errorMessage='This field is required'
              />
            </Box>
          )}

          {activeStep === 2 && (
            <Box className='modal-team-color-swatches'>
              <Typography>Choose The Team Color</Typography>
              <ChooseTheColorSwatches
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </Box>
          )}
          {activeStep === 1 && (
            <Box className='modal-input-container'>
              <SearchEmployee
                otherProps={{ multiple: true }}
                multiple={true}
                placeholder='Select the team members'
                options={employees}
                value={teamMembers}
                setValue={setTeamMembers}
                // otherInputProps={{
                //   endAdornment: (
                //     <IconButton>
                //       <Search />
                //     </IconButton>
                //   )
                // }}
              />
              <Typography className='modal-add-member-link' variant='body2'>
                <strong>You can add multiple members</strong>
              </Typography>
            </Box>
          )}
          {activeStep === 4 && (
            <Typography variant='h5' pt='2rem'>
              {status === STATUSES.LOADING
                ? 'Team is being created...'
                : status === STATUSES.ERROR
                ? 'Something Went Wrong! Unable to create team.'
                : 'Team Created Successfully!'}
            </Typography>
          )}

          <Box
            className='modal-btn'
            width={`${activeStep < 4 ? '100%' : '15rem'}`}
            sx={{ flex: `${activeStep < 4 ? '' : 'auto'}` }}
          >
            <AuthButtonGroup
              isFilledBtnFirst={false}
              linkText='< Back'
              linkTextColor='#8C8C8C'
              linkClickFunc={handleBackBtn}
              btnElement={`${activeStep < 4 ? 'Next >' : 'Go To Dashboard'}`}
              // btnType={`${activeStep < 4 ? 'button' : 'submit'}`}
              btnType='submit'
              isLinkPresent={activeStep < 4 ? true : false}
              isAddEmployeeBtn={activeStep < 4 ? true : false}
              // btnClick={handleNextBtn}
              isLoading={status === STATUSES.LOADING}
            />

            <Button
              type='submit'
              onClick={handleNextBtn}
              sx={{ pointerEvents: `${activeStep == 3 ? 'auto' : 'none'}` }}
            >
              <Typography
                className='skip-btn-text'
                sx={{ color: `${activeStep === 3 ? '#8C8C8C' : 'white'}` }}
              >
                Skip for now
              </Typography>
            </Button>

            {activeStep === 4 && (
              <Link
                onClick={() => {
                  if (status === STATUSES.LOADING) {
                    return;
                  }
                  resetFields();
                }}
              >
                Create Another Team
              </Link>
            )}
          </Box>
        </Box>
      </Stack>
    </ModalLayout>
  );
};

EmployeeAddTeamModal.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  caption: PropTypes.string,
  openModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
};

export default EmployeeAddTeamModal;
