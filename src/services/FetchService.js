import { urls } from "../config/config";

export default class FetchService {
  static createUser = async (user, setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_USERS}`;
    const data = await FetchService.serveUser(url, user);
    setStateFunc(data);
  };

  static loginUser = async (credentials, setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_SIGNIN}`;
    const data = await FetchService.serveUser(url, credentials);
    setStateFunc(data);
  };

  static serveUser = async (url, credentials) => {
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

  static loadFirstWords = async (setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}`;
    const data = await FetchService.fetcher(url);
    // imitation of a long loading time
    // setTimeout(() => {
    //   setStateFunc(data);
    // }, 2000);

    setStateFunc(data);
  };

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
}
