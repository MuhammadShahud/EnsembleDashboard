export const style = {
  '& .heading': {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.2rem',
    letterSpacing: '0em',
    textAlign: 'left'
  },
  '& .content': {
    fontSize: '0.95rem',
    fontWeight: 400,
    lineHeight: '1rem',
    textAlign: 'left',
    marginTop: '0.3rem',
    wordWrap: 'break-word'
  },
  '& .item': {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1
  },
  '& .main-heading': {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '2.5rem',
    marginTop: 0
  },
  '& .sub-heading': {
    fontSize: '1.1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
    color: 'dullBlue'
  },
  '& .main-sub-heading': {
    fontSize: '1.7rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
    marginBottom: 1
  },
  '& .right-top-side': {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  '.icon': {
    width: '1rem',
    height: '1rem'
  },
  '& .logo-icon': {
    border: 1,
    borderColor: 'lightGrey',
    borderRadius: '50%',
    marginBottom: '-4rem',
    marginLeft: 1,
    width: '8rem',
    height: '8rem',
    backgroundImage: 'url(pt.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'white'
  },
  '& .bg-img-card': {
    width: '100%',
    height: '27vh',
    backgroundImage: 'url(card-bg.png)',
    backgroundSize: 'cover',
    borderRadius: '8px',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-end'
  }
};
