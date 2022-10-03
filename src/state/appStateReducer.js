import { GUEST_NAME, messages } from "../config/config";
import initialAppState from "./initialAppState";

const appStateReducer = (state, action) => {
  switch (action.type) {
    //--------------------------------USER LOGING FROM STORAGE
    case "AUTH_FROM_STORAGE": {
      return { ...state, userData: action.userData, userName: action.userData.name, isAuth: true, message: messages.W_BACK };
    }

    //--------------------------------USER LOGING

    case "LOGGED_IN": {
      return { ...state, userData: action.userData, userName: action.userData.name, message: messages.L_IN, processing: false, isAuth: true };
    }

    case "LOGOUT": {
      return {  ...initialAppState, message: messages.L_OUT };
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
    case "NOTIF_USER_LOGIN_FAIL": {
      return { ...state, message: action.message || messages.UPS };
    }

    case "NOTIF_START_USER_LOGIN": {
      return { ...state, message: messages.PROCESSING, processing: true };
    }

    case "END_PROCESSING": {
      return { ...state, processing: false };
    }

    case "RESET_MESSAGE": {
      return { ...state, message: null };
    }

    case "LOAD_USER_WORDS": {
      return { ...state, userWords: action.userWords,  userWordsTotal: action.userWords.length};
    }

    case "ADD_USER_WORD": {
      return { ...state, userWordsTotal: state.userWordsTotal+1, message: `add word: ${action.message}`};
    }

    case "SET_CURRENT_WORDS_PAGE": {
      return { ...state, pageOfWords: action.pageOfWords};
    }

    default:
      // return state
      throw new Error();
  }
};
export default appStateReducer;
