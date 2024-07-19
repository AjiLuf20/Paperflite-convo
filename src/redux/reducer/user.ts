import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import db from "../../constants/db";
import { IUser } from "../../types";

export interface IUserState {
  users: IUser[];
  userInfo: IUser;
  isBackBtnShown: boolean;
}

const initialState: IUserState = {
  users: db.users,
  userInfo: db.users[1],
  isBackBtnShown: false,
};

const userReducer = createSlice({
  name: "user-management",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
    updateUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    updateBackBtnShown: (state, action: PayloadAction<boolean>) => {
      state.isBackBtnShown = action.payload;
    },
  },
});

export const { updateUserInfo, updateUsers, updateBackBtnShown } =
  userReducer.actions;

export default userReducer.reducer;
