interface SignupState {
  email: string;
  password: string;
  showPassword: boolean;
  showConfirmCode: boolean;
  error: string;
  loading: boolean;
}

export enum SignupEnum {
  SET_EMAIL = "SET_EMAIL",
  SET_PASSWORD = "SET_PASSWORD",
  TOGGLE_SHOW_PASSWORD = "TOGGLE_SHOW_PASSWORD",
  TOGGLE_SHOW_CONFIRM_CODE = "TOGGLE_SHOW_CONFIRM_CODE",
  ERROR_MESSAGE = "ERROR_MESSAGE",
  LOADING = "LOADING",
}

type SignupAction =
  | { type: SignupEnum.SET_EMAIL; payload: string }
  | { type: SignupEnum.SET_PASSWORD; payload: string }
  | { type: SignupEnum.TOGGLE_SHOW_PASSWORD; payload: boolean }
  | { type: SignupEnum.TOGGLE_SHOW_CONFIRM_CODE; payload: boolean }
  | { type: SignupEnum.ERROR_MESSAGE; payload: string }
  | { type: SignupEnum.LOADING; payload: boolean };

const SignupReducer = (state: SignupState, action: SignupAction) => {
  switch (action.type) {
    case SignupEnum.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SignupEnum.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SignupEnum.TOGGLE_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };
    case SignupEnum.TOGGLE_SHOW_CONFIRM_CODE:
      return {
        ...state,
        showConfirmCode: action.payload,
      };
    case SignupEnum.ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    case SignupEnum.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default SignupReducer;
