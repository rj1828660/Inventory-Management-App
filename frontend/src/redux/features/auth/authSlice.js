import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLoggedIn:false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});
// eslint-disable-next-line
export const {} = authSlice.actions

export default authSlice.reducer