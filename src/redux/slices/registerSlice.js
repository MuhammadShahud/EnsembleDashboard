import { createSlice } from '@reduxjs/toolkit';
import { register } from '../../services/auth';
import { STATUSES } from '../../services/requests';

const registerSlice = createSlice({
  name: 'register',
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

export const { setStatus, setServerErrMsg } = registerSlice.actions;
export default registerSlice.reducer;

export function registerUser(data) {
  return async function registerUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await register(data);
      if (response.data.success === true) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
        dispatch(setServerErrMsg('Something went wrong'));
      }
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
      // console.log(err);
      dispatch(
        setServerErrMsg(
          err.response?.data.errors ? err.response.data.errors[0].message : 'Something Went Wrong'
        )
      );
    }
  };
}
