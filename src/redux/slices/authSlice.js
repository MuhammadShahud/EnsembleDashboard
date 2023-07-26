import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../services/auth';
import { STATUSES } from '../../services/requests';

const authToken = localStorage.getItem('authToken') ? localStorage.getItem('authToken') : null;
const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo') || '{}')
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: authToken !== null,
    authToken,
    status: STATUSES.IDLE,
    serverErrMsg: '',
    forgetCode: null,
    userInfo
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setServerErrMsg(state, action) {
      state.serverErrMsg = action.payload;
    },
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    logout(state) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userInfo');
      state.isAuth = false;
    },
    setForgetCode(state, action) {
      state.forgetCode = action.payload;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

export const {
  setStatus,
  setServerErrMsg,
  setIsFirstTime,
  setIsAuth,
  logout,
  setForgetCode,
  setUserInfo
} = authSlice.actions;
export default authSlice.reducer;

export function authenticateUser(data) {
  return async function authenticateUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await login(data);
      let token = 'Bearer ' + response.data.token;
      localStorage.setItem('authToken', token);
      let userInfo = {
        id: response.data.message.id,
        createdAt: response.data.message.createdAt,
        firstTime: response.data.message.firstTime
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch(setUserInfo(userInfo));

      dispatch(setIsAuth(true));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
      dispatch(
        setServerErrMsg(
          err.response?.data.errors
            ? 'Your email or password is invalid. Try again'
            : 'Something Went Wrong'
        )
      );
    }
  };
}
