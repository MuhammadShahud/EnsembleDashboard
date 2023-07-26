export const style = {
  '& .cardwithsvgtextbtn-container': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    border: '1px solid #C9C5CA',
    borderRadius: '10px'
  },
  '& .cardwithsvgtextbtn-heading': {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.375rem',
    lineHeight: '28px',
    marginTop: '1rem'
  },
  '& .cardwithsvgtextbtn-text': {
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '0.875rem',
    lineHeight: '20px',
    color: 'textDarkGrey',
    padding: '0 50px',
    marginTop: '0.2rem'
  },
  '& .cardwithsvgtextbtn-btn': {
    borderRadius: '3rem',
    border: '1px solid #5055AD',
    color: '#5055AD',
    my: '1rem',
    p: '0.3rem 1rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'darkPurple',
      color: 'white'
    }
  },
  '& .cardwithsvgtextbtn-img-container': {
    width: '200px'
  }
};
