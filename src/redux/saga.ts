import { all, put, select, takeEvery } from "redux-saga/effects";
import { updateUserInfo, updateUsers } from "./reducer/user";
import { UserType } from "./actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { RootState } from "./store";
import db from "../constants/db";

/** Users Sorting */
function sortBy(key: string): IUser[] {
  const sortedData = [...db.users];

  if (key === "lastActivity" || key === "timeSpent" || key === "createdDate") {
    return sortedData.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      // Ensure properties are defined
      if (aValue === undefined || bValue === undefined) {
        throw new Error(`Property ${key} is undefined.`);
      }

      return bValue - aValue;
    });
  } else {
    return sortedData;
  }
}

/** Update users after sorting */

function* updateUsersSaga(
  action: PayloadAction<{
    sortValue: string;
  }>
) {
  const sortValue = action.payload.sortValue;
  yield put(updateUsers(sortBy(sortValue)));
}

/** filter the users with the ID */

function* updateUserInfoSaga(action: PayloadAction<{ id: string }>) {
  const id = action.payload.id;
  const users: IUser[] = yield select((state: RootState) => state.users.users);
  const user = users.find((user: IUser) => user.id === id);

  if (user) yield put(updateUserInfo(user));
}

export default function* counterSaga() {
  yield all([
    takeEvery(UserType.UPDATE_USERS, updateUsersSaga),
    takeEvery(UserType.UPDATE_USER_INFO, updateUserInfoSaga),
  ]);
}
