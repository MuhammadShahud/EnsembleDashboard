import { createSlice } from '@reduxjs/toolkit';

const personalInfo = localStorage.getItem('personalInfo')
  ? JSON.parse(localStorage.getItem('personalInfo') || '{}')
  : null;
const companyInfo = localStorage.getItem('companyInfo')
  ? JSON.parse(localStorage.getItem('companyInfo') || '{}')
  : null;
const brandColor = localStorage.getItem('brandColor')
  ? JSON.parse(localStorage.getItem('brandColor') || '{}')
  : null;
const logo = localStorage.getItem('logo') ? JSON.parse(localStorage.getItem('logo') || '{}') : null;
const logoName = localStorage.getItem('logoName')
  ? JSON.parse(localStorage.getItem('logoName') || '{}')
  : null;

const companyInfoSlice = createSlice({
  name: 'companyInfo',
  initialState: {
    name: personalInfo ? personalInfo.name : '',
    designation: personalInfo ? personalInfo.designation : '',
    companyName: companyInfo ? companyInfo.companyName : '',
    sizeOfCompany: companyInfo ? companyInfo.sizeOfCompany : '',
    companyLogo: logo,
    companyLogoName: logoName,
    brandColor: brandColor ? brandColor : '',
    firstTime: false,
    aboutCompany: '',
    organizationType: ''
  },
  reducers: {
    setPersonalInfo(state, action) {
      state.name = action.payload.name;
      state.designation = action.payload.designation;
      localStorage.setItem(
        'personalInfo',
        JSON.stringify({ name: action.payload.name, designation: action.payload.designation })
      );
    },
    setCompanyInfo(state, action) {
      state.companyName = action.payload.companyName;
      state.sizeOfCompany = action.payload.companySize;
      localStorage.setItem(
        'companyInfo',
        JSON.stringify({
          companyName: action.payload.companyName,
          sizeOfCompany: action.payload.companySize
        })
      );
    },
    setBrandColor(state, action) {
      state.brandColor = action.payload;
      localStorage.setItem('brandColor', JSON.stringify(action.payload));
    },
    setCompanyLogo(state, action) {
      state.companyLogo = action.payload;
      localStorage.setItem('logo', JSON.stringify(action.payload));
    },
    setCompanyLogoName(state, action) {
      state.companyLogoName = action.payload;
      localStorage.setItem('logoName', JSON.stringify(action.payload));
    },
    resetInfo(state) {
      state.name = '';
      state.designation = '';
      state.companyName = '';
      state.sizeOfCompany = '';
      state.brandColor = '';
      state.companyLogo = '';
      state.companyLogoName = '';
      localStorage.removeItem('personalInfo');
      localStorage.removeItem('companyInfo');
      localStorage.removeItem('brandColor');
      localStorage.removeItem('logo');
      localStorage.removeItem('logoName');
    }
  }
});
export const {
  setBrandColor,
  setPersonalInfo,
  setCompanyInfo,
  setCompanyLogo,
  setCompanyLogoName,
  resetInfo
} = companyInfoSlice.actions;
export default companyInfoSlice.reducer;
