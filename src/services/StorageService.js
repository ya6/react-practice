class StorageService {
  static saveUser = (userData) => {
    window.localStorage.setItem("user", JSON.stringify(userData));
  };

  static loadSavedUser = () => {
    let resp = null;
    if (window.localStorage.getItem("user")) {
      resp = window.localStorage.getItem("user");
    }
    return JSON.parse(resp);
  };

  static clearUser = () => {
    window.localStorage.removeItem("user");
  };

  static saveItem = (item, data) => {
    window.localStorage.setItem(item, JSON.stringify(data));
  };

  static loadItem = (item) => {
    let resp = null;
    if (window.localStorage.getItem(item)) {
      resp = window.localStorage.getItem(item);
    } 
    return JSON.parse(resp);
  };
}
export default StorageService;
