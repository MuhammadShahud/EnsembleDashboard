import { useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import { useSelector } from 'react-redux';
import { colors } from '../../utils/colorArray';

const ChooseTheColorSwatches = ({ selectedColor, setSelectedColor }) => {
  const { brandColor } = useSelector((state) => state.companyInfo);

  useEffect(() => {
    if (brandColor === '') {
      return;
    }
    setSelectedColor(brandColor);
  }, []);
  return (
    <Box display='grid' justifyItems='center' mt='1rem'>
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          mt: '1rem',
          maxWidth: { xs: '100%' },
          justifyContent: 'center'
        }}
      >
        {colors.map((color, ind) => (
          <IconButton
            key={ind}
            id={ind}
            onClick={(e) => {
              setSelectedColor(colors[e.currentTarget.id]);
              //  dispatch(setBrandColor(selectedColor));
            }}
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
  );
};

// ChooseTheColorSwatches.propTypes = {};

export default ChooseTheColorSwatches;
