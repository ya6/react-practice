import { GUEST_NAME, messages } from "../config/config";

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_FROM_STORAGE": {
      return { ...state, userData: action.userData, userName: action.userData.name,  isAuth: true, message: messages.W_BACK };
    }

    case "NOTIF_START_USER_REGISTRATION": {
      return { ...state, message: messages.PROCESSING, processing: true };
    }
    case "NOTIF_USER_REGISTERED": {
      return { ...state, message: messages.REGISTERED };
    }

    case "NOTIF_USER_REGISTRATION_FAIL": {
      return { ...state, message: action.message || messages.UPS };
    }

    case "END_PROCESSING": {
      return { ...state, processing: false };
    }

    case "LOGGED_IN": {
      return { ...state, userData: action.userData, userName: action.userData.name, message: messages.L_IN, processing: false, isAuth: true };
    }

    case "NOTIF_USER_LOGIN_FAIL": {
      return { ...state, message: action.message || messages.UPS };
    }
    case "NOTIF_START_USER_LOGIN": {
      return { ...state, message: messages.PROCESSING, processing: true };
    }

    case "RESET_MESSAGE": {
      return { ...state, message: null };
    }

    case "LOGOUT": {
      return { ...state, isAuth: false, userName: GUEST_NAME, userData: {}, message: messages.L_OUT };
    }

    default:
      // return state
      throw new Error();
  }
};
export default appStateReducer;
