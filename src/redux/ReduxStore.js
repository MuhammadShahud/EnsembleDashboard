import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import companyInfoSlice from './slices/companyInfoSlice';
import passwordRecoveryReducer from './slices/passwordRecoverySlice';
import registerReducer from './slices/registerSlice';
import surveyResultReducer from './slices/surveyResultSlice';
import companyReducer from './slices/companySlice';
import employeeReducer from './slices/employeeSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    companyInfo: companyInfoSlice,
    passwordRecovery: passwordRecoveryReducer,
    surveyResult: surveyResultReducer,
    company: companyReducer,
    employee: employeeReducer
  }
});
