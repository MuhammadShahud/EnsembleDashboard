import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useRef } from 'react';
import Styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyLogo, setCompanyLogoName } from '../../redux/slices/companyInfoSlice';

const InputDragUploadFileComp = (props) => {
  const { setLogo, errorMessage, error, setError, logoBitmap, setLogoBitmap } = props;
  const { companyLogoName } = useSelector((state) => state.companyInfo);
  const inputRef = useRef();
  let dispatch = useDispatch();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUploadDisplay = (file) => {
    setLogo(file);
    dispatch(setCompanyLogoName(file.name));
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadFile = reader.result;
      setLogoBitmap(uploadFile);
    });
    reader.readAsDataURL(file);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    let logo = event.dataTransfer.files[0];
    setError(false);
    handleFileUploadDisplay(logo);
  };

  const handleBrowse = (event) => {
    event.preventDefault();
    let logo = event.target.files[0];
    setError(false);
    handleFileUploadDisplay(logo);
  };

  const handleDelete = () => {
    setLogo(null);
    setLogoBitmap(null);
    dispatch(setCompanyLogo(null));
    dispatch(setCompanyLogoName(null));
  };

  return (
    <Box sx={Styles}>
      <Typography sx={{ fontWeight: '500', mt: '2rem' }}>Company Logo</Typography>
      {!logoBitmap && (
        <Box
          className={`input-field ${error && 'input-error-state'}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input type='file' onChange={handleBrowse} hidden ref={inputRef}></input>
          <Typography>Drag And Drop Logo Here, Or</Typography>
          <Button
            className='file-browse-btn'
            onClick={() => {
              inputRef.current.click();
            }}
          >
            <Typography>Browse</Typography>
          </Button>
        </Box>
      )}
      {logoBitmap && (
        <Box className={`input-field ${error && 'input-error-state'}`}>
          <IconButton className='file-delete-icon' onClick={handleDelete}>
            <CloseIcon />
          </IconButton>
          <img alt='logo' className='logo-tumbnail' src={logoBitmap !== null ? logoBitmap : ''} />
          <Typography color='black' variant='caption'>
            {companyLogoName !== null ? companyLogoName : ''}
          </Typography>
        </Box>
      )}

      {error && errorMessage !== (null || '') && (
        <Typography variant='body1' color='red' pl='0.5rem' mt='1rem'>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default InputDragUploadFileComp;
