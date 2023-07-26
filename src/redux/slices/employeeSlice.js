import { createSlice } from '@reduxjs/toolkit';
import { deleteEmployee } from '../../services/employee';
import { STATUSES } from '../../services/requests';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    status: STATUSES.IDLE,
    id: ''
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    }
  }
});

export const { setStatus, setId } = employeeSlice.actions;
export default employeeSlice.reducer;

export function deleteCompanyEmployee(id) {
  return async function authenticateUserThunk(dispatch) {
    dispatch(setId(id));
    dispatch(setStatus(STATUSES.LOADING));
    try {
      // console.log(id);
      await deleteEmployee(id);
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (err) {
      // console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
