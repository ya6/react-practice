import { messages } from "../config/config"

const appStateReducer = (state, action) => {
    switch (action.type) {
      case "AUTH_FROM_STORAGE": {
        return { ...state, userData: action.userData, isAuth: true, message: messages.W_BACK }
      }
     
      case "NOTIF_START_USER_REGISTRATION": {
        return { ...state, message: messages.PROCESSING, processing: true }
      }
 
      case "END_PROCESSING": {
        return { ...state, processing: false }
      }

      case "NOTIF_USER_REGISTERED": {
        return { ...state, message: messages.U_CREATED }
      }

      case "NOTIF_USER_REGISTRATION_FAIL": {
        return { ...state, message: action.message || messages.UPS }
      }
      
      case "LOGGED_IN": {
        return { ...state, userData: action.userData, message: messages.L_IN, processing: false, isAuth: true }
      }
      
      case "NOTIF_USER_LOGIN_FAIL": {
        return { ...state, message: action.message || messages.UPS }
      }
      case "NOTIF_START_USER_LOGIN": {
        return { ...state, message: messages.PROCESSING, processing: true }
      }

            
      
  
      default:
        return state
    }
  }
  export default appStateReducer