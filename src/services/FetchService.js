import { urls } from "../config/config";

export default class FetchService {
  static createUser = async (user) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_USERS}`;
    const options = {
      method: "POST",
      body: JSON.stringify(user),
    };
    const data = await FetchService.fetcher(url, options);
    return data;
  };

  static loadFirstWords = async (setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}`;
    const data = await FetchService.fetcher(url);
    // imitation of long load
    setTimeout(() => {
      setStateFunc(data);
    }, 2000);
  };

  static fetcher = async (url, options = {}) => {
    let data;
    try {
      const response = await fetch(url, options);
      data = response.json();
    } catch (error) {
      console.log("error load data");
    }
    return data;
  };
}
