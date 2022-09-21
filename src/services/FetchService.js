import { urls } from "../config/config";

export default class FetchService {
  static serveUser = async (user, setStateFunc) => {
    // to controller
    let url;
    if (user.name) {
      url = `${urls.HOST}/${urls.PATH_NAME_USERS}`;
    } else {
      url = `${urls.HOST}/${urls.PATH_NAME_SIGNIN}`;
    }
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const data = await FetchService.fetcher(url, options);
    setStateFunc(data);

    // return data;
  };

  static loadFirstWords = async (setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}`;
    const data = await FetchService.fetcher(url);
    // imitation of long load
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
