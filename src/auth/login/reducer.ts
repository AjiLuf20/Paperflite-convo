interface LoginState {
  email: string;
  password: string;
  showPassword: boolean;
  showConfirmCode: boolean;
  error: string;
  loading: boolean;
}

export enum LoginEnum {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  TOGGLE_SHOW_PASSWORD = "TOGGLE_SHOW_PASSWORD",
  TOGGLE_SHOW_CONFIRM_CODE = "TOGGLE_SHOW_CONFIRM_CODE",
  ERROR_MESSAGE = "ERROR_MESSAGE",
  LOADING = "LOADING",
}

type LoginAction =
  | { type: LoginEnum.SET_EMAIL; payload: string }
  | { type: LoginEnum.SET_PASSWORD; payload: string }
  | { type: LoginEnum.TOGGLE_SHOW_PASSWORD; payload: boolean }
  | { type: LoginEnum.TOGGLE_SHOW_CONFIRM_CODE; payload: boolean }
  | { type: LoginEnum.ERROR_MESSAGE; payload: string }
  | { type: LoginEnum.LOADING; payload: boolean };

const loginReducer = (state: LoginState, action: LoginAction) => {
  switch (action.type) {
    case LoginEnum.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case LoginEnum.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case LoginEnum.TOGGLE_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };
    case LoginEnum.TOGGLE_SHOW_CONFIRM_CODE:
      return {
        ...state,
        showConfirmCode: action.payload,
      };
    case LoginEnum.ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    case LoginEnum.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
