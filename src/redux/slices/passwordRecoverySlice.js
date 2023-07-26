import { createSlice } from '@reduxjs/toolkit';
import {
  forgetPasswordRequest,
  resetPasswordRequest,
  verifyCodeRequest
} from '../../services/auth';
import { STATUSES } from '../../services/requests';
import { setUserInfo } from './authSlice';

const passwordRecoverySlice = createSlice({
  name: 'passwordRecovery',
  initialState: {
    status: STATUSES.IDLE,
    serverErrMsg: ''
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setServerErrMsg(state, action) {
      state.serverErrMsg = action.payload;
    }
  }
});

export const { setStatus, setServerErrMsg, setImg } = passwordRecoverySlice.actions;
export default passwordRecoverySlice.reducer;

export function forgetPassword(data) {
  return async function forgetPasswordThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await forgetPasswordRequest(data);
      dispatch(setUserInfo(response.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
      // console.log(err); //testing api
      dispatch(setServerErrMsg(err.response ? err.response.data.errors[0].message : err.message));
    }
  };
}
export function verifyCode(data) {
  return async function verifyCodeThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await verifyCodeRequest(data);
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(setServerErrMsg(err.response ? err.response.data.errors[0].message : err.message));
    }
  };
}
export function resetPassword(data) {
  return async function resetPasswordThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await resetPasswordRequest(data);
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
      console.log(err);
      dispatch(setServerErrMsg(err.response ? err.response.data.errors[0].message : err.message));
    }
  };
}
