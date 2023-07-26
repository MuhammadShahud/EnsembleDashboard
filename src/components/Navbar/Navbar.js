import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Settings } from '../../assets/icons/navbar-settings-icon.svg';
import { ReactComponent as NavIcon } from '../../assets/logos/ensemble-white-logo.svg';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Styles from './styles';
import { Link, useNavigate } from 'react-router-dom';
import NavbarSlider from './navbar-slider';
import NavbarNotificationDropdown from './navbar-notificaiton-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { Button } from '@mui/material';
import requests from '../../services/requests';
import { getCompanyInfo } from '../../redux/slices/companySlice';
import { getNotificationsData } from '../../services/notifications';

const pages = [
  {
    title: 'Home',
    route: '/'
  },
  { title: 'Surveys', route: '/survey-dashboard' },
  { title: 'Employees', route: '/employee-teams' },
  { title: 'Goals', route: '/goals' }
];
const iconStyles = {
  color: 'darkPurple',
  fontSize: '1.4rem'
};

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [notificationsData, setNotificationsData]= React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { company } = useSelector((state) => state.company);


  const getNotificationsDataApiHandler=async ()=>{
    console.log("interval started")
    const response= await getNotificationsData(company.id);
    if (response.status === 201) {
      console.log(response.data.result.results)
      setNotificationsData(response.data.result.results)
    }
    else{
      console.log('notifications api error')
    }
  }


  useEffect(() => {
    dispatch(getCompanyInfo());
  }, []);

  useEffect(() => {
    // const intervalCall = setInterval(() => {
      getNotificationsDataApiHandler();
    // }, 5000);
    // return () => {
      // clean up
      // clearInterval(intervalCall);
    // };
  }, [company.id]);
  const icons = [
    {
      title: 'Profile',
      route: '/admin-profile',
      click: () => {
        navigate('/admin-profile');
      },
      icon: <PersonOutlineOutlinedIcon sx={iconStyles} />
    },
    {
      title: 'Logout',
      route: '/login',
      click: () => {
        dispatch(logout());
        navigate('/');
      },
      icon: <LogoutRoundedIcon sx={iconStyles} />
    }
  ];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' color='secondary' sx={Styles}>
      <Container sx={{ minWidth: '100%' }}>
        <Toolbar disableGutters className='navbar-toolbar-container'>
          <Box className='navbar-hamburger'>
            <NavbarSlider />
          </Box>
          <Box className='navbar-logo'>
            <IconButton
              onClick={() => {
                navigate('/');
              }}
            >
              <NavIcon />
            </IconButton>
          </Box>
          <Box className='navbar-link-container'>
            {pages.map((page, index) => (
              <Link key={index} to={page.route} className='navbar-navlinks'>
                {page.title}
              </Link>
            ))}
          </Box>

          <Box className='nav-icons-container'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  display: { xs: 'none', tB: 'flex' },
                  alignSelf: 'end'
                }}
              >
                <Link to='/settings'>
                  <Settings />
                </Link>
              </Box>

              <IconButton>
                <NavbarNotificationDropdown notificationsData={notificationsData} isNewNoti={company.webNoti}/>
              </IconButton>

              <IconButton
                sx={{ display: { xs: 'none', tB: 'flex' }, p: 0 }}
                onClick={handleOpenUserMenu}
                // sx={{ p: 0 }}
              >
                <Avatar
                  alt={company.companyName ? company.companyName : 'Company Name'}
                  src={
                    JSON.stringify(company) !== '{}'
                      ? requests.PICTURE_BASE_URL + company.profilePic
                      : ''
                  }
                  // src={requests.PICTURE_BASE_URL + 'uploads/PTG.png'}
                  // src={'https://ensemble-backendd.herokuapp.com/uploads/PTG.png'}
                  imgProps={{
                    crossOrigin: 'anonymous'
                  }}
                  sx={{
                    width: { xs: '2rem', md: '2.5rem' },
                    height: { xs: '2rem', md: '2.5rem' },
                    // bgcolor: company.brandColor ? company.brandColor : '#5050AD',
                    bgcolor: 'white',
                    '& .MuiAvatar-img': { objectFit: 'fill' }
                  }}
                />
              </IconButton>
            </Box>
            <Menu
              sx={{ mt: '3rem' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {icons.map((icon, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  {icon.icon}
                  <Button
                    onClick={icon.click}
                    style={{ textDecoration: 'none', color: 'black', textTransform: 'capitalize' }}
                  >
                    <Typography textAlign='center' variant='body2' pl='0.4rem'>
                      {icon.title}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
