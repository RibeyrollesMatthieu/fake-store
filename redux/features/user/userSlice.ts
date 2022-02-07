import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_addressState, I_userState, I__userDataState } from "./userTypes";

const initialState: I_userState = {
  data: {
    name: {
      firstname: 'test',
      lastname: 'test'
    },
    email: 'test@test.com',
    username: 'test',
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeFirstname: (state, action: PayloadAction<string>) => { state.data.name.firstname = action.payload; },
    changeLastname: (state, action: PayloadAction<string>) => { state.data.name.lastname = action.payload; },
    changeName: (state, action: PayloadAction<{ firstname: string, lastname: string }>) => { state.data.name = { ...action.payload }; },
    changeUsername: (state, action: PayloadAction<string>) => { state.data.username = action.payload; },
    changeEmail: (state, action: PayloadAction<string>) => { state.data.email = action.payload; },
    changeAddress: (state, action: PayloadAction<I_addressState>) => { state.data.address = { ...action.payload }; },
    changePhone: (state, action: PayloadAction<string>) => { state.data.phone = action.payload; },
    updateUser: (state, action: PayloadAction<I__userDataState>) => { state.data = { ...action.payload }}
  }
});

export const { changeFirstname, changeLastname, changeUsername, changeName, changeEmail, changeAddress, changePhone, updateUser } = userSlice.actions;
export default userSlice.reducer;