/** Saga */

import { SortByEnum } from "../dashboard/conversationsTrack";

export enum UserType {
  UPDATE_USERS = "UPDATE_USERS_SAGA",
  UPDATE_USER_INFO = "UPDATE_USER_INFO_SAGA",
}

export const updateUsersSaga = (payload: { sortValue: SortByEnum }) => ({
  type: UserType.UPDATE_USERS,
  payload,
});

export const updateUserInfoSaga = (payload: { id: string }) => ({
  type: UserType.UPDATE_USER_INFO,
  payload,
});
