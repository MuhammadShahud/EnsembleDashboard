import { createSlice } from '@reduxjs/toolkit';

const surveyInfoSlice = createSlice({
  name: 'surveyInfo',
  initialState: {
    data: []
  },
  reducers: {
    setData(state, action) {
      console.log(action.payload);
      state.data = action.payload.data;
    },
    resetInfo(state, action) {
      state.data = [];
    }
  }
});
export const { setData } = surveyInfoSlice.actions;
export default surveyInfoSlice.reducer;
