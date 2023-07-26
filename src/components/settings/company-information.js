import { Box, Typography, Grid, IconButton, Avatar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import InputComp from '../input-comp/input-comp';
import InputBox from '../input-box/input-box';
import SelectComp from '../select-comp/select-comp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { style } from './styles';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
// import ButtonPurple from '../button-purple/button-purple';
import MainCard from '../main-card.js/main-card';
import AuthButtonGroup from '../auth-button-group/auth-button-group';
import { updateCompanyInfo } from '../../services/notifications';
import { useSelector } from 'react-redux';
import requests from '../../services/requests';
import { companyLogoReducer } from '../../services/company';

const colors = [
  '#EF4444',
  '#F97316',
  '#FACC15',
  '#4ADE80',
  '#0EA5E9',
  '#6366F1',
  '#FE2713',
  '#1B1B1B',
  '#F43F5E',
  '#D946EF',
  '#8B5CF6',
  '#3337FB',
  '#10B981',
  '#84CC16'
];



const CompanyInformation = () => {

  const optionsOrgType = [
    { value: '', name: 'Select type' },
    { value: 'IT Service', name: 'IT Service' },
    { name: 'Tech', value: 'Tech' }
  ];

  const { company } = useSelector((state) => state.company);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [orgType, setOrgType] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [logoBitmap, setLogoBitmap] = useState(companyLogo);
  const inputRef = useRef();

  const [companyName, setCompanyName] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [sizeOfCompany, setSizeOfCompany] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');

  useEffect(()=>{
    console.log("Company", company)
  },[])

  const handleBrowse = (event) => {
    event.preventDefault();
    let logo = event.target.files[0];
    handleFileUploadDisplay(logo);
  };
  const handleFileUploadDisplay = (file) => {
    setCompanyLogo(file);

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadFile = reader.result;
      setLogoBitmap(uploadFile);
    });
    if (file != null) {
      reader.readAsDataURL(file);
    }
  };
  const companyLogoApiHandler = async (payload) => {
    try {
      await companyLogoReducer(payload);
    } catch (error) {
      // console.log(error);
    }
  };
  const updateCompanyInfoApiHandler = async (data) => {
    let response = await updateCompanyInfo(data, company.id);
    if (response.status == '201') {
      console.log('webnoti changed');
      const form = document.getElementById('settingsForm');
      form.reset();
    }
  };
  useEffect(() => {
    // console.log('compamy', company);
    // setOrgType(company.organizationType)
    setCompanyName(company.companyName);
    setSizeOfCompany(company.sizeOfCompany);
    setAboutCompany(company.aboutCompany);
    setSelectedColor(company.brandColor);
  }, [company]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handlesubmit');
    const imageData = new FormData();
    imageData.append('file', companyLogo);

    const data = new FormData(event.currentTarget);

    let payload = {
      companyName: data.get('company-name'),
      organizationType: data.get('org-type'),
      sizeOfCompany: data.get('company-size'),
      aboutCompany: data.get('about-company'),
      brandColor: selectedColor
    };
    if (companyLogo != null) {
      companyLogoApiHandler(imageData);
    }

    updateCompanyInfoApiHandler(payload);
  };
  return (
    <Box>
      {
        <Box component='form' onSubmit={handleSubmit} noValidate id='settingsForm'>
          <MainCard label={'Company Information'}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <InputComp
                  type='text'
                  name='company-name'
                  id='company-name'
                  htmlFor='company-name'
                  label='Company Name'
                  placeholder='The Plum Tree Group'
                  iconButton={<EditOutlinedIcon sx={{ color: 'iconGrey' }} />}
                  valueInput={companyName}
                  otherProps={{
                    onChange: (event) => {
                      setCompanyName(event.target.value);
                    }
                  }}
                />
                <br />
              
                  {Object.keys(company).length > 0 &&  <SelectComp
                    name='org-type'
                    id='org-type'
                    htmlFor='org-type'
                    label='Organization Type'
                    options={optionsOrgType}
                    initialOptionIndex={ company.organizationType
                      ?
                      optionsOrgType
                      .map((type) => {
                        return type.value;
                      })
                      .indexOf(company.organizationType)
                      : 0}
                    getValue={(value) => {
                      setOrgType(value);
                    }}
                    menuProps={{
                      displayEmpty: true
                    }}
                  />}
                  {Object.keys(company).length === 0 && <SelectComp
                    name='org-type'
                    id='org-type'
                    htmlFor='org-type'
                    label='Organization Type'
                    options={optionsOrgType}
                    initialOptionIndex={0}
                    getValue={(value) => {
                      setOrgType(value);
                    }}
                    menuProps={{
                      displayEmpty: true
                    }}
                  />}
                
                <br />
                <InputComp
                  type='text'
                  name='company-size'
                  id='company-size'
                  htmlFor='company-size'
                  label='Company Size'
                  placeholder='51'
                  iconButton={<EditOutlinedIcon sx={{ color: 'iconGrey' }} />}
                  valueInput={sizeOfCompany}
                  otherProps={{
                    onChange: (event) => {
                      setSizeOfCompany(event.target.value);
                    }
                  }}
                />
                <br />
              </Grid>
              <Grid item md={6} xs={12}>
                <InputBox
                  name='about-company'
                  id='about-company'
                  htmlFor='about-company'
                  label='About Company'
                  placeholder={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                  }
                  iconButton={<EditOutlinedIcon sx={{ color: 'iconGrey' }} />}
                  valueInput={aboutCompany}
                  handleChange={(event) => {
                    setAboutCompany(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </MainCard>
          <MainCard label='Company Brand Identity' sx={style}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} sm={4}>
                <Box>
                  <Typography className='label'>Logo</Typography>
                  <Box className='logoIcon'>
                    {logoBitmap ? (
                      <Avatar
                        src={logoBitmap}
                        sx={{
                          width: '8rem',
                          height: '8rem',
                          left: '2.17rem'
                        }}
                      />
                    ) : (
                      <Avatar
                        imgProps={{ crossOrigin: 'anonymous' }}
                        src={requests.PICTURE_BASE_URL + company.profilePic}
                        //src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMAgwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQADBgEHAgj/xABBEAACAQMDAQYEAwMHDQAAAAABAgMABBEFEiExBhNBUWFxIjKBkQcUoUJSkhUzU5PB0eEWQ2JjcnN0gqKx0vDx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEBQEABv/EACURAAMAAgIBBAIDAQAAAAAAAAABAgMRITESBBMiQTJRM2FiI//aAAwDAQACEQMRAD8A1aqgYyKuGPXmvoO6spRAV6HwoVbtW8qIifeDisJprs+nXi+iSoJWByRtPGDViypLuh3fEOvFfNdz969vR2o2j7ZYoXSMl2Y+OOKaW6JtGR96BRFchyDkUbHIMcV2r2iS51wLNV0dZ3LxDB9qAstEInDzD4R4edaXfnrQzzRs7JvAx1rsZb6A8U+zM6zbLFI3KqnXJPSlUcSuoKsGB6EHIrzbtNqlxq19f3MrOyy3BWNMnCRD5cDw4orsHro06/Swu2IsrhgoP9E56H2PAP0Na04qmNmdXqJrJrR6ba6Q8yq5OFPhTq1tEt4wWYswGAfKvlb+C3hCKpG0Y9aAuNVLfzR+H9qpH53wXL24LtS0+O5G5uD6UDFZ29kjTMQDjjJ60Pd6z8O2Pg+eaR3V5JI2WlJFOjHetNicmWN7SHV1rSIAtuoBHjSa61GabmVtx8s0C8jE818noMVRONIlvLVFhlz4D712qePI1KPQG2aS2uy/IBIHlTa1vQorPy74IkC7W3rkbGzj3q6FyqB2fj/vUd4po0MfqKXBp1uQ2MYq15UiUM5wKRW9yAQQaZrfKVAOMVFeJp8F8ZVSGiOD0PFWmTaOaWLdgDio90JFwpwR0NLWN7PU5CpNRiX4RKu7OMUJcyIIpJw43rGxBHtSTW7y3060mvLgnbGMk/vHwH1PFeQ6lqt5q120t1MxL/CqBjtRSflA8unvir8Ppd8md6j1fh8dFEV2hshG8WZAAFZemMePr7UIennW2Oi2NvpYknt4hI0Ge8O9iWIHhjHU46+HrWNBKsGGQQQR6VpJmTS0ey6XDc/yZafmixuDAneE/vbRnP1rlyGRdgNZLs323cOlrrjbkPAu8cj/AGx4+/8A9rbRrHdxpNCyyRuAyupyCD0NS0nL5LopXPAimhbyzVC2crZYkIvm1acQrCSXIA8MihLue3Ocxbz5mve4/o68KXLErWybMxKxA8TQrqymmVxcK/SMhR0GaBkkB8KZLYmkirPqalTAqUYJcJ3yOSAK+nupG4J4qkkEV811ymB5MNivXDCmVvdtJwoJ+lJIsbuabRfBbiZGjIZtuwH4h9KVkhFGLJX7Gkdw4XNXKd6+R68UtiYkc8elMIaS8aRQsuzFfic04gsE2OYN7MX/AGQ+MAH1xu/WsJACZkA654r27Vbe1udMuYr2ETQ92WZD44GfvXimn4a5gDkBT8xPTGOaoxP46IfUTq9/s2uupDBpV0YJXVAu1IUZEQc8EhX5445/wrCeNbLXYray0a6S0WwRJmQEW5wzYLdfj8AV+5rHKAWA4wT49KNCsnaPtoJ0hSZ4ZVif5JGQhW9j0NMNE1q/0+eGOzZ2+P4Y15JJI4Hvj9TVOszTSX8qTX5vRE2xZgTsIHHwg9F8vStJ+Gdukl9fXDqGaGNAhI+XcT0/hrzfB6F8tI3jSmWFGlQLIVBZQcgHHNAz7fLFGTelLrk9aRMouqv2DTyL0yKBk25qyYEk1Qc9DTNaEN7JlvSpU586lECSpX0VA8RjzzUwpGVYGj0LOxijIfCgkdVPzD70XFIoxyKFhSxpb4OKYwDikgvIYGVXbk+XNXw63AHx3TkeeaW5f0Om5QV2nvJNP7P3tzEu51iIXjpnjP0zmvGrWU208UqKGMZBCnoa9ju7u31PT7i0ljdBNGyE4zjIxmvG54pLeZ4ZlKyRsVYHzFFjWlyKzvbTQ41ftLPqtp+XktkjUsGysjN09/8A37Uk6Vyu0xInp7J1rVdhtXtNHTU5bxz8SRbI1GWcgt0+/U460ngYRaJeQtbgyzzwhXbgoFDtx78feqtK0u61W4/L2aAsSAWc7VXPTJ/s61xrfActy00er6ZqNvq9gl3a7thOCG6qR1B+9VXSUTo+jro+lwWUZL7Blnx8zHkmvi6XqKSuyt9cieUYaqJE8aMljLH4Qare2YoME58cUwWA1yifysvln6VK9s4Z3+R5/wCkX+seujSJx0kX+seneKmKZtifBCMaPOT86fxtRMegTOAe9U+nevTeMUXCBXHTCUITx9nbg4zMCP8AfvR0fZmVuRICf+JcU6gTdimEEI8+aW7Y2cUmeHZqZPi7uVwP6O7f+8Uhvx2YluHS+nmS4jbY5BdmyOMFuc/ett2gv20vRby6RtskceIyf3jwP1Irxc+pJPiT416W67ByJRwjU/lOxp66hdj2Vv8Axq+0t+xccocX8zEdBLGzD7YrH1yj0KVf0b66t+zF7EXN4xG8AsqsDnBx4Vy302xmi7vT3JRf9URWUi/Lf5OXId2/NC8iMaDoV2PuJ9un1FCWd1cWVwLiykaKZBw6eA/u968ddL7RsLnQbqMbwMqOc5I/tpXNbShiCWJ8g5JNbnRtV/lfSYLkrtZ8q4XoGHB+lEzWkTxsJFDZFc9x/aGPBtbTPNirg8lv4jUw3OC/P+ka1l1pkGc9yT6ZyKGe1UoFKAY+lH5oS8LM5hxwN/3NStENPTHEZx6GpXvJA+1RZXa5XCeKEcXRHNGwLyDS1WbGU5NNrBG2HvBg0NPQcS2w2DjpTGA4oGNMEUbHxikOiqZaEH4i8dmJjzzLGP8AqFeYWKJNdwxy7u7ZwG28nHpW8/EPtBAbZ9EhRZZH2tM+f5rBBAHqf0rB6fL3V5FIASUbcMdcinY0/EjzNeekaHtJolhp+nrNZmYv3gB3sSMeP7IrNRRvK+yNSzEEgKMnAGT+gNbPXZprvRbppra/g7tkIW6iAB+b5SP1+lZGxZUvITJcSW6huZohlo/UAYz7eWaNAUuSith+HunWmpQ6tFfwJLHiEDPDKfj5B6isneQxwTFIbmO5TqJI1ZQfowBBrWfhvf2tvdXVnKxWa52GI+Dbd3Hv8Vcvo7i158m1tra0061S2tUEcadBQ1zcrn5/1o24iDZzSyazDMPelJoqpNdA0tx1AB96oV8uCxwKYtapsxjFCSWn7potoW5aCw3A2smPDipVC5VQMjiuUOhgGEZjgCiIrJjkv18qu09G/wA6AB5mje5Zwdmc+lcu9HsWLy7Ry0sBkDa3pijo7LB+XHjRlqgjtwXymF5zVtndQz3HdJlj7VFWauzUn08JIHFqoXIByK++4ZhxwKcrCuOQKquYcr8PgMgAdaXOfbCvAkjx/wDEPTng1UXyrmC4AUsOgcDGD7gfofKstBxMnHU45r2nVdLOq20lpdQtskGcgYII6Eetec6/2N1HQ7SW9klhe3idQHUkNyQAceHJA61pY8stab5MXPgqadJcDTXCJNMnGy0VZEyq4CSDJyOADnjjr61hfatIO06mw/LNHdFu6Mee8BToB0/5R7c+ZpRo1pDqGq2tnPMYY5n2mQDOOOB9TgfWmoRXya0U2FjdajOILOB5nPXaOFHmT4D1r0fs32MhsLmK6u5FkkiwQo6buOenTIp1pelWek2xt7CMRr1ZmOWc+ZPjX1Lc7G8hSat1wirHhmOaL7nIGdnFLpJgDyCKJTUY41w7Gg9RnE8eYVUg/tA0Ep9MddLW0wkalbhQrgHA6kUtvS0hDpt2n92gHWTxBq+yfb8BpihLlCXkdcMpPe5rtMCvPT9Kld2c8GNFtBn5frTCCNUTrjHJo9bVKC1siLT32DBJCg1lPJ7jUm3ONY06KtZcvbJHHxuI5Xqa7pkUen574ZkkHwvnwpJpl7svoVmJ7sMMnyrSRvHf6kvdrtjjHDHnPtR1HgvD6EzkVvy+xpawiFeCW3HPPNFd1uH+FDWtwfzLI2MCmiLuFR1tDKvQBLa5XOOR0xWR7d2stx2Rv+9BVF2OD44VwTmt3JJHGOXA9zQGp2sOo6fc2kmGhuImjkAPOCMU3Dkc0mLybuGj843zRmKNEjVNqgr5kHzPjRfZLTZdU121iiyFicTSN+6qnP6nA+tONV7DatB3ccTW9x3eU3iTbkDocGth2O0xOz1oifC88pDXD46nyHoK2ryLx3JjY8D89VwhhNFIoywoK6gJUMOp6g+FbU9zKg4UHrQc2nxF93UnwPSopzr7NKsG1wYKaKTHSuWyyRxs2wt9K2F/pcb5x8LY4xQiRw2CbLjBDdPWn+8muBHsOXyZiW43D5cGq7dXaXIGae3Onq26VdoU8gelDaZLBFdkMvC+NGr4FPG1XII1y6kgxDIqVozJp7HJCkmpS/cf6He1/o0CdDSLtCdtqCOualSsvB/IjWz/AIMy1pI7XPLeNa3SriUADecJkL6VKlaGbozMPY9jkYuhJ5PU4602XiMkeVSpWdZVXRkNVuJfzDr3hxk8VZok0hiuFLHAGQK5UqnX/MFv5iu9J39aHDHHWu1KtnpEdfkFWlxKGOJDxWiidmhBY54qVKmzdlOHoU38siyjDGstqtxK0uGkJAPFSpTsQn1AUjtLbkOSdo49KXE7S2OKlSnQT5CpnbPWpUqUYs//2Q=="
                        sx={{
                          width: '8rem',
                          height: '8rem',
                          left: '2.17rem'
                        }}
                      />
                    )}
                    <IconButton>
                      <PhotoCameraOutlinedIcon
                        sx={{
                          color: 'white',
                          backgroundColor: 'dullBlue',
                          borderRadius: '50%',
                          p: '0.2rem',
                          fontSize: '1.3rem'
                        }}
                        onClick={() => {
                          inputRef.current.click();
                        }}
                      />
                      <input type='file' onChange={handleBrowse} hidden ref={inputRef}></input>
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sm={8} xs={12}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography className='label'>Brand Color</Typography>
                    <EditOutlinedIcon sx={{ color: 'iconGrey', mt: '3rem' }} />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '2rem',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      mt: '1rem',
                      maxWidth: { xs: '100%', lg: '80%' }
                    }}
                  >
                    {colors.map((color, ind) => (
                      <IconButton
                        key={ind}
                        id={ind}
                        onClick={(e) => setSelectedColor(colors[e.currentTarget.id])}
                        sx={{ p: 0, m: 0 }}
                      >
                        {color === selectedColor ? (
                          <CheckCircleIcon sx={{ color: color }} />
                        ) : (
                          <CircleIcon sx={{ color: color }} />
                        )}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </MainCard>
          <Box sx={{ width: { md: '30%', xs: '50%' }, mx: 'auto' }}>
            {/* <ButtonPurple inputType='submit'>Save</ButtonPurple> */}
            <AuthButtonGroup isLinkPresent={false} btnType='submit' btnElement='Save' />
          </Box>
        </Box>
      }
    </Box>
  );
};

export default CompanyInformation;
