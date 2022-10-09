import { GUEST_NAME } from "../config/config";

const initialAppState = {
    userName: GUEST_NAME,
    userData: {},
    isAuth: false,
    userWords: [],
    userWordsTotal: 0,
    group: 0,
    page: 0,
  
    message: null,
    
    processing: false,
    pageOfWords: [],

    
  //--not used
    currentWorNum: 0,
  };
  
  export default initialAppState