import { urls } from "../config/config";

export default class Loader {
  static createUser = async (user) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_USERS}`;
    const options = {
      method: "POST",
      body: JSON.stringify(user),
    };
    const data = await Loader.load(url, options);
    return data;
  };

  static loadFirstWords = async (setStateFunc) => {
    const url = `${urls.HOST}/${urls.PATH_NAME_WORDS}`;
    const data = await Loader.load(url);
    setStateFunc(data);
  };

  cre;

  static load = async (url, options = {}) => {
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
