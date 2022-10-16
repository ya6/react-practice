export const urls = {
  // HOST: "https://rs-lang-be-125.herokuapp.com",
  HOST: "http://localhost:3000",
  PATH_NAME_WORDS: "words",
  PATH_NAME_USERS: "users",
  PATH_NAME_SIGNIN: "signin",
};
export const route = {
  ABOUT: "about",
  TEXTBOOK: "/textbook",
  REPEAT: "repeat",
  STATISTICS: "statistics",
  SIGNIN: "signin",
  LOGIN: "login",
  REGISTER: "register",
  CHECK: "/check",
};

export const pages = [
  {
    page: "TextBook",
    route: "/textbook",

  },

  {
    page: "Repeat List",
    route: "/repeat",   
  },
  {
    page: "Statistics",
    route: "/statistics",   
  },
  {
    page: "About",
    route: "/about",   
  },
  {
    page: "Signin",
    route: "/signin",   
  },

];

export const version = "0.2.0";

export const levels = {
  "Group 1": 0,
  "Group 2": 1,
  "Group 3": 2 ,
  "Group 4": 3,
  "Group 5": 4,
  "Group 6": 5
};
export const dictionary ={
  PAGE_SIZE : 20,
  WORDS_IN_CATEGORY : 600
}
export const GUEST_NAME = "guest"

export const messages = {
  L_OUT: "You are logged out",
  L_IN: "You are logged in",
  PROCESSING: "processing...",
  UPS: "Ups...",
  REGISTERED: "You are registered",
  W_BACK: "welcome back!"
}

export const wordStatus = {
  TO_LERN: "TO_LERN"
}

export const title = {
  PUT_TO_LERN: "Put To Lern List",
  TO_CHECK: "Check knowledge"
}
export const STEP = 0.025
export const LIMIT = 0.3
