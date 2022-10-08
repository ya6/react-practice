import { urls } from "../config/config";

export default class FetchService {
  //--------sub services

  static fetcher = async (url, options = {}) => {
    let data;
    try {
      const response = await fetch(url, options);
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = response.json();
      } else {
        data = response.text();
      }
    } catch (error) {
      console.log("error load data");
    }
    return data;
  };

  static servePOST = async (url, credentials) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    const data = await FetchService.fetcher(url, options);
    if (typeof data === "string") {
      return { serverMessage: data };
    }
    return data;
  };

  //----------USER
  static createUser = async (user, setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_USERS}`;
    const data = await FetchService.servePOST(url, user);
    setStateFunc(data);
  };

  static loginUser = async (credentials, setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_SIGNIN}`;
    const data = await FetchService.servePOST(url, credentials);
    setStateFunc(data);
  };

  //--------WORDS

  static loadFirstWords = async (setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}`;
    const data = await FetchService.fetcher(url);
    // imitation of a long loading time
    // setTimeout(() => {
    //   setStateFunc(data);
    // }, 2000);


    setStateFunc(data);
  };

  static loadPageOfWords = async (group = 0, page = 0) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}?group=${group}&page=${page}`;
    // console.time("fetch-time");
    const data = await FetchService.fetcher(url);
    // console.timeEnd("fetch-time");
    
    return data;
  };

  //----Registered user requests

  //------User Words
  static loadUserWords = async (userData) => {
    const url = `${urls.HOST}/users/${userData.userId}/words`;
    const options = {
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: "application/json",
      },
    };
    const data = await FetchService.fetcher(url, options);
    return data;
  };

  static saveUserWord = async (userData, currenWord, wordData) => {
    const url = `${urls.HOST}/users/${userData.userId}/words/${currenWord.id}`;

    const { difficulty, ...rest } = wordData;
    const _wordData = {
      difficulty: difficulty,
      optional: {word: currenWord, ...rest},
         };
console.log(_wordData);
    const options = {
      method: "POST",
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_wordData),
    };

    const data = await FetchService.fetcher(url, options);

    return data;
  };
}
