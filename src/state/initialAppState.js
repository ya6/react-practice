import { GUEST_NAME } from "../config/config";

const initialAppState = {
    userName: GUEST_NAME,
    userData: {},
    isAuth: false ,
  
    message: null,
   
    processing: false,
  
    group: 0,
    page: 0,
    pageOfWords: [],
    currentWorNum: 0,
  };
  
  export default initialAppState