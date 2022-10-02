import { GUEST_NAME } from "../config/config";

const initialAppState = {
    userName: GUEST_NAME,
    userData: {},
    isAuth: false,
    userWords: [],
    userWordsTotal: 0,
  
    message: null,
   
    processing: false,
  
    group: 0,
    page: 0,
    pageOfWords: [],
    currentWorNum: 0,
  };
  
  export default initialAppState